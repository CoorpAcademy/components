import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup, render} from '@testing-library/react';
import PopulationConditions from '..';
import SelectMultiple from '../../../molecule/select-multiple';
import Autocomplete from '../../../atom/autocomplete';
import InputText from '../../../atom/input-text';
import ButtonLink from '../../../atom/button-link';
import Tag from '../../../atom/tag';
import {exampleRows, labels, makeModel, makeRow} from '../../../test/helpers/population-conditions';

browserEnv();
configure({adapter: new Adapter()});
test.afterEach.always(cleanup);

test.serial('read-only rejects child callbacks as well as disabling their DOM controls', t => {
  const calls = [];
  const record = name => () => calls.push(name);
  const row = makeRow();
  const selection = makeRow({
    field: {...row.field, onChange: record('field')},
    comparison: {...row.comparison, onChange: record('comparison')},
    value: {
      ...row.value,
      status: {kind: 'error', message: 'Values unavailable', onRetry: record('retry')},
      loadMore: {label: 'More values', onClick: record('more')},
      selected: [
        {
          id: 'finance',
          label: 'Finance',
          removeLabel: 'Remove Finance',
          onRemove: record('value')
        }
      ],
      onSearch: record('search'),
      onSelect: record('select')
    },
    onRemove: record('row')
  });
  const pattern = makeRow({
    ...exampleRows[7],
    id: 'pattern',
    field: {...row.field, onChange: record('pattern-field')},
    comparison: {...row.comparison, onChange: record('pattern-comparison')},
    value: {kind: 'text', text: '^Finance$', onChange: record('text')},
    caseSensitive: {checked: false, onChange: record('case')},
    onRemove: record('pattern-row')
  });
  const model = makeModel({
    groups: [
      {
        id: 'group',
        rows: [selection, pattern],
        onAdd: record('add'),
        onRemove: record('group'),
        removeLabel: 'Remove group'
      }
    ],
    includeSupport: {checked: true, onChange: record('support')},
    onAddGroup: record('or')
  });
  const view = mount(<PopulationConditions disabled model={model} labels={labels} />);
  t.teardown(() => view.unmount());

  // Exercise the callback boundary: native disabled buttons suppress DOM clicks before
  // the parent handlers run, so DOM-only tests cannot check these read-only guards.
  const invokeChildren = () => {
    view.find(SelectMultiple).forEach(control => control.prop('onChange')({value: 'Country'}));
    const autocomplete = view.find(Autocomplete);
    autocomplete.prop('onFetch')({value: 'Finance', reason: 'input-focused'});
    autocomplete.prop('onSuggestionSelected')({suggestion: {value: 'string:Finance'}});
    view.find(InputText).prop('onChange')('Changed pattern');
    view
      .find('input[type="checkbox"]')
      .forEach(control => control.prop('onChange')({target: {checked: true}}));
    view.find(Tag).forEach(tag => tag.prop('removeAction')?.onClick());
    view.find(ButtonLink).forEach(button => button.prop('onClick')());
  };

  invokeChildren();
  t.deepEqual(calls, []);
  t.is(view.find(InputText).prop('value'), '^Finance$');

  view.setProps({disabled: false});
  invokeChildren();
  t.deepEqual(calls, [
    'field',
    'comparison',
    'pattern-field',
    'pattern-comparison',
    'search',
    'select',
    'text',
    'case',
    'support',
    'value',
    'retry',
    'more',
    'row',
    'pattern-row',
    'add',
    'group',
    'or'
  ]);
});

test.serial('App can retain an editable condition without offering its removal', t => {
  const model = makeModel({
    groups: [{id: 'fixed', rows: [makeRow({onRemove: undefined})]}]
  });
  const view = render(<PopulationConditions model={model} labels={labels} />);
  t.truthy(view.getByRole('combobox', {name: labels.field}));
  t.truthy(view.getByRole('textbox', {name: labels.value}));
  t.is(view.queryByRole('button', {name: 'Remove Department condition'}), null);
});
