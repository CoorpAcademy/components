import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {forEach, map} from 'lodash/fp';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import PopulationCatalogueAccess from '..';
import {
  accessModes,
  catalogueLabels as labels,
  creation,
  errors,
  loading,
  makeChoices,
  makeModel,
  makeSelection,
  warnings
} from '../../../test/helpers/population-catalogue-access';
import ControlledCatalogue from './helpers/controlled';

browserEnv();
test.afterEach.always(cleanup);

test.serial('new-population demo starts selected-playlist mode without preselected content', t => {
  const view = render(<ControlledCatalogue startWithNoChoice />);
  fireEvent.click(view.getByRole('radio', {name: 'Selected catalogue playlists'}));
  t.truthy(view.getByText('0 of 60 playlists selected'));
  t.truthy(view.getByText(labels.emptyMessage));
});

test.serial(
  'creation requires an explicit choice and explains how to attach custom playlists',
  t => {
    const view = render(<PopulationCatalogueAccess model={creation} labels={labels} />);
    t.is(view.getAllByRole('radio').length, 4);
    t.true(view.getAllByRole('radio').every(radio => !radio.checked));
    t.is(view.queryByRole('button', {name: labels.playlists}), null);
    t.truthy(
      view.getByText('Save this population, then attach it from a published custom playlist.')
    );
    t.truthy(view.getByText(labels.catalogueLegend));
    t.truthy(view.getByText(labels.customLegend));
  }
);

test.serial('all four supplied modes are controlled and custom attachments remain visible', t => {
  const changes = [];
  const view = render(
    <PopulationCatalogueAccess
      labels={labels}
      model={makeModel({choices: makeChoices(undefined, mode => changes.push(mode))})}
    />
  );
  forEach(mode => {
    fireEvent.click(view.getByRole('radio', {name: mode.title}));
    t.is(changes[changes.length - 1], mode.id);
    view.rerender(
      <PopulationCatalogueAccess
        labels={labels}
        model={makeModel({
          choices: makeChoices(mode.id, next => changes.push(next)),
          selection: mode.id === 'selected' ? makeSelection() : undefined
        })}
      />
    );
    t.true(view.getByRole('radio', {name: mode.title}).checked);
    t.truthy(view.getByRole('link', {name: 'Onboarding · 4 content items'}));
    t.truthy(view.getByText('Company essentials · 6 content items'));
    t.is(!!view.queryByRole('button', {name: labels.playlists}), mode.id === 'selected');
  }, accessModes);
});

test.serial(
  'unavailable catalogue mode displays App explanation and cannot change selection',
  t => {
    const changes = [];
    const choices = makeChoices('selected', mode => changes.push(mode));
    choices[1] = {
      ...choices[1],
      disabled: true,
      hint: 'Catalogue access is unavailable on this brand.'
    };
    const view = render(<PopulationCatalogueAccess model={makeModel({choices})} labels={labels} />);
    const radio = view.getByRole('radio', {name: 'Coorpacademy catalogue'});
    t.true(radio.disabled);
    t.truthy(view.getByText('Catalogue access is unavailable on this brand.'));
    fireEvent.click(radio);
    t.deepEqual(changes, []);
  }
);

test.serial(
  'sixty playlist options show supplied counts and prevent newly adding an empty one',
  t => {
    const changes = [];
    const model = makeModel({
      selection: makeSelection(undefined, {onChange: value => changes.push(value)})
    });
    const view = render(<PopulationCatalogueAccess model={model} labels={labels} />);
    fireEvent.click(view.getByRole('button', {name: labels.playlists}));
    const options = view.getByRole('group', {name: labels.playlists});
    t.is(within(options).getAllByRole('checkbox').length, 60);
    t.truthy(within(options).getByText('2 content items'));
    t.truthy(within(options).getByText('No content'));
    const empty = within(options).getByRole('checkbox', {name: 'Leadership essentials'});
    t.true(empty.disabled);
    fireEvent.click(empty);
    t.deepEqual(changes, []);
  }
);

test.serial(
  'search is case-insensitive contains and Select all uses every eligible playlist',
  t => {
    const view = render(<ControlledCatalogue initialQuery="mAnAgInG" />);
    fireEvent.click(view.getByRole('button', {name: labels.playlists}));
    const options = view.getByRole('group', {name: labels.playlists});
    t.true(within(options).getAllByRole('checkbox').length < 60);
    t.truthy(within(options).getByRole('checkbox', {name: 'Managing teams'}));
    fireEvent.click(view.getByRole('button', {name: labels.selectAll}));
    t.truthy(view.getByText('59 of 60 playlists selected'));
    t.is(within(view.getByRole('list', {name: labels.selected})).getAllByRole('button').length, 59);
    t.true(view.getByRole('button', {name: labels.selectAll}).disabled);
  }
);

test.serial(
  'clearing the selection retains the selected mode and picker until App changes mode',
  t => {
    const view = render(<ControlledCatalogue />);
    fireEvent.click(view.getByRole('button', {name: labels.clear}));
    t.truthy(view.getByRole('button', {name: labels.playlists}));
    t.true(view.getByRole('radio', {name: 'Selected catalogue playlists'}).checked);
    t.truthy(view.getByText(labels.emptyMessage));
    t.truthy(view.getByText('0 of 60 playlists selected'));
    t.true(view.getByRole('button', {name: labels.clear}).disabled);
    fireEvent.click(view.getByRole('radio', {name: 'Custom playlists only'}));
    t.is(view.queryByRole('button', {name: labels.playlists}), null);
    t.truthy(view.getByRole('link', {name: 'Onboarding · 4 content items'}));
  }
);

test.serial('an old empty selection stays removable and its warning follows updated props', t => {
  const view = render(<ControlledCatalogue initialIds={['catalogue-0', 'catalogue-1']} />);
  t.truthy(
    view.getByText('A selected catalogue playlist has no content. Remove it when you are ready.')
  );
  fireEvent.click(view.getByRole('button', {name: labels.playlists}));
  const empty = view.getByRole('checkbox', {name: 'Leadership essentials'});
  t.true(empty.checked);
  t.false(empty.disabled);
  fireEvent.click(view.getByRole('button', {name: 'Remove Leadership essentials'}));
  t.is(view.queryByRole('button', {name: 'Remove Leadership essentials'}), null);
  t.is(
    view.queryByText('A selected catalogue playlist has no content. Remove it when you are ready.'),
    null
  );
  t.truthy(view.getByText('1 of 60 playlists selected'));
});

test.serial('unknown counts stay unknown and do not erase saved selections', t => {
  const view = render(<PopulationCatalogueAccess model={loading} labels={labels} />);
  t.truthy(view.getByText(loading.counts.message));
  t.truthy(view.getByRole('button', {name: 'Remove Managing teams'}));
  t.true(view.getByRole('button', {name: labels.selectAll}).disabled);
  fireEvent.click(view.getByRole('button', {name: labels.playlists}));
  t.is(view.getAllByText('Count unavailable').length, 60);
  t.true(view.getByRole('checkbox', {name: 'Digital culture'}).disabled);
  t.false(view.getByRole('checkbox', {name: 'Managing teams'}).disabled);
  t.is(view.queryByText('No content'), null);
});

test.serial(
  'counts and custom attachment retries send no DOM event and preserve the displayed data',
  t => {
    const calls = [];
    const model = makeModel({
      ...errors,
      counts: {...errors.counts, onRetry: (...args) => calls.push(['counts', ...args])},
      customPlaylists: {
        ...errors.customPlaylists,
        status: {
          ...errors.customPlaylists.status,
          onRetry: (...args) => calls.push(['custom', ...args])
        }
      }
    });
    const view = render(<PopulationCatalogueAccess model={model} labels={labels} />);
    t.is(view.getAllByRole('alert').length, 2);
    forEach(button => fireEvent.click(button), view.getAllByRole('button', {name: labels.retry}));
    t.deepEqual(calls, [['counts'], ['custom']]);
    t.truthy(view.getByRole('button', {name: 'Remove Managing teams'}));
    t.truthy(view.getByRole('link', {name: 'Onboarding · 4 content items'}));
  }
);

test.serial('custom attachments never offer removal and only authorised URLs become links', t => {
  const view = render(<PopulationCatalogueAccess model={warnings} labels={labels} />);
  const custom = within(view.getByRole('list', {name: labels.customList}));
  t.is(custom.queryAllByRole('button').length, 0);
  t.is(custom.getAllByRole('link').length, 2);
  const link = custom.getByRole('link', {name: 'Onboarding · 4 content items'});
  t.is(
    link.getAttribute('href'),
    '/brands/example/editorialization/custom-playlist/custom-onboarding/step/populations'
  );
  t.is(link.getAttribute('target'), '_blank');
  t.is(link.getAttribute('rel'), 'noopener noreferrer');
  t.is(custom.queryByRole('link', {name: 'Company essentials · 6 content items'}), null);
  t.truthy(custom.getByText('You do not have permission to edit this custom playlist.'));
  t.truthy(custom.getByText('Former onboarding · No content'));
});

test.serial(
  'read-only keeps content, warnings and authorised navigation while disabling mutations',
  t => {
    const view = render(<PopulationCatalogueAccess disabled model={warnings} labels={labels} />);
    t.true(
      view
        .getAllByRole('button')
        .every(button => button.disabled || button.getAttribute('aria-disabled') === 'true')
    );
    t.true(view.getAllByRole('radio').every(radio => radio.disabled));
    t.truthy(view.getByRole('link', {name: 'Onboarding · 4 content items'}));
    t.truthy(view.getByText(warnings.warning));
  }
);

test.serial('App supplies copy, missing historical tags and unavailable-count explanations', t => {
  const model = makeModel({
    selection: makeSelection([], {
      selected: [
        {
          id: 'previous',
          label: '<previous playlist>',
          removeLabel: 'Retirer',
          warning: true,
          hint: 'Ancienne sélection conservée'
        }
      ],
      showEmpty: false
    }),
    counts: {kind: 'error', message: 'Comptage indisponible'},
    customPlaylists: {
      items: [],
      empty: {title: 'Aucun rattachement', message: 'Associez une playlist publiée.'}
    }
  });
  const view = render(
    <PopulationCatalogueAccess
      model={model}
      labels={{...labels, title: 'Accès au catalogue', selectAll: 'Tout sélectionner'}}
    />
  );
  t.truthy(view.getByRole('region', {name: 'Accès au catalogue'}));
  t.truthy(view.getByRole('button', {name: 'Tout sélectionner'}));
  t.truthy(view.getByText('<previous playlist>'));
  t.truthy(view.getByText('Ancienne sélection conservée'));
  t.truthy(view.getByText('Comptage indisponible'));
  t.truthy(view.getByText('Aucun rattachement'));
  t.is(view.queryByRole('button', {name: 'Retirer'}), null);
  t.is(view.queryByRole('button', {name: labels.retry}), null);
  t.is(view.container.querySelector('previous'), null);
});

test.serial(
  'individual selection and removal remain App-controlled without an external update',
  t => {
    const calls = [];
    const selection = makeSelection(undefined, {
      onChange: choices => calls.push(map('value', choices))
    });
    selection.selected[0] = {...selection.selected[0], onRemove: () => calls.push(['remove'])};
    const view = render(
      <PopulationCatalogueAccess model={makeModel({selection})} labels={labels} />
    );
    fireEvent.click(view.getByRole('button', {name: 'Remove Managing teams'}));
    t.truthy(view.getByRole('button', {name: 'Remove Managing teams'}));
    fireEvent.click(view.getByRole('button', {name: labels.playlists}));
    fireEvent.click(view.getByRole('checkbox', {name: 'Digital culture'}));
    t.deepEqual(calls, [['remove'], ['catalogue-1', 'catalogue-2', 'catalogue-3']]);
    t.false(view.getByRole('checkbox', {name: 'Digital culture'}).checked);
  }
);
