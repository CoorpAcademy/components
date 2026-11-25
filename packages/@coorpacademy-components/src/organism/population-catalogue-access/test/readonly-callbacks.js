import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {map} from 'lodash/fp';
import PopulationCatalogueAccess from '..';
import SelectMultiple from '../../../molecule/select-multiple';
import RadioWithTitle from '../../../atom/radio-with-title';
import ButtonLink from '../../../atom/button-link';
import Tag from '../../../atom/tag';
import {
  catalogueLabels,
  makeModel,
  makeSelection
} from '../../../test/helpers/population-catalogue-access';

browserEnv();
configure({adapter: new Adapter()});

test.serial(
  'read-only callback boundaries reject changes, removals, bulk actions and retries',
  t => {
    const calls = [];
    const record =
      name =>
      (...args) =>
        calls.push([name, ...args]);
    const selection = makeSelection(undefined, {
      onChange: record('selection'),
      onSearch: record('search'),
      selectAll: {onClick: record('all')},
      clear: {onClick: record('clear')}
    });
    const model = makeModel({
      choices: [
        {
          id: 'one',
          title: 'Choice',
          description: 'Description',
          checked: true,
          onChange: record('mode')
        }
      ],
      counts: {kind: 'error', message: 'Unavailable', onRetry: record('retry')},
      selection: {
        ...selection,
        selected: map(item => ({...item, onRemove: record(item.id)}), selection.selected)
      }
    });
    const view = mount(
      <PopulationCatalogueAccess disabled labels={catalogueLabels} model={model} />
    );
    t.teardown(() => view.unmount());
    const invokeControls = () => {
      view.find(RadioWithTitle).prop('onChange')(true);
      view.find(SelectMultiple).prop('onChange')([]);
      view.find(SelectMultiple).prop('search').onChange('Query');
      view.find(ButtonLink).forEach(button => button.prop('onClick')());
      view.find(Tag).forEach(tag => tag.prop('removeAction')?.onClick());
    };
    invokeControls();
    t.deepEqual(calls, []);
    view.setProps({disabled: false});
    invokeControls();
    t.deepEqual(calls, [
      ['mode', true],
      ['selection', []],
      ['search', 'Query'],
      ['retry'],
      ['all'],
      ['clear'],
      ['catalogue-1'],
      ['catalogue-2']
    ]);
  }
);

test.serial(
  'App-disabled individual actions remain blocked while the rest of the section is editable',
  t => {
    const calls = [];
    const model = makeModel({
      choices: [
        {
          id: 'blocked',
          title: 'Unavailable',
          description: 'Explanation',
          checked: false,
          disabled: true,
          onChange: () => calls.push('mode')
        }
      ],
      selection: makeSelection([], {
        selectAll: {disabled: true, onClick: () => calls.push('all')},
        clear: {disabled: true, onClick: () => calls.push('clear')}
      })
    });
    const view = mount(<PopulationCatalogueAccess labels={catalogueLabels} model={model} />);
    t.teardown(() => view.unmount());
    view.find(RadioWithTitle).prop('onChange')(true);
    view.find(ButtonLink).forEach(button => button.prop('onClick')());
    t.deepEqual(calls, []);
  }
);
