import test from 'ava';
import React from 'react';
import {forEach} from 'lodash/fp';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import PopulationOwners from '..';
import {makeModel, people, ownerLabels} from '../../../test/helpers/population-owners';
import {OwnersModel} from '../types';

browserEnv();
test.afterEach.always(cleanup);
const searchLabel = 'Search owners by name or login';

test.serial('App supplies display copy, formatted warning and derived empty-result state', t => {
  const labels = {
    ...ownerLabels,
    title: 'Responsables',
    search: 'Chercher un compte',
    noResultsTitle: 'Aucun profil',
    retry: 'Réessayer'
  };
  const model = {
    ...makeModel({selected: [], warningCount: 0}),
    query: '',
    warning: 'Avertissement fourni par App',
    showNoResults: true,
    addMe: {label: 'Mon compte est indisponible', disabled: true, hint: 'Utilisez la recherche.'}
  };
  const view = render(<PopulationOwners model={model} labels={labels} />);
  t.truthy(view.getByRole('region', {name: 'Responsables'}));
  t.truthy(view.getByRole('textbox', {name: 'Chercher un compte'}));
  t.truthy(view.getByText('Avertissement fourni par App'));
  t.truthy(view.getByText('Aucun profil'));
  t.truthy(view.getByText('Utilisez la recherche.'));
  t.true(
    (view.getByRole('button', {name: 'Mon compte est indisponible'}) as HTMLButtonElement).disabled
  );
});

test.serial('search sends the current text to App and keeps its value controlled', t => {
  const calls: string[] = [];
  const model = makeModel({onSearch: query => calls.push(query)});
  const view = render(<PopulationOwners model={model} labels={ownerLabels} />);
  fireEvent.input(view.getByRole('textbox', {name: searchLabel}), {target: {value: 'Morgan'}});
  t.deepEqual(calls, ['Morgan']);
  view.rerender(<PopulationOwners model={{...model, query: 'Alex'}} labels={ownerLabels} />);
  t.is((view.getByRole('textbox', {name: searchLabel}) as HTMLInputElement).value, 'Alex');
});

test.serial(
  'Add me invokes the supplied action without inventing a profile or owning selection',
  t => {
    const calls: unknown[][] = [];
    const model = makeModel({
      selected: [],
      warningCount: 0,
      selfSelected: false,
      onAddMe: (...args: unknown[]) => calls.push(args)
    });
    const view = render(<PopulationOwners model={model} labels={ownerLabels} />);
    fireEvent.click(view.getByRole('button', {name: 'Add me'}));
    t.deepEqual(calls, [[]]);
    t.truthy(view.getByText('No owners selected'));
    view.rerender(
      <PopulationOwners
        model={makeModel({...model, selected: [people[0]], selfSelected: true, warningCount: 0})}
        labels={ownerLabels}
      />
    );
    t.true(
      (view.getByRole('button', {name: 'You are already an owner'}) as HTMLButtonElement).disabled
    );
    t.truthy(view.getByText('You'));
  }
);

test.serial('an unavailable current profile disables only Add me and explains manual search', t => {
  const searches: string[] = [];
  const model = makeModel({
    selfAvailable: false,
    selfSelected: false,
    onAddMe: () => t.fail('invented self'),
    onSearch: query => searches.push(query)
  });
  const view = render(<PopulationOwners model={model} labels={ownerLabels} />);
  fireEvent.click(view.getByRole('button', {name: 'Add me'}));
  t.true((view.getByRole('button', {name: 'Add me'}) as HTMLButtonElement).disabled);
  t.truthy(view.getByText(/Your platform profile is unavailable/));
  t.false((view.getByRole('textbox', {name: searchLabel}) as HTMLInputElement).disabled);
  fireEvent.input(view.getByRole('textbox', {name: searchLabel}), {target: {value: 'Morgan'}});
  t.deepEqual(searches, ['Morgan']);
});

test.serial('owner suggestions dispatch their own bound action', t => {
  const selections: unknown[][] = [];
  const person = {...people[1], onSelect: (...args: unknown[]) => selections.push(args)};
  const model = makeModel({query: 'Morgan', suggestions: [person]});
  const view = render(<PopulationOwners model={model} labels={ownerLabels} />);
  fireEvent.click(view.getByRole('button', {name: 'Add morgan.taylor as owner'}));
  t.deepEqual(selections, [[]]);
  t.truthy(view.getByRole('list', {name: 'Selected owners'}));
});

test.serial(
  'deactivated warning is nonblocking and disappears with refreshed controlled props',
  t => {
    const calls: string[] = [];
    const model = makeModel({
      selfSelected: false,
      onAddMe: () => calls.push('self'),
      selected: [{...people[2], onRemove: () => calls.push('remove')}]
    });
    const view = render(<PopulationOwners model={model} labels={ownerLabels} />);
    t.truthy(view.getByText(/1 owner is deactivated/));
    t.truthy(view.getByText(/crossed-out eye marks a deactivated/));
    fireEvent.click(view.getByRole('button', {name: 'Add me'}));
    fireEvent.click(view.getByRole('button', {name: 'Remove owner former.owner'}));
    t.deepEqual(calls, ['self', 'remove']);
    t.truthy(view.container.querySelector('[data-name="owners-warning"]'));
    view.rerender(
      <PopulationOwners
        model={{...model, selected: [], warning: undefined, showDeactivatedLegend: false}}
        labels={ownerLabels}
      />
    );
    t.is(view.container.querySelector('[data-name="owners-warning"]'), null);
    t.is(view.queryByText(/crossed-out eye marks a deactivated/), null);
  }
);

test.serial('multiple deactivated owners use the plural warning', t => {
  const view = render(
    <PopulationOwners model={makeModel({warningCount: 2})} labels={ownerLabels} />
  );
  t.truthy(view.getByText(/2 owners are deactivated/));
});

test.serial('search and resolution failures remain distinct and preserve selected owners', t => {
  const calls: unknown[][] = [];
  const view = render(
    <PopulationOwners
      model={makeModel({
        query: 'Morgan',
        suggestions: [people[1]],
        error: true,
        resolutionError: true,
        onRetry: (...args: unknown[]) => calls.push(args)
      })}
      labels={ownerLabels}
    />
  );
  t.is(view.getAllByRole('alert').length, 2);
  t.truthy(view.getByText('Owners could not be searched. Try again.'));
  t.truthy(view.getByText(/Some owner details could not be loaded/));
  t.truthy(view.getByText('former.owner'));
  t.is(view.queryByRole('list', {name: 'Suggested owners'}), null);
  forEach(retry => fireEvent.click(retry), view.getAllByRole('button', {name: 'Try again'}));
  t.deepEqual(calls, [[], []]);
});

test.serial('failed details without retry do not show an inert retry action', t => {
  const view = render(
    <PopulationOwners
      model={makeModel({error: true, resolutionError: true, onRetry: undefined})}
      labels={ownerLabels}
    />
  );
  t.is(view.queryByRole('button', {name: 'Try again'}), null);
  t.truthy(view.getByText('former.owner'));
});

test.serial('loading hides stale suggestions but retains stored owners', t => {
  const view = render(
    <PopulationOwners
      model={makeModel({query: 'Morgan', loading: true, suggestions: [people[1]]})}
      labels={ownerLabels}
    />
  );
  t.truthy(view.getByText('Searching for owners…'));
  t.truthy(view.container.querySelector('[data-name="loader"]'));
  t.is(view.queryByRole('list', {name: 'Suggested owners'}), null);
  t.is(view.queryByText('No matching owners'), null);
  t.truthy(view.getByText('former.owner'));
});

test.serial('empty search results explain the next step without deleting owners', t => {
  const model = makeModel({query: 'Nobody'});
  const view = render(<PopulationOwners model={model} labels={ownerLabels} />);
  t.truthy(view.getByText('No matching owners'));
  t.truthy(view.getByText('Try a different name or login.'));
  t.truthy(view.getByText('former.owner'));
  view.rerender(
    <PopulationOwners model={{...model, query: '  ', showNoResults: false}} labels={ownerLabels} />
  );
  t.is(view.queryByText('No matching owners'), null);
});

test.serial('disabled state guards every mutation including synthetic input and retries', t => {
  const fail = () => t.fail('mutation dispatched while disabled');
  const model: OwnersModel = makeModel({
    query: 'Alex',
    selfSelected: false,
    error: true,
    resolutionError: true,
    selected: [{...people[0], onRemove: fail}],
    onSearch: fail,
    onRetry: fail,
    onAddMe: fail
  });
  const view = render(<PopulationOwners model={model} disabled labels={ownerLabels} />);
  const input = view.getByRole('textbox', {name: searchLabel}) as HTMLInputElement;
  t.true(input.disabled);
  fireEvent.input(input, {target: {value: 'Morgan'}});
  forEach(button => {
    t.true((button as HTMLButtonElement).disabled);
    fireEvent.click(button);
  }, view.getAllByRole('button'));
  view.rerender(
    <PopulationOwners
      model={{...model, error: false, suggestions: [{...people[1], onSelect: fail}]}}
      disabled
      labels={ownerLabels}
    />
  );
  const suggestion = view.getByRole('button', {
    name: 'Add morgan.taylor as owner'
  }) as HTMLButtonElement;
  t.true(suggestion.disabled);
  fireEvent.click(suggestion);
});

test.serial('empty selection has an illustration and explains how to add an owner', t => {
  const view = render(
    <PopulationOwners
      model={makeModel({selected: [], warningCount: 0, selfSelected: false})}
      labels={ownerLabels}
    />
  );
  t.truthy(view.getByText('No owners selected'));
  t.truthy(view.getByText(/Search for someone by name or login/));
  t.truthy(view.container.querySelector('[data-icon="users"]'));
});
