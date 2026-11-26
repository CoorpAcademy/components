import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import PopulationResponsibles from '..';
import {
  creationLabels,
  makeModel,
  managers,
  responsibleLabels
} from '../../../test/helpers/population-responsibles';

browserEnv();
test.afterEach.always(cleanup);

test.serial(
  'managers use the existing display-only person cards, including the current person',
  t => {
    const forbidden = () => t.fail('ownership action invoked');
    const model = makeModel({
      users: [{...managers[0], onSelect: forbidden, onRemove: forbidden}, managers[1]]
    });
    const view = render(<PopulationResponsibles model={model} labels={responsibleLabels} />);
    t.truthy(view.getByRole('region', {name: 'Population managers'}));
    t.truthy(view.getByRole('list', {name: 'HR population managers'}));
    t.truthy(view.getByText('2 managers'));
    t.truthy(view.getByText('You'));
    t.truthy(view.getByText('alex.martin'));
    t.deepEqual(
      view.getAllByRole('button').map(button => button.textContent),
      ['Refresh']
    );
    t.is(view.queryByRole('textbox'), null);
    fireEvent.click(view.getByText('Alex Martin'));
  }
);

test.serial('App supplies all labels, formatted totals and the query timestamp', t => {
  const labels = {
    ...responsibleLabels,
    title: 'Responsables RH',
    description: 'Description fournie par App',
    list: 'Liste des responsables',
    loading: 'Chargement fourni par App'
  };
  const view = render(
    <PopulationResponsibles
      labels={labels}
      model={makeModel({
        countLabel: 'Nombre inconnu',
        evaluatedAtLabel: 'Vérification fournie par App',
        refresh: undefined,
        loadMore: {label: 'Suite', onClick: () => undefined}
      })}
    />
  );
  t.truthy(view.getByText('Description fournie par App'));
  t.truthy(view.getByText('Nombre inconnu'));
  t.truthy(view.getByText('Vérification fournie par App'));
  t.truthy(view.getByRole('list', {name: 'Liste des responsables'}));
  t.truthy(view.getByRole('button', {name: 'Suite'}));
});

test.serial(
  'Load more and Refresh dispatch bound callbacks without owning data or submitting',
  t => {
    const calls: unknown[][] = [];
    let submitted = false;
    const model = makeModel({
      loadMore: {
        label: 'Load more',
        onClick: (...args: unknown[]) => calls.push(['more', ...args])
      },
      refresh: {label: 'Refresh', onClick: (...args: unknown[]) => calls.push(['refresh', ...args])}
    });
    const view = render(
      <form onSubmit={() => (submitted = true)}>
        <PopulationResponsibles model={model} labels={responsibleLabels} />
      </form>
    );
    fireEvent.click(view.getByRole('button', {name: 'Load more'}));
    fireEvent.click(view.getByRole('button', {name: 'Refresh'}));
    t.deepEqual(calls, [['more'], ['refresh']]);
    t.false(submitted);
    t.is(view.getAllByRole('listitem').length, 2);
    t.truthy(view.getByText('2 managers'));
    view.rerender(
      <PopulationResponsibles
        labels={responsibleLabels}
        model={{
          ...model,
          users: [...managers, {...managers[1], id: 'next', name: 'Next Manager'}],
          countLabel: '3 managers',
          loadMore: undefined
        }}
      />
    );
    t.is(view.getAllByRole('listitem').length, 3);
    t.truthy(view.getByText('3 managers'));
    t.is(view.queryByRole('button', {name: 'Load more'}), null);
  }
);

test.serial(
  'an unsaved population explains the absence without inventing people or a zero total',
  t => {
    const view = render(<PopulationResponsibles labels={creationLabels} model={{users: []}} />);
    t.truthy(view.getByText('Managers will appear here'));
    t.truthy(view.getByText(/after this population is saved and its learners are updated/));
    t.truthy(view.container.querySelector('[data-icon="users"]'));
    t.is(view.queryByRole('list'), null);
    t.is(view.queryByRole('button'), null);
    t.is(view.queryByText('0 managers'), null);
    t.is(view.queryByText(/Checked on/), null);
  }
);

test.serial('a known empty result keeps its supplied zero count and refresh action', t => {
  const view = render(
    <PopulationResponsibles
      labels={responsibleLabels}
      model={makeModel({users: [], countLabel: '0 managers'})}
    />
  );
  t.truthy(view.getByText('0 managers'));
  t.truthy(view.getByText('No managers in this population'));
  t.truthy(view.getByRole('button', {name: 'Refresh'}));
});

test.serial('initial loading and initial failure never masquerade as an empty result', t => {
  const view = render(
    <PopulationResponsibles labels={responsibleLabels} model={{users: [], loading: true}} />
  );
  t.truthy(view.getByRole('status'));
  t.truthy(view.getByText('Loading managers…'));
  t.is(view.queryByText('No managers in this population'), null);
  t.is(view.queryByRole('list'), null);
  t.is(view.getByRole('region').getAttribute('aria-busy'), 'true');
  view.rerender(
    <PopulationResponsibles
      labels={responsibleLabels}
      model={{users: [], error: {message: 'Managers could not be loaded.'}}}
    />
  );
  t.is(view.getByRole('alert').textContent, 'Managers could not be loaded.');
  t.is(view.queryByRole('status'), null);
  t.is(view.queryByText('No managers in this population'), null);
  t.is(view.queryByRole('button'), null);
});

test.serial('a failed next page retains people and retries the supplied page action', t => {
  const calls: string[] = [];
  const model = makeModel({
    loadMore: {label: 'Load more', onClick: () => calls.push('more')},
    refresh: {label: 'Refresh', onClick: () => calls.push('refresh')},
    error: {
      message: 'The next managers could not be loaded.',
      retry: {label: 'Try again', onClick: () => calls.push('page retry')}
    }
  });
  const view = render(<PopulationResponsibles model={model} labels={responsibleLabels} />);
  t.truthy(view.getByText('alex.martin'));
  t.truthy(view.getByText('2 managers'));
  t.is(view.queryByRole('button', {name: 'Load more'}), null);
  fireEvent.click(view.getByRole('button', {name: 'Try again'}));
  t.deepEqual(calls, ['page retry']);
  t.truthy(view.getByRole('alert'));
  view.rerender(
    <PopulationResponsibles
      labels={responsibleLabels}
      model={{...model, error: undefined, loadingMore: true}}
    />
  );
  t.truthy(view.getByText('Loading more managers…'));
  t.truthy(view.getByText('alex.martin'));
  t.true((view.getByRole('button', {name: 'Load more'}) as HTMLButtonElement).disabled);
  t.true((view.getByRole('button', {name: 'Refresh'}) as HTMLButtonElement).disabled);
});

test.serial(
  'refresh loading and refresh failure preserve the applied list until App replaces it',
  t => {
    const calls: string[] = [];
    const model = makeModel({loading: true});
    const view = render(<PopulationResponsibles model={model} labels={responsibleLabels} />);
    t.truthy(view.getByText('Loading managers…'));
    t.truthy(view.getByText('morgan.taylor'));
    view.rerender(
      <PopulationResponsibles
        labels={responsibleLabels}
        model={{
          ...model,
          loading: false,
          error: {
            message: 'Refresh failed. Previously loaded managers are shown.',
            retry: {label: 'Retry refresh', onClick: () => calls.push('refresh retry')}
          }
        }}
      />
    );
    fireEvent.click(view.getByRole('button', {name: 'Retry refresh'}));
    t.deepEqual(calls, ['refresh retry']);
    t.truthy(view.getByText('morgan.taylor'));
    view.rerender(
      <PopulationResponsibles
        labels={responsibleLabels}
        model={makeModel({users: [managers[1]], countLabel: '1 manager'})}
      />
    );
    t.is(view.queryByText('alex.martin'), null);
    t.truthy(view.getByText('1 manager'));
    t.is(view.queryByRole('alert'), null);
  }
);

test.serial(
  'prepared inactive profiles and long names remain visible without eligibility logic',
  t => {
    const login = 'inactive.manager.with.a.very.long.login';
    const name = 'Alexandria Catherine Montgomery-Sinclair de la Roche';
    const view = render(
      <PopulationResponsibles
        labels={responsibleLabels}
        model={makeModel({users: [{id: 'inactive', name, login, status: 'ok'}]})}
      />
    );
    t.truthy(view.getByText(name));
    t.truthy(view.getByText(login));
    t.is(view.queryByText('Deactivated'), null);
  }
);
