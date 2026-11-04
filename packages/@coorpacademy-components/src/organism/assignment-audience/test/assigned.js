import test from 'ava';
import {existsSync} from 'fs';
import path from 'path';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import {context, wrappingComponent} from '../../../test/helpers/render-component';
import Provider from '../../../atom/provider';
import englishLocales from '../../../../locales/en/global';
import AssignmentAudience from '..';
import style from '../style.css';
import tableStyle from '../../../molecule/table/style.css';
import buttonStyle from '../../../atom/button-link/style.css';
import checkboxStyle from '../../../atom/input-checkbox/style.css';
import selectableFixture from '../../../molecule/table/test/fixtures/selectable-rows';
import hiddenTitleFixture from '../../../atom/input-checkbox/test/fixtures/hidden-title';
import foldedFixture from './fixtures/assigned-folded';
import selectionFixture0 from './fixtures/assigned-nothing-selected';
import selectionFixture1 from './fixtures/assigned-some-selected';
import selectionFixture2 from './fixtures/assigned-page-selected';
import selectionFixture3 from './fixtures/assigned-whole-filter-selected';
import selectionFixture4 from './fixtures/assigned-mixed-selection';
import selectionFixture5 from './fixtures/assigned-selection-disabled';
import selectionFixture6 from './fixtures/assigned-selection-deleted-accounts';
import expandedFixture from './fixtures/assigned-expanded';
import removedFixture from './fixtures/assigned-removed-in-this-edit';
import deletedFixture from './fixtures/assigned-deleted-accounts';
import combined from './fixtures/combined';
import disabled from './fixtures/disabled';
import few_populations from './fixtures/few-populations';
import all_users_selected from './fixtures/all-users-selected';
import all_users_selected_with_sources from './fixtures/all-users-selected-with-sources';
import full_with_invalid_everyone from './fixtures/full-with-invalid-everyone';
import idle from './fixtures/idle';
import individuals_with_chips from './fixtures/individuals-with-chips';
import picker_mode from './fixtures/picker-mode';
import populations_only from './fixtures/populations-only';
import section_error from './fixtures/section-error';
import team_mode from './fixtures/team-mode';
import team_with_invalid_population from './fixtures/team-with-invalid-population';
import upload_done from './fixtures/upload-done';
import upload_done_all_valid from './fixtures/upload-done-all-valid';
import upload_error from './fixtures/upload-error';
import upload_loading from './fixtures/upload-loading';

browserEnv();
test.afterEach.always(cleanup);

const mount = props => render(<AssignmentAudience {...props} />, {wrapper: wrappingComponent});
const card = view => view.container.querySelector('[data-name="assigned-learners"]');
const noop = () => {};
const assignedProps = (overrides = {}) => ({
  title: '300 learners already assigned',
  subtitle: 'They keep their progress',
  expanded: true,
  toggleLabel: 'Hide the list ▲',
  onToggle: noop,
  filters: [
    {key: 'assigned', label: 'Already assigned (300)', selected: true},
    {key: 'removed', label: 'Removed in this edit (3)', selected: false}
  ],
  onFilter: noop,
  search: {
    value: '',
    placeholder: 'Search assigned learners',
    onChange: noop
  },
  pagination: {label: '1–10 of 300', onPrevious: noop, onNext: noop},
  columns: ['Name', 'Login'],
  rows: [
    {
      id: 'alice',
      fields: ['Alice Martin', 'alice.martin'],
      action: {label: 'Remove', variant: 'danger', onClick: noop}
    },
    {
      id: 'bob',
      fields: ['Bob Laurent', 'bob.laurent'],
      action: {label: 'Undo', variant: 'neutral', onClick: noop}
    }
  ],
  emptyLabel: 'No learners match',
  ...overrides
});
const propsWith = assigned => ({...combined.props, assigned});

test.serial('replacing the page updates every callback without submitting the parent form', t => {
  const calls = [];
  const page = version =>
    assignedProps({
      onToggle: () => calls.push(`${version}:toggle`),
      onFilter: key => calls.push(`${version}:filter:${key}`),
      search: {
        value: '',
        placeholder: 'Find a learner',
        onChange: value => calls.push(`${version}:search:${value}`)
      },
      pagination: {
        label: version === 'first' ? '1–2 of 300' : '3–4 of 300',
        onPrevious: () => calls.push(`${version}:previous`),
        onNext: () => calls.push(`${version}:next`)
      },
      rows: (version === 'first' ? ['alice', 'bob'] : ['bob', 'alice']).map(id => ({
        id,
        fields: [id, `${id}@example.com`],
        action: {
          label: 'Remove',
          variant: 'danger',
          onClick: () => calls.push(`${version}:${id}`)
        }
      }))
    });
  const form = (assigned, isDisabled = false) => (
    <form
      onSubmit={event => {
        event.preventDefault();
        calls.push('submit');
      }}
    >
      <AssignmentAudience title="Audience" assigned={assigned} disabled={isDisabled} />
    </form>
  );
  const view = render(form(page('first')), {wrapper: wrappingComponent});
  const exercise = () => {
    const region = within(card(view));
    ['Hide the list ▲', 'Already assigned (300)', '‹', '›'].forEach(name => {
      const button = region.getByRole('button', {name});
      t.is(button.type, 'button');
      fireEvent.click(button);
    });
    card(view)
      .querySelectorAll('tbody tr')
      .forEach(row => fireEvent.click(within(row).getByRole('button', {name: 'Remove'})));
    fireEvent.input(region.getByRole('textbox'), {
      target: {value: ' Élise + 李 '}
    });
  };
  exercise();
  t.deepEqual(calls, [
    'first:toggle',
    'first:filter:assigned',
    'first:previous',
    'first:next',
    'first:alice',
    'first:bob',
    'first:search: Élise + 李 '
  ]);
  calls.length = 0;
  const next = page('second');
  view.rerender(form(next));
  t.truthy(within(card(view)).getByText('3–4 of 300'));
  exercise();
  t.deepEqual(calls, [
    'second:toggle',
    'second:filter:assigned',
    'second:previous',
    'second:next',
    'second:bob',
    'second:alice',
    'second:search: Élise + 李 '
  ]);
  calls.length = 0;
  view.rerender(form(next, true));
  exercise();
  t.deepEqual(calls, []);
  view.rerender(form(next));
  fireEvent.input(within(card(view)).getByRole('textbox'), {
    target: {value: ''}
  });
  t.deepEqual(calls, ['second:search:']);
});

test.serial('frozen mixed rows retain their order and render learner text literally', t => {
  let removals = 0;
  const action = Object.freeze({
    label: '<b>Retirer 李</b>',
    variant: 'danger',
    onClick: () => removals++
  });
  const rows = Object.freeze([
    Object.freeze({
      id: 'action',
      fields: Object.freeze(['<b>Élise</b>', 'same@login']),
      action,
      actionText: 'Removed in this edit'
    }),
    Object.freeze({
      id: 'text',
      fields: Object.freeze(['李', 'same@login']),
      actionText: '<i>Deleted</i>'
    }),
    Object.freeze({id: 'blank', fields: Object.freeze(['', ''])})
  ]);
  const assigned = Object.freeze(
    assignedProps({
      columns: Object.freeze(['<b>Nom</b>', 'Identifiant']),
      rows,
      filters: Object.freeze([]),
      search: Object.freeze({
        value: '',
        placeholder: 'Rechercher',
        onChange: noop
      }),
      pagination: Object.freeze({label: '81–83 sur 300'})
    })
  );
  const view = mount({title: 'Audience', assigned});
  const region = card(view);
  t.deepEqual(
    [...region.querySelectorAll('thead th')].map(cell => cell.textContent),
    ['<b>Nom</b>', 'Identifiant', '']
  );
  t.deepEqual(
    [...region.querySelectorAll('tbody tr')].map(row =>
      [...row.cells].map(cell => cell.textContent)
    ),
    [
      ['<b>Élise</b>', 'same@login', 'Removed in this edit<b>Retirer 李</b>'],
      ['李', 'same@login', '<i>Deleted</i>'],
      ['', '', '']
    ]
  );
  t.is(region.querySelector('table b, table i'), null);
  t.truthy(within(region).getByText('Removed in this edit'));
  t.is(within(region).getAllByRole('button', {name: '<b>Retirer 李</b>'}).length, 1);
  fireEvent.click(within(region).getByRole('button', {name: '<b>Retirer 李</b>'}));
  t.is(removals, 1);
  t.is(rows[0].fields.length, 2);
  t.is(rows[0].action, action);
  t.is(assigned.columns.length, 2);
  t.truthy(within(region).getByText('81–83 sur 300'));
  view.rerender(<AssignmentAudience title="Audience" assigned={assigned} />);
  t.is(region.querySelectorAll('tbody tr').length, 3);
});

test.serial('folding and removing assigned data unmount stale rows notices and controls', t => {
  const assigned = assignedProps({
    notice: 'Deleted account notice',
    footnote: 'Pending changes'
  });
  const view = mount({title: 'Audience', assigned});
  t.truthy(within(card(view)).getByRole('table'));
  view.rerender(<AssignmentAudience title="Audience" assigned={{...assigned, expanded: false}} />);
  const folded = within(card(view));
  t.truthy(folded.getByRole('status'));
  t.is(folded.getAllByRole('button').length, 1);
  t.is(folded.queryByRole('table'), null);
  t.is(folded.queryByRole('textbox'), null);
  t.is(folded.queryByText('Pending changes'), null);
  view.rerender(<AssignmentAudience title="Audience" />);
  t.is(card(view), null);
  t.is(view.queryByRole('status'), null);
  view.rerender(
    <AssignmentAudience title="Audience" assigned={assignedProps({rows: [], filters: []})} />
  );
  const empty = within(card(view));
  t.truthy(empty.getByText('No learners match'));
  t.is(empty.queryByRole('table'), null);
  t.is(empty.queryByRole('status'), null);
  t.is(empty.queryByText('Alice Martin'), null);
  t.is(card(view).querySelector('[aria-pressed]'), null);
  view.rerender(<AssignmentAudience title="Audience" assigned={assigned} />);
  t.is(card(view).querySelectorAll('tbody tr').length, 2);
  t.is(within(card(view)).queryByText('No learners match'), null);
});

test.serial('assigned rejects missing filter and learner records before rendering', t => {
  ['filters', 'rows'].forEach(key => {
    [null, undefined].forEach(value => {
      PropTypes.resetWarningCache();
      t.throws(
        () =>
          PropTypes.checkPropTypes(
            AssignmentAudience.propTypes,
            {
              title: 'Audience',
              assigned: assignedProps({[key]: [value]})
            },
            'prop',
            'AssignmentAudience'
          ),
        {message: new RegExp(`assigned\\.${key}\\[0\\]`)}
      );
    });
  });
  PropTypes.resetWarningCache();
});

test.serial(
  'assigned validates missing required fields and nested scalar types even when folded',
  t => {
    const valid = assignedProps({expanded: false});
    const invalid = [
      ...[
        'title',
        'expanded',
        'toggleLabel',
        'onToggle',
        'filters',
        'onFilter',
        'search',
        'pagination',
        'columns',
        'rows',
        'emptyLabel'
      ].map(key => ({[key]: undefined})),
      {filters: [{key: 1, label: 'Filter', selected: true}]},
      {filters: [{key: 'assigned', selected: true}]},
      {filters: [{key: 'assigned', label: 'Filter', selected: 'true'}]},
      {search: {...valid.search, value: 42}},
      {search: {...valid.search, placeholder: undefined}},
      {search: {...valid.search, onChange: 'change'}},
      {pagination: {label: '1–10', onPrevious: true}},
      {pagination: {label: '1–10', onNext: 'next'}},
      {columns: [null]},
      {columns: [undefined]},
      {rows: [{fields: ['Alice']}]},
      {rows: [{id: 'alice'}]},
      {rows: [{id: 'alice', fields: [null]}]},
      {rows: [{id: 'alice', fields: [undefined]}]},
      {rows: [{id: 'alice', fields: [42]}]},
      {rows: [{id: 'alice', fields: ['Alice'], actionText: 42}]},
      {
        rows: [
          {
            id: 'alice',
            fields: ['Alice'],
            action: {variant: 'danger', onClick: noop}
          }
        ]
      },
      {
        rows: [
          {
            id: 'alice',
            fields: ['Alice'],
            action: {label: 'Remove', onClick: noop}
          }
        ]
      },
      {subtitle: 42},
      {notice: true},
      {footnote: []}
    ];
    invalid.forEach(overrides => {
      PropTypes.resetWarningCache();
      t.throws(
        () =>
          PropTypes.checkPropTypes(
            AssignmentAudience.propTypes,
            {title: 'Audience', assigned: {...valid, ...overrides}},
            'prop',
            'AssignmentAudience'
          ),
        {message: /assigned/}
      );
    });
    PropTypes.resetWarningCache();
    const minimal = assignedProps({
      subtitle: undefined,
      notice: undefined,
      footnote: undefined,
      filters: [],
      columns: [],
      rows: [],
      search: {value: '', placeholder: '', onChange: noop},
      pagination: {label: ''}
    });
    t.notThrows(() =>
      PropTypes.checkPropTypes(
        AssignmentAudience.propTypes,
        {title: 'Audience', assigned: minimal},
        'prop',
        'AssignmentAudience'
      )
    );
    const view = mount({title: 'Audience', assigned: minimal});
    t.truthy(within(card(view)).getByText(minimal.emptyLabel));
    t.is(within(card(view)).queryByRole('table'), null);
  }
);

test.serial('without assigned every audience fixture omits the assigned card', t => {
  const fixtures = [
    combined,
    disabled,
    few_populations,
    all_users_selected,
    all_users_selected_with_sources,
    full_with_invalid_everyone,
    idle,
    individuals_with_chips,
    picker_mode,
    populations_only,
    section_error,
    team_mode,
    team_with_invalid_population,
    upload_done,
    upload_done_all_valid,
    upload_error,
    upload_loading
  ];
  fixtures.forEach(({props}) => {
    const view = mount(props);
    t.is(card(view), null);
    t.truthy(view.getByRole('heading', {name: props.title, level: 2}));
    ['populations', 'upload', 'individuals'].forEach(blockName => {
      t.is(
        Boolean(view.container.querySelector(`[data-name="${blockName}"]`)),
        Boolean(props[blockName])
      );
    });
    if (props.total) t.truthy(view.getByText(props.total.label));
    if (props.error) t.truthy(view.getByRole('alert'));
    if (props.upload?.file) t.truthy(view.getByText(props.upload.file.name));
    if (props.upload?.status === 'loading')
      t.truthy(view.container.querySelector('[aria-busy="true"]'));
    (props.individuals?.selected || []).forEach(learner => t.truthy(view.getByText(learner.label)));
    (props.populations?.options || [])
      .filter(option => option.selected)
      .forEach(option => t.truthy(view.getAllByText(option.name).length));
    const sources = view.container.querySelector('[data-name="audience-sources"]');
    t.is(Boolean(sources), Boolean(props.upload || props.individuals));
    if (sources)
      t.is(
        sources.disabled,
        Boolean(
          props.disabled ||
            props.populations?.options.some(
              option => option.all && (option.selected || option.locked)
            )
        )
      );
    t.is(view.queryByRole('table'), null);
    t.is(view.container.querySelector('[aria-pressed]'), null);
    view.unmount();
  });
});

test.serial('folded assigned learners show only header and toggle after the total', t => {
  let toggles = 0;
  const assigned = assignedProps({
    expanded: false,
    toggleLabel: 'Show the list ▼',
    footnote: 'Removal happens on publication',
    onToggle: () => toggles++
  });
  const view = mount(propsWith(assigned));
  const region = card(view);
  t.truthy(region);
  const queries = within(region);
  t.truthy(queries.getByText(assigned.title));
  t.truthy(queries.getByText(assigned.subtitle));
  ['individuals', 'estimated-audience'].forEach(name =>
    t.true(
      Boolean(
        view.container.querySelector(`[data-name="${name}"]`).compareDocumentPosition(region) & 4
      )
    )
  );
  t.is(queries.queryByRole('table'), null);
  t.is(queries.queryByRole('textbox'), null);
  t.is(region.querySelector('[aria-pressed]'), null);
  t.is(queries.queryByText(assigned.pagination.label), null);
  t.is(queries.queryByText(assigned.footnote), null);
  fireEvent.click(queries.getByRole('button', {name: assigned.toggleLabel}));
  t.is(toggles, 1);
  t.is(queries.queryByRole('table'), null);
  view.rerender(
    <AssignmentAudience
      title="Audience"
      assigned={{...assigned, subtitle: undefined, expanded: true}}
    />
  );
  t.truthy(within(card(view)).getByRole('table'));
  t.is(within(card(view)).queryByText(assigned.subtitle), null);
});

test.serial('expanded filters reflect supplied selection and forward their keys', t => {
  const calls = [];
  const assigned = assignedProps({onFilter: key => calls.push(key)});
  const view = mount(propsWith(assigned));
  assigned.filters.forEach(filter => {
    const button = within(card(view)).getByRole('button', {
      name: filter.label
    });
    t.is(button.getAttribute('aria-pressed'), String(filter.selected));
    fireEvent.click(button);
    t.is(button.getAttribute('aria-pressed'), String(filter.selected));
  });
  t.deepEqual(calls, ['assigned', 'removed']);
  view.rerender(
    <AssignmentAudience
      {...propsWith({
        ...assigned,
        filters: assigned.filters.map(filter => ({
          ...filter,
          selected: !filter.selected
        }))
      })}
    />
  );
  t.is(
    within(card(view))
      .getByRole('button', {name: assigned.filters[1].label})
      .getAttribute('aria-pressed'),
    'true'
  );
});

test.serial('assigned search forwards the input value without filtering rows locally', t => {
  const calls = [];
  const assigned = assignedProps({
    search: {
      value: '',
      placeholder: 'Search roster',
      onChange: value => calls.push(value)
    }
  });
  const view = mount(propsWith(assigned));
  fireEvent.input(within(card(view)).getByRole('textbox', {name: 'Search roster'}), {
    target: {value: 'alice'}
  });
  t.deepEqual(calls, ['alice']);
  t.is(card(view).querySelectorAll('tbody tr').length, 2);
  t.truthy(within(card(view)).getByText(assigned.title));
  t.truthy(within(card(view)).getByText(assigned.pagination.label));
  view.rerender(
    <AssignmentAudience
      {...propsWith({
        ...assigned,
        search: {...assigned.search, value: 'bob'}
      })}
    />
  );
  t.is(within(card(view)).getByRole('textbox').value, 'bob');
});

test.serial('pagination shows the supplied range and disables missing callbacks', t => {
  const calls = [];
  const view = mount(propsWith(assignedProps()));
  [
    [true, true],
    [false, true],
    [true, false],
    [false, false]
  ].forEach(([previous, next]) => {
    view.rerender(
      <AssignmentAudience
        {...propsWith(
          assignedProps({
            pagination: {
              label: '21–30 of 300',
              onPrevious: previous ? () => calls.push('previous') : undefined,
              onNext: next ? () => calls.push('next') : undefined
            }
          })
        )}
      />
    );
    const region = within(card(view));
    t.truthy(region.getByText('21–30 of 300'));
    const before = calls.length;
    ['‹', '›'].forEach((name, index) => {
      const button = region.getByRole('button', {name});
      t.is(button.disabled, !(index ? next : previous));
      fireEvent.click(button);
    });
    t.deepEqual(calls.slice(before), [
      ...(previous ? ['previous'] : []),
      ...(next ? ['next'] : [])
    ]);
  });
});

test.serial('assigned row actions remove or undo only their row without an edit pencil', t => {
  const calls = [];
  const assigned = assignedProps();
  assigned.rows = assigned.rows.map(row => ({
    ...row,
    action: {...row.action, onClick: () => calls.push(row.id)}
  }));
  const view = mount(propsWith(assigned));
  const rows = card(view).querySelectorAll('tbody tr');
  rows.forEach((row, index) => {
    t.is(row.cells.length, 3);
    const button = within(row.cells[2]).getByRole('button', {
      name: index ? 'Undo' : 'Remove'
    });
    t.is(button.type, 'button');
    t.true(button.className.includes(index ? tableStyle.neutralAction : tableStyle.dangerAction));
    fireEvent.click(button);
    t.is(row.querySelector('a'), null);
    t.true([...row.querySelectorAll('svg')].every(svg => button.contains(svg)));
  });
  t.deepEqual(calls, ['alice', 'bob']);
  t.is(card(view).querySelectorAll('tbody tr').length, 2);
});

test.serial('a row shows its state next to the action it allows, whatever the filter', t => {
  let undone = 0;
  const assigned = assignedProps({
    rows: [
      {
        id: 'removed',
        fields: ['Alice Martin', 'alice.martin'],
        actionText: 'Removed in this edit',
        action: {label: 'Undo', variant: 'neutral', onClick: () => undone++}
      }
    ]
  });
  const view = mount(propsWith(assigned));
  const cell = card(view).querySelector('tbody td:last-child');
  const undo = within(cell).getByRole('button', {name: 'Undo'});
  t.is(cell.textContent, 'Removed in this editUndo');
  t.true(
    Boolean(
      within(cell).getByText('Removed in this edit').compareDocumentPosition(undo) &
        Node.DOCUMENT_POSITION_FOLLOWING
    )
  );
  fireEvent.click(undo);
  t.is(undone, 1);
});

test.serial('actionText is muted text without an action button', t => {
  const assigned = assignedProps({
    rows: [
      {
        id: 'deleted',
        fields: ['Deleted account', 'old.login'],
        actionText: 'Deleted account'
      },
      {id: 'blank', fields: ['No action', 'other.login']}
    ]
  });
  const view = mount(propsWith(assigned));
  const cells = card(view).querySelectorAll('tbody td:last-child');
  t.is(cells[0].textContent, 'Deleted account');
  t.is(cells[1].textContent, '');
  t.is(card(view).querySelectorAll('thead th').length, 3);
  cells.forEach(cell => t.is(cell.querySelector('button'), null));
  t.truthy(cells[0].closest(`.${style.assignedTable}`));
});

test.serial('notice is a status banner above the header even when folded', t => {
  const view = mount(propsWith(assignedProps()));
  [false, true].forEach(expanded => {
    [undefined, '12 deleted accounts were removed'].forEach(notice => {
      const assigned = assignedProps({expanded, notice});
      view.rerender(<AssignmentAudience {...propsWith(assigned)} />);
      const status = within(card(view)).queryByRole('status');
      t.is(Boolean(status), Boolean(notice));
      if (notice) {
        t.is(status.textContent, notice);
        t.truthy(status.querySelector('svg'));
        t.true(
          Boolean(status.compareDocumentPosition(within(card(view)).getByText(assigned.title)) & 4)
        );
      }
    });
  });
});

test.serial('footnote follows the table and empty rows show emptyLabel', t => {
  const assigned = assignedProps({
    footnote: 'Changes apply when published'
  });
  const view = mount(propsWith(assigned));
  const region = within(card(view));
  t.true(
    Boolean(
      region.getByRole('table').compareDocumentPosition(region.getByText(assigned.footnote)) & 4
    )
  );
  view.rerender(<AssignmentAudience {...propsWith({...assigned, footnote: undefined})} />);
  t.is(within(card(view)).queryByText(assigned.footnote), null);
  view.rerender(<AssignmentAudience {...propsWith({...assigned, rows: []})} />);
  const emptyRegion = within(card(view));
  t.is(emptyRegion.queryByRole('table'), null);
  t.truthy(emptyRegion.getByText(assigned.emptyLabel));
  t.truthy(emptyRegion.getByRole('textbox'));
  t.truthy(emptyRegion.getByText(assigned.pagination.label));
  t.truthy(emptyRegion.getByRole('button', {name: assigned.filters[0].label}));
  t.true(
    Boolean(
      emptyRegion
        .getByText(assigned.emptyLabel)
        .compareDocumentPosition(emptyRegion.getByText(assigned.footnote)) & 4
    )
  );
  view.rerender(<AssignmentAudience {...propsWith({...assigned, rows: [], expanded: false})} />);
  t.is(within(card(view)).queryByText(assigned.emptyLabel), null);
});

test.serial('disabled locks assigned controls while all users only locks source picking', t => {
  const calls = [];
  const callback = () => calls.push('action');
  const assigned = assignedProps({
    onToggle: callback,
    onFilter: callback,
    search: {value: '', placeholder: 'Find assigned', onChange: callback},
    pagination: {
      label: '1–10 of 300',
      onPrevious: callback,
      onNext: callback
    },
    rows: [
      {
        id: 'alice',
        fields: ['Alice', 'alice'],
        action: {label: 'Remove', variant: 'danger', onClick: callback}
      }
    ]
  });
  const view = mount({...propsWith(assigned), disabled: true});
  const exercise = () => {
    const region = within(card(view));
    ['Hide the list ▲', assigned.filters[0].label, '‹', '›', 'Remove'].forEach(name =>
      fireEvent.click(region.getByRole('button', {name}))
    );
    fireEvent.input(region.getByRole('textbox'), {
      target: {value: 'alice'}
    });
  };
  exercise();
  t.deepEqual(calls, []);
  const fieldset = within(card(view)).getByRole('textbox').closest('fieldset');
  t.true(fieldset.disabled);
  t.is(within(card(view)).getByRole('button', {name: 'Remove'}).closest('fieldset'), fieldset);
  view.rerender(
    <AssignmentAudience
      {...propsWith(assigned)}
      populations={all_users_selected.props.populations}
    />
  );
  exercise();
  t.is(calls.length, 6);
});

test.serial(
  'assigned validates its required nested contract without requiring optional blocks',
  t => {
    t.notThrows(() =>
      PropTypes.checkPropTypes(
        AssignmentAudience.propTypes,
        {
          title: 'Audience',
          assigned: assignedProps({
            subtitle: undefined,
            notice: undefined,
            footnote: undefined
          })
        },
        'prop',
        'AssignmentAudience'
      )
    );
    const invalid = [
      {expanded: 'yes'},
      {filters: [{key: 'x', label: 'Filter'}]},
      {onFilter: undefined},
      {search: {value: '', placeholder: 'Search'}},
      {pagination: {}},
      {columns: [3]},
      {
        rows: [
          {
            id: 'alice',
            fields: ['Alice'],
            action: {label: 'Remove', variant: 'danger'}
          }
        ]
      },
      {
        rows: [
          {
            id: 'alice',
            fields: ['Alice'],
            action: {label: 'Remove', variant: 'primary', onClick: noop}
          }
        ]
      }
    ];
    invalid.forEach(overrides => {
      PropTypes.resetWarningCache();
      t.throws(
        () =>
          PropTypes.checkPropTypes(
            AssignmentAudience.propTypes,
            {title: 'Audience', assigned: assignedProps(overrides)},
            'prop',
            'AssignmentAudience'
          ),
        {message: /prop/}
      );
    });
    PropTypes.resetWarningCache();
  }
);

const selectionProps = (overrides = {}) => ({
  selectedIds: [],
  onToggleRow: noop,
  onTogglePage: noop,
  ...overrides
});
const pageName = '__Select all learners on this page';
const selectedRegion = (view, name) => within(card(view)).getByRole('checkbox', {name});

test.serial('page selection checkbox has a translated accessible name', t => {
  t.is(englishLocales['Select all learners on this page'], 'Select all learners on this page');
  const frenchLabel = 'Sélectionner tous les apprenants de cette page';
  const translate = key =>
    key === 'Select all learners on this page' ? frenchLabel : context.translate(key);
  const view = render(
    <Provider {...context} translate={translate}>
      <AssignmentAudience {...propsWith(assignedProps({selection: selectionProps()}))} />
    </Provider>
  );

  t.truthy(selectedRegion(view, frenchLabel));
});

test.serial(
  'selected learner becomes disabled when deleted and selectable again when restored',
  t => {
    const calls = [];
    const learner = assignedProps().rows[0];
    const selection = selectionProps({
      selectedIds: ['alice'],
      onToggleRow: (...args) => calls.push(['row', ...args]),
      onTogglePage: (...args) => calls.push(['page', ...args])
    });
    const page = row => propsWith(assignedProps({rows: [row], selection}));
    const view = mount(page(learner));
    t.true(selectedRegion(view, 'Alice Martin').checked);
    t.true(selectedRegion(view, pageName).checked);

    view.rerender(
      <AssignmentAudience
        {...page({...learner, action: undefined, actionText: 'Deleted account'})}
      />
    );
    const deleted = selectedRegion(view, 'Alice Martin');
    t.false(deleted.checked);
    t.true(deleted.disabled);
    t.false(selectedRegion(view, pageName).checked);
    t.true(selectedRegion(view, pageName).disabled);
    fireEvent.click(deleted.closest('label'));
    selectedRegion(view, pageName).click();
    t.deepEqual(calls, []);
    t.deepEqual(selection.selectedIds, ['alice']);

    view.rerender(<AssignmentAudience {...page(learner)} />);
    t.true(selectedRegion(view, 'Alice Martin').checked);
    t.false(selectedRegion(view, 'Alice Martin').disabled);
    t.true(selectedRegion(view, pageName).checked);
    fireEvent.click(selectedRegion(view, 'Alice Martin').closest('label'));
    fireEvent.click(selectedRegion(view, pageName).closest('label'));
    t.deepEqual(calls, [['row', 'alice'], ['page']]);
    t.true(selectedRegion(view, 'Alice Martin').checked);
  }
);

test.serial('duplicate learner names keep independent labels and opaque selected ids', t => {
  const calls = [];
  const action = assignedProps().rows[0].action;
  const view = mount(
    propsWith(
      assignedProps({
        rows: [
          {id: '__proto__', fields: ['Same learner', 'first'], action},
          {id: 'toString', fields: ['Same learner', 'second'], action},
          {id: 'learner/3?filter=a&b', fields: [], action}
        ],
        selection: selectionProps({
          selectedIds: ['__proto__', '__proto__', 'toString', 'off-page'],
          onToggleRow: (...args) => calls.push(args)
        })
      })
    )
  );
  const inputs = within(card(view)).getAllByRole('checkbox', {name: 'Same learner'});
  t.deepEqual(
    inputs.map(input => input.checked),
    [true, true]
  );
  t.not(inputs[0].id, inputs[1].id);
  t.false(selectedRegion(view, pageName).checked);
  inputs.forEach(input => {
    t.is(input.closest('label').htmlFor, input.id);
    fireEvent.click(input.closest('label').querySelector('span'));
  });
  const fallback = selectedRegion(view, 'learner/3?filter=a&b');
  t.false(fallback.checked);
  fireEvent.click(fallback.closest('label'));
  t.deepEqual(calls, [['__proto__'], ['toString'], ['learner/3?filter=a&b']]);
  t.deepEqual(
    inputs.map(input => input.checked),
    [true, true]
  );
});

test.serial('selection reappears from current props after the assigned block is removed', t => {
  const calls = [];
  const page = version =>
    assignedProps({
      rows: [assignedProps().rows[0]],
      selection: selectionProps({
        selectedIds: version === 'first' ? ['alice'] : [],
        onToggleRow: id => calls.push(`${version}:${id}`),
        onTogglePage: (...args) => calls.push([version, ...args]),
        bulkActions: [{label: 'Remove', variant: 'danger', onClick: () => calls.push('old bulk')}],
        notice: {message: 'Old notice'}
      })
    });
  const view = mount(propsWith(page('first')));
  t.true(selectedRegion(view, pageName).checked);
  view.rerender(<AssignmentAudience {...propsWith(undefined)} />);
  t.is(card(view), null);
  const next = page('next');
  next.selection.bulkActions = [];
  next.selection.notice = undefined;
  view.rerender(<AssignmentAudience {...propsWith(next)} />);
  t.false(selectedRegion(view, pageName).checked);
  t.false(selectedRegion(view, 'Alice Martin').checked);
  t.is(card(view).querySelector('[data-name="assigned-selection-bar"]'), null);
  t.is(card(view).querySelector('[data-name="assigned-selection-notice"]'), null);
  fireEvent.click(selectedRegion(view, pageName));
  fireEvent.click(selectedRegion(view, 'Alice Martin'));
  t.deepEqual(calls, [['next'], 'next:alice']);
});

test.serial(
  'empty filtered page keeps supplied bulk actions and notice without inventing a summary',
  t => {
    const calls = [];
    const assigned = assignedProps({
      rows: [],
      selection: selectionProps({
        selectedIds: ['off-page'],
        bulkActions: [
          {
            label: 'Remove 300 learners',
            variant: 'danger',
            onClick: (...args) => calls.push(['bulk', ...args])
          }
        ],
        notice: {
          message: 'All 300 learners of this filter are selected.',
          action: {label: 'Clear selection', onClick: (...args) => calls.push(['clear', ...args])}
        }
      })
    });
    const view = mount(propsWith(assigned));
    t.truthy(within(card(view)).getByText('No learners match'));
    t.is(within(card(view)).queryByRole('table'), null);
    t.is(within(card(view)).queryByRole('checkbox'), null);
    const bar = card(view).querySelector('[data-name="assigned-selection-bar"]');
    t.is(bar.textContent, 'Remove 300 learners');
    t.truthy(within(card(view)).getByText('All 300 learners of this filter are selected.'));
    fireEvent.click(within(bar).getByRole('button', {name: 'Remove 300 learners'}));
    fireEvent.click(within(card(view)).getByRole('button', {name: 'Clear selection'}));
    t.deepEqual(calls, [['bulk'], ['clear']]);
    t.deepEqual(assigned.selection.selectedIds, ['off-page']);
  }
);

test.serial('selection validation rejects null array members and malformed container types', t => {
  const invalid = [
    {selectedIds: 'alice'},
    {selectedIds: [undefined]},
    {bulkActions: {}},
    {bulkActions: [null]},
    {bulkActions: [undefined]},
    {bulkActions: [{label: 'Remove', variant: 'danger', onClick: 'remove'}]},
    {notice: 'All selected'},
    {notice: {message: 'All selected', action: 'Clear'}},
    {notice: {message: 'All selected', action: {label: 'Clear', onClick: true}}}
  ];
  invalid.forEach(overrides => {
    PropTypes.resetWarningCache();
    t.throws(
      () =>
        PropTypes.checkPropTypes(
          AssignmentAudience.propTypes,
          propsWith(assignedProps({selection: selectionProps(overrides)})),
          'prop',
          'AssignmentAudience'
        ),
      {message: /selection/}
    );
  });
  PropTypes.resetWarningCache();
});

test.serial('legacy assigned fixtures omit selection column bulk bar and selection notice', t => {
  [foldedFixture, expandedFixture, removedFixture, deletedFixture].forEach(({props}) => {
    const view = mount(props);
    t.is(card(view).querySelector('[data-name="checkbox-input"]'), null);
    ['assigned-selection-bar', 'assigned-selection-notice'].forEach(name =>
      t.is(card(view).querySelector(`[data-name="${name}"]`), null)
    );
    if (props.assigned.expanded) {
      t.truthy(within(card(view)).getByRole('textbox'));
      t.truthy(within(card(view)).getByText(props.assigned.pagination.label));
      t.is(card(view).querySelectorAll('th').length, props.assigned.columns.length + 1);
      t.is(card(view).querySelectorAll('tbody tr').length, props.assigned.rows.length);
      props.assigned.rows.forEach((row, index) => {
        const element = card(view).querySelectorAll('tbody tr')[index];
        if (row.action) t.truthy(within(element).getByRole('button', {name: row.action.label}));
        if (row.actionText) t.truthy(within(element).getByText(row.actionText));
      });
    }
    if (props.assigned.notice) t.truthy(within(card(view)).getByRole('status'));
    view.unmount();
  });
});

test.serial('controlled rows toggle by id including removed learners', t => {
  const calls = [];
  const firstRows = assignedProps().rows.map(row =>
    Object.freeze({
      ...row,
      fields: Object.freeze(row.fields),
      action: Object.freeze({...row.action, onClick: () => calls.push('row-action')})
    })
  );
  const deleted = Object.freeze({
    id: 'deleted',
    fields: Object.freeze(['Deleted learner', '—']),
    actionText: 'Deleted account'
  });
  const selection = Object.freeze(
    selectionProps({
      selectedIds: Object.freeze(['bob', 'deleted']),
      onToggleRow: id => calls.push(id),
      onTogglePage: () => calls.push('page')
    })
  );
  const assigned = Object.freeze(
    assignedProps({rows: Object.freeze([...firstRows, deleted]), selection})
  );
  const view = mount(propsWith(assigned));
  const alice = selectedRegion(view, 'Alice Martin');
  const bob = selectedRegion(view, 'Bob Laurent');
  const deletedInput = selectedRegion(view, 'Deleted learner');
  t.false(alice.checked);
  t.true(bob.checked);
  t.false(deletedInput.checked);
  t.true(deletedInput.disabled);
  fireEvent.click(alice);
  fireEvent.click(bob);
  deletedInput.click();
  t.deepEqual(calls, ['alice', 'bob']);
  t.false(alice.checked);
  t.true(bob.checked);
  t.deepEqual(selection.selectedIds, ['bob', 'deleted']);
  const next = assignedProps({
    rows: [firstRows[1], {id: 'blank-name', fields: ['', 'login'], action: firstRows[0].action}],
    selection: selectionProps({
      selectedIds: ['blank-name'],
      onToggleRow: id => calls.push(`next:${id}`)
    })
  });
  view.rerender(<AssignmentAudience {...propsWith(next)} />);
  t.is(within(card(view)).queryByRole('checkbox', {name: 'Alice Martin'}), null);
  fireEvent.click(selectedRegion(view, 'Bob Laurent'));
  t.true(selectedRegion(view, 'blank-name').checked);
  fireEvent.click(selectedRegion(view, 'blank-name'));
  t.deepEqual(calls, ['alice', 'bob', 'next:bob', 'next:blank-name']);
  view.rerender(<AssignmentAudience {...propsWith({...next, selection: undefined})} />);
  t.is(card(view).querySelector('[data-name="checkbox-input"]'), null);
});

test.serial('page checkbox selects only actionable rows', t => {
  const calls = [];
  const rows = [...assignedProps().rows, {id: 'deleted', fields: ['Deleted', '—']}];
  const page = ids =>
    assignedProps({
      rows,
      selection: selectionProps({
        selectedIds: ids,
        onTogglePage: () => calls.push('page'),
        onToggleRow: () => calls.push('row')
      })
    });
  const view = mount(propsWith(page(['off-page', 'deleted'])));
  const header = () => selectedRegion(view, pageName);
  t.false(header().checked);
  t.false(header().disabled);
  fireEvent.click(header());
  t.false(header().checked);
  t.deepEqual(calls, ['page']);
  view.rerender(<AssignmentAudience {...propsWith(page(['alice', 'off-page']))} />);
  t.false(header().checked);
  view.rerender(<AssignmentAudience {...propsWith(page(['alice', 'bob', 'off-page']))} />);
  t.true(header().checked);
  view.rerender(<AssignmentAudience {...propsWith({...page(['deleted']), rows: [rows[2]]})} />);
  t.false(header().checked);
  t.true(header().disabled);
  header().click();
  t.deepEqual(calls, ['page']);
  view.rerender(<AssignmentAudience {...propsWith({...page([]), rows: []})} />);
  t.truthy(within(card(view)).getByText('No learners match'));
  t.is(within(card(view)).queryByRole('table'), null);
  t.is(within(card(view)).queryByRole('checkbox', {name: pageName}), null);
});

test.serial('mixed bulk bar preserves summary and action order and calls each callback', t => {
  const calls = [];
  const page = version =>
    assignedProps({
      selection: selectionProps({
        summary: '<b>2 selected</b>',
        bulkActions: [
          {
            label: '<i>Remove 1 learner</i>',
            variant: 'danger',
            onClick: () => calls.push(`${version}:remove`)
          },
          {
            label: 'Restore 1 learner',
            variant: 'neutral',
            onClick: () => calls.push(`${version}:restore`)
          }
        ]
      })
    });
  const form = assigned => (
    <form
      onSubmit={event => {
        event.preventDefault();
        calls.push('submit');
      }}
    >
      <AssignmentAudience {...propsWith(assigned)} />
    </form>
  );
  const view = render(form(page('first')), {wrapper: wrappingComponent});
  const bar = () => card(view).querySelector('[data-name="assigned-selection-bar"]');
  t.truthy(within(bar()).getByText('<b>2 selected</b>'));
  t.is(bar().querySelector('b, i'), null);
  const actions = within(bar()).getAllByRole('button');
  t.deepEqual(
    actions.map(button => button.textContent),
    ['<i>Remove 1 learner</i>', 'Restore 1 learner']
  );
  actions.forEach((button, index) => {
    t.is(button.type, 'button');
    t.true(button.className.includes(buttonStyle.text));
    t.true(button.className.includes(index ? tableStyle.neutralAction : tableStyle.dangerAction));
    t.truthy(button.querySelector(`svg[data-icon="${index ? 'rotate-left' : 'trash'}"]`));
    fireEvent.click(button);
  });
  t.deepEqual(calls, ['first:remove', 'first:restore']);
  view.rerender(form(page('second')));
  within(bar())
    .getAllByRole('button')
    .forEach(button => fireEvent.click(button));
  t.deepEqual(calls, ['first:remove', 'first:restore', 'second:remove', 'second:restore']);
  [undefined, []].forEach(bulkActions => {
    view.rerender(
      form(assignedProps({selection: selectionProps({summary: '2 selected', bulkActions})}))
    );
    t.is(bar(), null);
  });
});

test.serial('selection notice renders message and optional action independently of bulk bar', t => {
  const calls = [];
  const page = notice =>
    assignedProps({notice: 'Deleted account notice', selection: selectionProps({notice})});
  const view = mount(propsWith(page({message: '<b>All page selected</b>'})));
  const notice = () => card(view).querySelector('[data-name="assigned-selection-notice"]');
  t.is(notice().textContent, '<b>All page selected</b>');
  t.is(notice().querySelector('b'), null);
  t.is(within(notice()).queryByRole('button'), null);
  t.is(card(view).querySelector('[data-name="assigned-selection-bar"]'), null);
  view.rerender(
    <AssignmentAudience
      {...propsWith(
        page({
          message: 'All 10 selected',
          action: {label: '<i>Select all 300</i>', onClick: () => calls.push('all')}
        })
      )}
    />
  );
  const action = within(notice()).getByRole('button', {name: '<i>Select all 300</i>'});
  t.is(action.type, 'button');
  t.is(action.querySelector('i'), null);
  fireEvent.click(action);
  view.rerender(
    <AssignmentAudience
      {...propsWith(
        page({
          message: 'All 300 selected',
          action: {label: 'Clear selection', onClick: () => calls.push('clear')}
        })
      )}
    />
  );
  fireEvent.click(within(notice()).getByRole('button', {name: 'Clear selection'}));
  t.deepEqual(calls, ['all', 'clear']);
  view.rerender(<AssignmentAudience {...propsWith(page(undefined))} />);
  t.is(notice(), null);
  const folded = {...page({message: 'Selection notice'}), expanded: false};
  view.rerender(<AssignmentAudience {...propsWith(folded)} />);
  t.is(notice(), null);
  t.truthy(within(card(view)).getByRole('status'));
});

test.serial('named selection is keyboard accessible and disabled with the section', t => {
  const calls = [];
  const assigned = assignedProps({
    selection: selectionProps({
      onToggleRow: id => calls.push(id),
      onTogglePage: () => calls.push('page'),
      summary: '2 selected',
      bulkActions: [{label: 'Remove 2', variant: 'danger', onClick: () => calls.push('bulk')}],
      notice: {
        message: 'Page selected',
        action: {label: 'Select filter', onClick: () => calls.push('notice')}
      }
    })
  });
  const form = isDisabled => (
    <form
      onSubmit={event => {
        event.preventDefault();
        calls.push('submit');
      }}
    >
      <AssignmentAudience
        {...propsWith(assigned)}
        populations={all_users_selected.props.populations}
        disabled={isDisabled}
      />
    </form>
  );
  const view = render(form(false), {wrapper: wrappingComponent});
  const row = selectedRegion(view, 'Alice Martin');
  row.focus();
  t.is(document.activeElement, row);
  t.is(row.tabIndex, 0);
  const label = row.closest('label');
  t.is(label.htmlFor, row.id);
  t.is(label.querySelector('span').textContent, 'Alice Martin');
  t.true(label.querySelector('span').className.includes(checkboxStyle.accessibleTitle));
  t.false(label.querySelector('span').classList.contains(checkboxStyle.primary));
  const bar = card(view).querySelector('[data-name="assigned-selection-bar"]');
  const notice = card(view).querySelector('[data-name="assigned-selection-notice"]');
  const table = card(view).querySelector('table');
  t.true(Boolean(bar.compareDocumentPosition(notice) & 4));
  t.true(Boolean(notice.compareDocumentPosition(table) & 4));
  const exercise = () => {
    fireEvent.click(selectedRegion(view, 'Alice Martin'));
    fireEvent.click(selectedRegion(view, pageName));
    ['Remove 2', 'Select filter'].forEach(name =>
      fireEvent.click(within(card(view)).getByRole('button', {name}))
    );
  };
  view.rerender(form(true));
  t.true(selectedRegion(view, 'Alice Martin').disabled);
  t.true(selectedRegion(view, pageName).disabled);
  exercise();
  t.deepEqual(calls, []);
  view.rerender(form(false));
  exercise();
  t.deepEqual(calls, ['alice', 'page', 'bulk', 'notice']);
  view.rerender(<AssignmentAudience {...propsWith({...assigned, expanded: false})} />);
  t.is(card(view).querySelector('[data-name="checkbox-input"]'), null);
  t.is(card(view).querySelector('[data-name="assigned-selection-bar"]'), null);
});

test.serial('selection descriptors validate required fields and optional absence', t => {
  const valid = selectionProps();
  const invalid = [
    {},
    ...['selectedIds', 'onToggleRow', 'onTogglePage'].map(key => ({...valid, [key]: undefined})),
    {...valid, selectedIds: [42]},
    {...valid, selectedIds: [null]},
    {...valid, summary: 42},
    {...valid, onToggleRow: true},
    {...valid, onTogglePage: 'page'},
    ...[
      {},
      {label: 1, variant: 'danger', onClick: noop},
      {label: 'Remove', variant: 'bad', onClick: noop},
      {label: 'Remove', variant: 'danger'}
    ].map(action => ({...valid, bulkActions: [action]})),
    ...[
      {},
      {message: 4},
      {message: 'Notice', action: {}},
      {message: 'Notice', action: {label: 'All'}},
      {message: 'Notice', action: {label: 4, onClick: noop}}
    ].map(notice => ({...valid, notice}))
  ];
  invalid.forEach(selection => {
    PropTypes.resetWarningCache();
    t.throws(
      () =>
        PropTypes.checkPropTypes(
          AssignmentAudience.propTypes,
          propsWith(assignedProps({selection})),
          'prop',
          'AssignmentAudience'
        ),
      {message: /selection/}
    );
  });
  PropTypes.resetWarningCache();
  [undefined, valid, {...valid, bulkActions: [], notice: {message: 'Only message'}}].forEach(
    selection =>
      t.notThrows(() =>
        PropTypes.checkPropTypes(
          AssignmentAudience.propTypes,
          propsWith(assignedProps({selection})),
          'prop',
          'AssignmentAudience'
        )
      )
  );
});

test.serial('selection fixtures match their selected learners action counts and notices', t => {
  const fixtures = {
    'assigned-nothing-selected': selectionFixture0,
    'assigned-some-selected': selectionFixture1,
    'assigned-page-selected': selectionFixture2,
    'assigned-whole-filter-selected': selectionFixture3,
    'assigned-mixed-selection': selectionFixture4,
    'assigned-selection-disabled': selectionFixture5,
    'assigned-selection-deleted-accounts': selectionFixture6
  };
  const states = [
    ['assigned-nothing-selected', 0, [], undefined],
    ['assigned-some-selected', 2, ['Remove 2 learners'], undefined],
    [
      'assigned-page-selected',
      10,
      ['Remove 9 learners', 'Restore 1 learner'],
      'Select all 300 learners of this filter'
    ],
    [
      'assigned-whole-filter-selected',
      10,
      ['Remove 299 learners', 'Restore 1 learner'],
      'Clear selection'
    ],
    ['assigned-mixed-selection', 2, ['Remove 1 learner', 'Restore 1 learner'], undefined],
    [
      'assigned-selection-disabled',
      2,
      ['Remove 2 learners'],
      'Select all 300 learners of this filter'
    ],
    ['assigned-selection-deleted-accounts', 0, [], undefined]
  ];
  states.forEach(([name, count, labels, noticeLabel]) => {
    const file = path.join(__dirname, 'fixtures', `${name}.js`);
    t.true(existsSync(file), `${name} exists`);
    if (!existsSync(file)) return;
    const {props} = fixtures[name];
    const {assigned} = props;
    const {selection} = assigned;
    t.is(selection.selectedIds.length, count);
    t.true(
      selection.selectedIds.every(id => assigned.rows.some(row => row.id === id && row.action))
    );
    t.deepEqual(
      (selection.bulkActions || []).map(action => action.label),
      labels
    );
    t.is(selection.notice && selection.notice.action && selection.notice.action.label, noticeLabel);
    if (name === 'assigned-whole-filter-selected') t.is(selection.summary, '300 selected');
    else if (count) t.is(selection.summary, `${count} selected`);
    if (name === 'assigned-some-selected' || name === 'assigned-selection-disabled') {
      t.true(
        selection.selectedIds.every(
          id => assigned.rows.find(row => row.id === id).action.variant === 'danger'
        )
      );
    }
    if (name === 'assigned-mixed-selection') {
      t.deepEqual(
        selection.selectedIds.map(id => assigned.rows.find(row => row.id === id).action.variant),
        ['danger', 'neutral']
      );
    }
    if (name === 'assigned-nothing-selected') {
      t.is(assigned.rows.length, 10);
      t.is(assigned.rows.filter(row => !row.action).length, 1);
      t.truthy(assigned.filters.find(filter => filter.key === 'deleted').label.includes('(1)'));
    }
    if (name === 'assigned-selection-disabled') t.true(props.disabled);
    if (name === 'assigned-selection-deleted-accounts')
      t.true(assigned.rows.every(row => !row.action));
    const view = mount(props);
    t.is(
      card(view).querySelectorAll('tbody [data-name="checkbox-input"]').length,
      assigned.rows.length
    );
    view.unmount();
  });
  const examples = [
    [
      '../../../molecule/table/test/fixtures/selectable-rows.js',
      fixture => {
        t.false(fixture.props.selectAll.checked);
        t.deepEqual(
          fixture.props.rows.map(row => [row.select.checked, Boolean(row.select.disabled)]),
          [
            [true, false],
            [false, false],
            [false, true]
          ]
        );
      }
    ],
    [
      '../../../atom/input-checkbox/test/fixtures/hidden-title.js',
      fixture => {
        t.true(fixture.props.hideTitle);
        t.truthy(fixture.props.title);
      }
    ]
  ];
  examples.forEach(([relative, check]) => {
    const file = path.join(__dirname, relative);
    t.true(existsSync(file), relative);
    if (existsSync(file))
      check(relative.includes('selectable-rows') ? selectableFixture : hiddenTitleFixture);
  });
});
