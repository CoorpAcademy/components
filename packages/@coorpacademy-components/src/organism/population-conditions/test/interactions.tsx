import test from 'ava';
import React, {useState} from 'react';
import {filter, forEach, map, noop} from 'lodash/fp';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import PopulationConditions from '..';
import MembershipSummary from '../../../molecule/membership-summary';
import {Criterion, ConditionsModel, ValueSelection} from '../types';
import {
  allOperators,
  exampleRows,
  labels,
  makeModel,
  makeRow,
  preserved,
  summary,
  summaryLabels
} from '../../../test/helpers/population-conditions';

browserEnv();
test.afterEach.always(cleanup);

const withRow = (row: Criterion, overrides: Partial<ConditionsModel> = {}) =>
  makeModel({
    ...overrides,
    groups: [{id: 'test', rows: [row], onAdd: noop}]
  });

test.serial(
  'all operators use supplied comparisons and aligned controls; case checkbox only for text',
  t => {
    const view = render(<PopulationConditions labels={labels} model={allOperators} />);
    t.is(view.getAllByRole('combobox', {name: labels.field}).length, 8);
    t.is(view.getAllByRole('checkbox', {name: labels.caseSensitive}).length, 4);
    t.is(view.getAllByRole('textbox', {name: labels.value}).length, 8);
    t.truthy(view.getByRole('group', {name: labels.supportTitle}));
    t.false(view.container.textContent?.includes('provider'));
    t.false(view.container.textContent?.includes('connect'));
    t.false(view.container.textContent?.includes('All learners'));
  }
);

test.serial(
  'summary renders the same supplied rows in the editor and standalone card details',
  t => {
    const editor = render(<PopulationConditions labels={labels} model={allOperators} />);
    const editorSummary = editor.container.querySelector(
      '[data-name="membership-summary"]'
    )?.innerHTML;
    editor.unmount();
    const card = render(<MembershipSummary {...allOperators.summary} />);
    t.is(
      card.container.querySelector('[data-name="membership-summary"]')?.innerHTML,
      editorSummary
    );
    t.is(card.getAllByText('AND').length, 6);
    t.is(card.getAllByText('OR').length, 1);
  }
);

test.serial('App supplies all copy, sentence fragments and separators without a translator', t => {
  const customSummary = {
    labels: {...summaryLabels, and: 'ET', or: 'OU'},
    groups: [
      {
        id: 'fr',
        rows: [
          {
            id: 'fr-row',
            prefix: 'Les apprenants dont',
            field: 'Service',
            comparison: 'est',
            values: [
              {id: 'a', label: 'Finance'},
              {id: 'b', label: 'Juridique', prefix: ' ou '}
            ],
            note: 'Texte fourni par App'
          }
        ]
      }
    ]
  };
  const view = render(
    <PopulationConditions
      labels={{...labels, title: 'Conditions', value: 'Valeur'}}
      model={makeModel({summary: customSummary})}
    />
  );
  t.truthy(view.getByRole('region', {name: 'Conditions'}));
  t.truthy(view.getByRole('textbox', {name: 'Valeur'}));
  t.truthy(view.getByText('Les apprenants dont'));
  t.truthy(view.getByText('ou'));
  t.truthy(view.getByText('Texte fourni par App'));
});

test.serial('row, group and support actions invoke their bound callbacks without DOM events', t => {
  const calls: unknown[][] = [];
  const record =
    (name: string) =>
    (...args: unknown[]) =>
      calls.push([name, ...args]);
  const model = makeModel({
    groups: [
      {
        id: 'group',
        rows: [makeRow({onRemove: record('row')})],
        onAdd: record('add'),
        onRemove: record('group'),
        removeLabel: 'Remove group'
      }
    ],
    onAddGroup: record('or'),
    includeSupport: {checked: true, onChange: record('support')}
  });
  const view = render(<PopulationConditions labels={labels} model={model} />);
  fireEvent.click(view.getByRole('button', {name: 'Remove Department condition'}));
  fireEvent.click(view.getByRole('button', {name: labels.addCondition}));
  fireEvent.click(view.getByRole('button', {name: 'Remove group'}));
  fireEvent.click(view.getByRole('button', {name: labels.addGroup}));
  fireEvent.click(view.getByRole('checkbox', {name: labels.supportLabel}));
  t.deepEqual(calls, [['row'], ['add'], ['group'], ['or'], ['support', false]]);
  t.is(view.getAllByRole('combobox', {name: labels.field}).length, 1);
  t.true((view.getByRole('checkbox', {name: labels.supportLabel}) as HTMLInputElement).checked);
  view.rerender(
    <PopulationConditions
      labels={labels}
      model={{...model, groups: [], includeSupport: {...model.includeSupport, checked: false}}}
    />
  );
  t.truthy(view.getByText(labels.emptyTitle));
  t.false((view.getByRole('checkbox', {name: labels.supportLabel}) as HTMLInputElement).checked);
});

test.serial(
  'pattern text and case selection are controlled and keep literal regex characters',
  t => {
    const calls: unknown[] = [];
    const row = makeRow({
      ...exampleRows[7],
      value: {kind: 'text', text: '^(Manager|Director)$', onChange: value => calls.push(value)},
      caseSensitive: {checked: false, onChange: value => calls.push(value)}
    });
    const view = render(<PopulationConditions labels={labels} model={withRow(row)} />);
    fireEvent.input(view.getByRole('textbox', {name: labels.value}), {target: {value: '^a+b?$'}});
    fireEvent.click(view.getByRole('checkbox', {name: labels.caseSensitive}));
    t.deepEqual(calls, ['^a+b?$', true]);
    view.rerender(
      <PopulationConditions
        labels={labels}
        model={withRow({
          ...row,
          value: {kind: 'text', text: 'External update', onChange: noop},
          caseSensitive: {checked: true, onChange: noop}
        })}
      />
    );
    t.is(
      (view.getByRole('textbox', {name: labels.value}) as HTMLInputElement).value,
      'External update'
    );
    t.true((view.getByRole('checkbox', {name: labels.caseSensitive}) as HTMLInputElement).checked);
  }
);

test.serial(
  'field and comparison selectors report choices without compiling population conditions',
  t => {
    const calls: string[] = [];
    const row = makeRow();
    const view = render(
      <PopulationConditions
        labels={labels}
        model={withRow({
          ...row,
          field: {...row.field, onChange: value => calls.push(value)},
          comparison: {...row.comparison, onChange: value => calls.push(value)}
        })}
      />
    );
    fireEvent.click(view.getByRole('combobox', {name: labels.field}));
    fireEvent.click(view.getByRole('option', {name: 'Country'}));
    fireEvent.click(view.getByRole('combobox', {name: labels.comparison}));
    fireEvent.click(view.getByRole('option', {name: 'contains'}));
    t.deepEqual(calls, ['Country', 'contains']);
  }
);

test.serial(
  'preserved historical expressions remain visible and have no removal or editing control',
  t => {
    const view = render(<PopulationConditions labels={labels} model={preserved} />);
    t.truthy(view.getByText('{"#range":[1700000000,1800000000]}'));
    t.truthy(view.getByText(/This saved condition is read-only/));
    t.is(view.getAllByRole('combobox', {name: labels.field}).length, 1);
    t.is(view.getAllByRole('button', {name: /Remove .*condition/}).length, 1);
  }
);

test.serial('empty editor and summary explain the expected next step', t => {
  const view = render(
    <PopulationConditions
      labels={labels}
      model={makeModel({groups: [], summary: {labels: summaryLabels, groups: []}})}
    />
  );
  t.truthy(view.getByText(labels.emptyMessage));
  t.truthy(view.getByText(summaryLabels.emptyMessage));
  t.truthy(view.getByRole('button', {name: labels.addGroup}));
});

test.serial(
  'the support OR separator follows the current groups and disappears when none remain',
  t => {
    const model = makeModel();
    const view = render(<PopulationConditions labels={labels} model={model} />);
    const support = view.getByRole('group', {name: labels.supportTitle});
    t.is(support.previousElementSibling?.textContent, summaryLabels.or);
    view.rerender(<PopulationConditions labels={labels} model={{...model, groups: []}} />);
    t.not(support.previousElementSibling?.textContent, summaryLabels.or);
  }
);

test.serial('read-only disables all mutation controls while retaining every supplied rule', t => {
  const view = render(<PopulationConditions disabled labels={labels} model={allOperators} />);
  t.true(view.getAllByRole('button').every(button => (button as HTMLButtonElement).disabled));
  t.true([...view.container.querySelectorAll('input')].every(input => input.disabled));
  t.is(view.getAllByRole('combobox', {name: labels.field}).length, 8);
  t.truthy(view.getByText('^(Manager|Director)$'));
});

forEach(
  (kind: 'loading' | 'error' | 'empty') => {
    test.serial(`value ${kind} state retains selections and uses the supplied message`, t => {
      const row = makeRow();
      if (row.value.kind !== 'selection') return t.fail();
      const calls: string[] = [];
      const field: ValueSelection = {
        ...row.value,
        status: {
          kind,
          message: `App: ${kind}`,
          onRetry: kind === 'error' ? () => calls.push('retry') : undefined
        },
        loadMore: {label: 'More values', onClick: () => calls.push('more')},
        selected: [
          {
            id: 'missing',
            label: 'Previous value',
            missingLabel: 'Not in current profiles',
            removeLabel: 'Remove previous value',
            onRemove: () => calls.push('remove')
          }
        ]
      };
      const view = render(
        <PopulationConditions labels={labels} model={withRow({...row, value: field})} />
      );
      t.truthy(view.getByText(`App: ${kind}`));
      t.truthy(view.getByText('Previous value'));
      t.truthy(view.getByText('Not in current profiles'));
      if (kind === 'error') fireEvent.click(view.getByRole('button', {name: labels.retry}));
      fireEvent.click(view.getByRole('button', {name: 'More values'}));
      fireEvent.click(view.getByRole('button', {name: 'Remove previous value'}));
      t.deepEqual(calls, kind === 'error' ? ['retry', 'more', 'remove'] : ['more', 'remove']);
      t.truthy(view.getByText('Previous value'));
    });
  },
  ['loading', 'error', 'empty']
);

test.serial(
  'consecutive value selections keep focus; explicit future value is offered by App',
  t => {
    const selectedIds: string[] = [];
    const Harness = () => {
      const [selected, setSelected] = useState<string[]>([]);
      const [query, setQuery] = useState('');
      const row = makeRow();
      const choices = [
        {name: 'Finance', value: 'string:Finance'},
        {name: 'Legal', value: 'string:Legal'},
        {name: 'false', value: 'boolean:false'},
        {name: '0', value: 'number:0'}
      ];
      const visible = filter(
        option =>
          !selected.includes(option.value) &&
          option.name.toLowerCase().includes(query.toLowerCase()),
        choices
      );
      const future =
        query && !choices.some(option => option.name.toLowerCase() === query.toLowerCase())
          ? [{name: `Add “${query}”`, value: `new:${query}`}]
          : [];
      const field: ValueSelection = {
        kind: 'selection',
        id: 'values-test',
        query,
        placeholder: 'Choose values',
        suggestions: [...visible, ...future],
        selected: map(id => ({id, label: id, removeLabel: `Remove ${id}`}), selected),
        onSearch: setQuery,
        onSelect: id => {
          selectedIds.push(id);
          setSelected(ids => [...ids, id]);
          setQuery('');
        }
      };
      return <PopulationConditions labels={labels} model={withRow({...row, value: field})} />;
    };
    const view = render(<Harness />);
    const input = view.getByRole('textbox', {name: labels.value});
    input.focus();
    fireEvent.focus(input);
    fireEvent.mouseDown(view.getByRole('option', {name: 'Finance'}));
    fireEvent.click(view.getByRole('option', {name: 'Finance'}));
    t.is(document.activeElement, input);
    fireEvent.mouseDown(view.getByRole('option', {name: 'Legal'}));
    fireEvent.click(view.getByRole('option', {name: 'Legal'}));
    t.is(document.activeElement, input);
    fireEvent.mouseDown(view.getByRole('option', {name: 'false'}));
    fireEvent.click(view.getByRole('option', {name: 'false'}));
    fireEvent.mouseDown(view.getByRole('option', {name: '0'}));
    fireEvent.click(view.getByRole('option', {name: '0'}));
    fireEvent.change(input, {target: {value: 'Future'}});
    fireEvent.blur(input);
    t.deepEqual(selectedIds, ['string:Finance', 'string:Legal', 'boolean:false', 'number:0']);
    input.focus();
    fireEvent.focus(input);
    fireEvent.keyDown(input, {key: 'ArrowDown', keyCode: 40});
    fireEvent.keyDown(input, {key: 'Enter', keyCode: 13});
    t.deepEqual(selectedIds, [
      'string:Finance',
      'string:Legal',
      'boolean:false',
      'number:0',
      'new:Future'
    ]);
    t.is((input as HTMLInputElement).value, '');
  }
);

test.serial('removing a different row does not move controlled query or selected values', t => {
  const first = makeRow();
  const second = makeRow({id: 'second'});
  if (second.value.kind !== 'selection') return t.fail();
  second.value = {...second.value, id: 'second-values', query: 'Persist this query'};
  const model = makeModel({groups: [{id: 'stable', rows: [first, second]}]});
  const view = render(<PopulationConditions labels={labels} model={model} />);
  view.rerender(
    <PopulationConditions
      labels={labels}
      model={{...model, groups: [{id: 'stable', rows: [second]}]}}
    />
  );
  t.is(
    (view.getByRole('textbox', {name: labels.value}) as HTMLInputElement).value,
    'Persist this query'
  );
  t.is(view.getAllByRole('button', {name: 'Remove Finance'}).length, 1);
});

test.serial(
  'summary treats field names and values as text rather than HTML or executable conditions',
  t => {
    const view = render(
      <MembershipSummary
        {...summary}
        groups={[
          {
            id: 'escape',
            rows: [
              {
                id: 'text',
                field: '<b>Department</b>',
                comparison: 'is',
                values: [{id: 'unsafe', label: '<script>doNotRun()</script>'}]
              }
            ]
          }
        ]}
      />
    );
    t.truthy(view.getByText('<b>Department</b>'));
    t.truthy(view.getByText('<script>doNotRun()</script>'));
    t.is(view.container.querySelectorAll('script').length, 0);
  }
);
