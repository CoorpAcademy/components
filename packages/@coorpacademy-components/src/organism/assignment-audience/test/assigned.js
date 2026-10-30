import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentAudience from '..';
import style from '../style.css';
import tableStyle from '../../../molecule/table/style.css';
import combined from './fixtures/combined';
import disabled from './fixtures/disabled';
import everyone_and_populations from './fixtures/everyone-and-populations';
import everyone_on from './fixtures/everyone-on';
import everyone_on_with_sources from './fixtures/everyone-on-with-sources';
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
      actionText: 'Must not replace the action'
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
      ['<b>Élise</b>', 'same@login', '<b>Retirer 李</b>'],
      ['李', 'same@login', '<i>Deleted</i>'],
      ['', '', '']
    ]
  );
  t.is(region.querySelector('table b, table i'), null);
  t.is(within(region).queryByText('Must not replace the action'), null);
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

test.serial('without assigned every legacy audience fixture omits the assigned card', t => {
  const fixtures = [
    combined,
    disabled,
    everyone_and_populations,
    everyone_on,
    everyone_on_with_sources,
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
    ['everyone', 'populations', 'upload', 'individuals'].forEach(blockName => {
      t.is(
        Boolean(view.container.querySelector(`[data-name="${blockName}"]`)),
        Boolean(props[blockName])
      );
    });
    if (props.total) t.truthy(view.getByText(props.total.label));
    if (props.team) t.truthy(view.getByText(props.team.name));
    if (props.error) t.truthy(view.getByRole('alert'));
    if (props.upload?.file) t.truthy(view.getByText(props.upload.file.name));
    if (props.upload?.status === 'loading')
      t.truthy(view.container.querySelector('[aria-busy="true"]'));
    (props.individuals?.selected || []).forEach(learner => t.truthy(view.getByText(learner.label)));
    (props.populations?.options || [])
      .filter(option => option.selected)
      .forEach(option => t.truthy(view.getAllByText(option.name).length));
    t.is(
      view.container.querySelector('[data-name="audience-sources"]').disabled,
      Boolean(props.disabled || props.everyone?.value)
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
    t.is(button.className, index ? tableStyle.neutralAction : tableStyle.dangerAction);
    fireEvent.click(button);
    t.is(row.querySelector('a, svg'), null);
  });
  t.deepEqual(calls, ['alice', 'bob']);
  t.is(card(view).querySelectorAll('tbody tr').length, 2);
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

test.serial('disabled locks assigned controls while everyone only locks source picking', t => {
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
      everyone={{label: 'Everyone', value: true, onChange: noop}}
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
