import test from 'ava';
import {readFileSync} from 'fs';
import path from 'path';
import postcss from 'postcss';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {render, cleanup, fireEvent, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Tag from '../../../atom/tag';
import Table from '..';
import style from '../style.css';
import checkboxStyle from '../../../atom/input-checkbox/style.css';
import defaultFixture from './fixtures/default';
import readonlyFixture from './fixtures/readonly';
import cockpitFixture from './fixtures/cockpit-theme';
import noOptionsFixture from './fixtures/no-options';
import taggedFixture from './fixtures/tagged-cells';
import actionFixture from './fixtures/action-cells';

browserEnv();
test.afterEach(cleanup);

const options = {wrapper: wrappingComponent};

test.serial('renders cell text followed by a Late tag', t => {
  const {container} = render(
    <Table
      editable={false}
      columns={[{title: 'Completed on'}]}
      rows={[
        {
          fields: [{text: '12 Nov 2026', tags: [{status: 'late', label: 'Late'}]}]
        }
      ]}
    />,
    options
  );
  const cell = container.querySelector('tbody td');
  t.is(cell.textContent, '12 Nov 2026Late');
  const pills = cell.querySelectorAll('[data-name="content-tag-Late"]');
  t.is(pills.length, 1);
  t.true(cell.contains(pills[0]));
  t.is(pills[0].previousSibling.textContent, '12 Nov 2026');
  const warning = render(<Tag type="warning" label="Late" />);
  t.is(pills[0].outerHTML, warning.container.firstChild.outerHTML);
});

test.serial('renders tags-only cells and multiple tags in supplied order', t => {
  const tags = Object.freeze([
    Object.freeze({status: 'inProgress', label: 'In progress'}),
    Object.freeze({status: 'overdue', label: 'Overdue'}),
    Object.freeze({status: 'overdue', label: 'Overdue'})
  ]);
  const {container} = render(
    <Table
      editable={false}
      rows={[
        {
          fields: [
            {tags: [{status: 'assigned', label: 'Not started'}]},
            {tags},
            {tags: [{status: 'completed', label: 'Completed'}]}
          ]
        }
      ]}
    />,
    options
  );
  const cells = container.querySelectorAll('tbody td');
  t.is(cells[0].textContent, 'Not started');
  t.deepEqual(
    [...cells[1].querySelectorAll('[data-name^="content-tag-"]')].map(tag => tag.textContent),
    ['In progress', 'Overdue', 'Overdue']
  );
  t.is(cells[2].textContent, 'Completed');
});

test.serial('renders text-only cells with absent or empty tags', t => {
  const {container} = render(
    <Table
      editable={false}
      rows={[
        {
          fields: [{text: '12 Nov 2026'}, {text: '13 Nov 2026', tags: []}, {}]
        }
      ]}
    />,
    options
  );
  t.deepEqual(
    [...container.querySelectorAll('tbody td')].map(cell => cell.textContent),
    ['12 Nov 2026', '13 Nov 2026', '']
  );
  t.is(container.querySelectorAll('[data-name^="content-tag-"]').length, 0);
});

test.serial('rejects malformed rich-cell text, tags, status and labels', t => {
  const invalidFields = [
    {text: 42},
    {tags: 'Late'},
    {tags: [{status: 'late'}]},
    {tags: [{label: null}]},
    {tags: [{label: 42}]},
    {tags: [{status: 42, label: 'Late'}]},
    {tags: [{label: 'Valid first'}, {}]},
    {icon: 'draft', tags: [{}]}
  ];
  invalidFields.forEach(field => {
    PropTypes.resetWarningCache();
    t.throws(
      () => PropTypes.checkPropTypes(Table.propTypes, {rows: [{fields: [field]}]}, 'prop', 'Table'),
      {message: /Invalid prop `rows\[0\]\.fields\[0\]`/}
    );
  });
  PropTypes.resetWarningCache();
});

test.serial('updates repeated tags in consumer order and removes them on rerender', t => {
  const originalTags = Object.freeze([
    Object.freeze({status: 'late', label: 'Flag'}),
    Object.freeze({status: 'completed', label: 'Flag'}),
    Object.freeze({status: 'overdue', label: 'Past due'})
  ]);
  const field = Object.freeze({text: '12 Nov 2026', tags: originalTags});
  const fields = Object.freeze([field, 'Unchanged']);
  const rows = Object.freeze([Object.freeze({fields})]);
  const {container, rerender} = render(<Table editable={false} rows={rows} />, options);
  const assertPills = expected => {
    const pills = container.querySelectorAll('tbody td:first-child [data-name^="content-tag-"]');
    t.is(pills.length, expected.length);
    expected.forEach(([type, label], index) => {
      const tag = render(<Tag type={type} label={label} />);
      t.is(pills[index].outerHTML, tag.container.firstChild.outerHTML);
      tag.unmount();
    });
    t.is(container.querySelector('tbody td:last-child').textContent, 'Unchanged');
  };
  assertPills([
    ['warning', 'Flag'],
    ['success', 'Flag'],
    ['failure', 'Past due']
  ]);

  rerender(
    <Table
      editable={false}
      rows={[
        {
          fields: [{text: '13 Nov 2026', tags: [...originalTags].reverse()}, 'Unchanged']
        }
      ]}
    />
  );
  t.is(container.querySelector('tbody td').textContent, '13 Nov 2026Past dueFlagFlag');
  assertPills([
    ['failure', 'Past due'],
    ['success', 'Flag'],
    ['warning', 'Flag']
  ]);

  rerender(
    <Table
      editable={false}
      rows={[
        {
          fields: [{tags: [{status: 'inProgress', label: 'Flag'}]}, 'Unchanged']
        }
      ]}
    />
  );
  t.is(container.querySelector('tbody td').textContent, 'Flag');
  assertPills([['info', 'Flag']]);

  rerender(<Table editable={false} rows={[{fields: [{text: 'On time'}, 'Unchanged']}]} />);
  t.is(container.querySelector('tbody td').textContent, 'On time');
  assertPills([]);

  rerender(<Table editable={false} rows={[{fields: ['Plain again', 'Unchanged']}]} />);
  t.is(container.querySelector('tbody td').outerHTML, '<td>Plain again</td>');
  assertPills([]);
  t.deepEqual(originalTags, [
    {status: 'late', label: 'Flag'},
    {status: 'completed', label: 'Flag'},
    {status: 'overdue', label: 'Past due'}
  ]);
});

test.serial('accepts null optional fields and empty labels without dropping their tags', t => {
  const rows = [
    {
      fields: [
        {text: '', tags: []},
        {text: null, tags: null},
        {text: '', tags: [{status: null, label: ''}]},
        {tags: [{status: '', label: 'Sans statut'}]}
      ]
    }
  ];
  t.notThrows(() => PropTypes.checkPropTypes(Table.propTypes, {rows}, 'prop', 'Table'));
  const {container} = render(<Table editable={false} rows={rows} />, options);
  const cells = container.querySelectorAll('tbody td');
  t.deepEqual(
    [...cells].map(cell => cell.textContent),
    ['', '', '', 'Sans statut']
  );
  t.is(cells[0].querySelectorAll('[data-name^="content-tag-"]').length, 0);
  t.is(cells[1].querySelectorAll('[data-name^="content-tag-"]').length, 0);
  ['', 'Sans statut'].forEach((label, index) => {
    const expected = render(<Tag type="default" label={label} />);
    const pills = cells[index + 2].querySelectorAll('[data-name^="content-tag-"]');
    t.is(pills.length, 1);
    t.is(pills[0].outerHTML, expected.container.firstChild.outerHTML);
    expected.unmount();
  });
});

test.serial('delegates missing and unknown statuses to the default tag', t => {
  const labels = ['Sans statut', '<Needs review>'];
  const {container} = render(
    <Table
      editable={false}
      rows={[
        {
          fields: [
            {
              text: '<time>Today</time>',
              tags: [{label: labels[0]}, {status: 'consumer-status', label: labels[1]}]
            }
          ]
        }
      ]}
    />,
    options
  );
  const cell = container.querySelector('tbody td');
  t.is(cell.querySelector('time'), null);
  t.true(cell.textContent.startsWith('<time>Today</time>'));
  const pills = cell.querySelectorAll('[data-name^="content-tag-"]');
  labels.forEach((label, index) => {
    const expected = render(<Tag type="default" label={label} />);
    t.is(pills[index].outerHTML, expected.container.firstChild.outerHTML);
  });
});

test.serial('preserves plain strings, blank fields and legacy icon cells', t => {
  const {container} = render(
    <Table
      editable={false}
      rows={[
        {
          fields: [
            'Plain text',
            '',
            null,
            undefined,
            {icon: 'draft'},
            {icon: 'validate'},
            {icon: 'nostatus'},
            {
              icon: 'videosubtitle',
              title: 'Subtitles',
              text: 'Ignored text',
              tags: [{status: 'late', label: 'Ignored tag'}]
            }
          ]
        }
      ]}
    />,
    options
  );
  const cells = container.querySelectorAll('tbody td');
  t.is(cells[0].outerHTML, '<td>Plain text</td>');
  [1, 2, 3].forEach(index => t.is(cells[index].outerHTML, '<td></td>'));
  t.truthy(cells[4].querySelector('svg'));
  t.truthy(cells[5].querySelector('svg'));
  t.not(cells[4].innerHTML, cells[5].innerHTML);
  t.is(cells[6].textContent, '\u26A0️');
  t.truthy(cells[7].querySelector('svg'));
  t.is(cells[7].textContent, 'Subtitles');
  t.is(cells[7].querySelector('[data-name^="content-tag-"]'), null);

  const editable = render(<Table {...defaultFixture.props} />, options).container;
  const links = editable.querySelectorAll('tbody td:first-child a');
  t.is(links.length, 5);
  [...links].forEach(link => {
    t.is(link.getAttribute('href'), '#');
    t.truthy(link.querySelector('svg'));
  });
  const readonly = render(<Table {...readonlyFixture.props} />, options).container;
  t.true(readonly.querySelector('tbody tr').classList.contains(style.highlighted));
  t.is(readonly.querySelector('tbody a'), null);
  const cockpit = render(<Table {...cockpitFixture.props} />, options).container;
  t.is(
    cockpit.querySelector('tbody tr:nth-child(2) td').textContent,
    'Course: Cours avec la vidéo des fleurs'
  );
  t.true(cockpit.querySelector('tbody tr:nth-child(3)').classList.contains(style.highlighted));
});

test.serial('keeps rich cells aligned with edit links and legacy icons in both themes', t => {
  [undefined, 'cockpit'].forEach(theme => {
    [false, true].forEach(editable => {
      const {container, unmount} = render(
        <Table
          theme={theme}
          editable={editable}
          columns={[
            {title: 'Learner'},
            {title: 'Status'},
            {title: 'Subtitles'},
            {title: 'Completed on'}
          ]}
          rows={[
            {
              highlighted: true,
              editHref: '/learners/alice',
              fields: [
                'Alice',
                {
                  tags: [
                    {status: 'inProgress', label: 'In progress'},
                    {status: 'overdue', label: 'Overdue'}
                  ]
                },
                {icon: 'videosubtitle', title: 'French'},
                {
                  text: '12 Nov 2026',
                  tags: [{status: 'late', label: 'Late'}]
                }
              ]
            }
          ]}
        />,
        options
      );
      const row = container.querySelector('tbody tr');
      t.true(row.classList.contains(style.highlighted));
      t.is(row.cells.length, editable ? 5 : 4);
      t.is(container.querySelectorAll('thead th').length, editable ? 5 : 4);
      if (editable) {
        const editLink = row.cells[0].querySelector('a');
        t.is(editLink.getAttribute('href'), '/learners/alice');
        t.truthy(editLink.querySelector('svg'));
      } else {
        t.is(row.querySelector('a'), null);
      }
      const cells = [...row.cells].slice(editable ? 1 : 0);
      t.deepEqual(
        cells.map(cell => cell.textContent),
        ['Alice', 'In progressOverdue', 'French', '12 Nov 2026Late']
      );
      t.is(cells[0].outerHTML, '<td>Alice</td>');
      t.truthy(cells[2].querySelector('svg'));
      t.is(cells[2].querySelector('[data-name^="content-tag-"]'), null);
      t.is(row.querySelectorAll('[data-name^="content-tag-"]').length, 3);
      unmount();
    });
  });
});

test.serial('a column with onClick renders a sort button showing its order, and aria-sort', t => {
  const clicks = [];
  const {getByRole, container} = render(
    <Table
      editable={false}
      columns={[
        {title: 'Learner'},
        {
          title: 'Due date',
          order: 'asc',
          onClick: () => clicks.push('due')
        },
        {
          title: 'Completed on',
          order: 'desc',
          onClick: () => clicks.push('completed')
        },
        {
          title: 'Last reminder',
          order: '',
          onClick: () => clicks.push('reminder')
        }
      ]}
      rows={[{fields: ['Alice Martin · alice.martin', '20 Nov 2026', '-', '-']}]}
    />,
    options
  );
  const headers = container.querySelectorAll('th');
  t.is(headers[0].getAttribute('aria-sort'), null);
  t.is(headers[1].getAttribute('aria-sort'), 'ascending');
  t.is(headers[2].getAttribute('aria-sort'), 'descending');
  t.is(headers[3].getAttribute('aria-sort'), 'none');
  t.truthy(headers[1].textContent.includes('▲'));
  t.truthy(headers[2].textContent.includes('▼'));
  t.false(headers[3].textContent.includes('▲') || headers[3].textContent.includes('▼'));
  getByRole('button', {name: /Due date/}).click();
  getByRole('button', {name: /Completed on/}).click();
  t.deepEqual(clicks, ['due', 'completed']);
});

test.serial('a column with options keeps the existing menu and no sort button', t => {
  const {container, queryByRole} = render(
    <Table
      editable={false}
      columns={[
        {
          title: 'Name',
          options: [{title: 'Sort A -> Z', onChange: () => {}, selected: true}]
        }
      ]}
      rows={[{fields: ['Michel']}]}
    />,
    options
  );
  t.is(queryByRole('button', {name: /^Name/}), null);
  t.truthy(container.querySelector(`.${style.options}`));
});

test.serial(
  'action cells render discreet non-submit links with a pictogram and call only their own callback',
  t => {
    const calls = [];
    const view = render(
      <form
        onSubmit={event => {
          event.preventDefault();
          calls.push('submit');
        }}
      >
        <Table
          editable={false}
          columns={[{title: 'Name'}, {title: ''}]}
          rows={[
            {
              fields: [
                'Alice',
                {
                  action: {
                    label: 'Remove',
                    variant: 'danger',
                    onClick: () => calls.push('alice')
                  }
                }
              ]
            },
            {
              fields: [
                'Bob',
                {
                  action: {
                    label: 'Undo',
                    variant: 'neutral',
                    onClick: () => calls.push('bob')
                  }
                }
              ]
            }
          ]}
        />
      </form>,
      options
    );
    ['Remove', 'Undo'].forEach((name, index) => {
      const button = view.getByRole('button', {name});
      t.is(button.tagName, 'BUTTON');
      t.is(button.type, 'button');
      t.true(button.closest('td').classList.contains(style.actionCell));
      t.true(button.className.includes(index ? style.neutralAction : style.dangerAction));
      t.truthy(button.querySelector('svg'), `${name} shows its pictogram`);
      fireEvent.click(button);
    });
    t.deepEqual(calls, ['alice', 'bob']);
  }
);

test.serial('an action cell shows its state text before the action', t => {
  const calls = [];
  const view = render(
    <Table
      editable={false}
      columns={[{title: 'Name'}, {title: ''}]}
      rows={[
        {
          fields: [
            'Alice',
            {
              text: 'Removed in this edit',
              action: {label: 'Undo', variant: 'neutral', onClick: () => calls.push('undo')}
            }
          ]
        }
      ]}
    />,
    options
  );
  const cell = view.container.querySelector('tbody td:last-child');
  t.true(cell.classList.contains(style.actionCell));
  t.is(cell.textContent, 'Removed in this editUndo');
  t.true(view.getByText('Removed in this edit').className.includes(style.actionState));
  fireEvent.click(view.getByRole('button', {name: 'Undo'}));
  t.deepEqual(calls, ['undo']);
});

test.serial('action labels render as text and action cells coexist with legacy fields', t => {
  [false, true].forEach(editable => {
    const view = render(
      <Table
        editable={editable}
        columns={Array.from({length: 5}, () => ({title: ''}))}
        rows={[
          {
            editHref: '/edit',
            fields: [
              'Alice',
              '',
              {icon: 'draft'},
              {text: 'Today', tags: [{status: 'late', label: 'Late'}]},
              {
                action: {
                  label: '<b>Remove</b>',
                  variant: 'danger',
                  onClick: () => {}
                }
              }
            ]
          }
        ]}
      />,
      options
    );
    const row = view.container.querySelector('tbody tr');
    const cells = [...row.cells].slice(editable ? 1 : 0);
    t.deepEqual(
      cells.map(cell => cell.textContent),
      ['Alice', '', '', 'TodayLate', '<b>Remove</b>']
    );
    t.truthy(cells[2].querySelector('svg'));
    t.truthy(within(cells[3]).getByText('Late'));
    t.is(cells[4].querySelector('b'), null);
    t.is(row.querySelectorAll('a').length, editable ? 1 : 0);
    t.is(row.cells.length, editable ? 6 : 5);
    view.unmount();
  });
});

test.serial('action PropTypes require label callback and supported variant', t => {
  const valid = {label: 'Remove', variant: 'danger', onClick: () => {}};
  ['danger', 'neutral'].forEach(variant =>
    t.notThrows(() =>
      PropTypes.checkPropTypes(
        Table.propTypes,
        {rows: [{fields: [{action: {...valid, variant}}]}]},
        'prop',
        'Table'
      )
    )
  );
  [
    {...valid, label: 3},
    {...valid, onClick: undefined},
    {...valid, variant: 'primary'}
  ].forEach(action => {
    PropTypes.resetWarningCache();
    t.throws(
      () =>
        PropTypes.checkPropTypes(Table.propTypes, {rows: [{fields: [{action}]}]}, 'prop', 'Table'),
      {message: /Invalid prop/}
    );
  });
  PropTypes.resetWarningCache();
});

test.serial(
  'a reused cell switches actions variants and legacy content on controlled updates',
  t => {
    const calls = [];
    const firstAction = Object.freeze({
      label: 'Remove',
      variant: 'danger',
      onClick: () => calls.push('remove')
    });
    const table = field => (
      <Table
        editable={false}
        columns={[{title: 'Learner action'}]}
        rows={[{fields: Object.freeze([field])}]}
      />
    );
    const view = render(table(Object.freeze({action: firstAction})), options);
    fireEvent.click(view.getByRole('button', {name: 'Remove'}));
    view.rerender(
      table({
        action: {
          label: 'Undo',
          variant: 'neutral',
          onClick: () => calls.push('undo')
        },
        text: 'Removed in this edit',
        tags: [{label: 'Hidden tag', status: 'removed'}]
      })
    );
    t.is(view.queryByRole('button', {name: 'Remove'}), null);
    t.truthy(view.getByText('Removed in this edit'), 'the state shows next to the action');
    t.is(view.queryByText('Hidden tag'), null);
    const undo = view.getByRole('button', {name: 'Undo'});
    t.true(undo.className.includes(style.neutralAction));
    fireEvent.click(undo);
    view.rerender(
      table({
        text: 'Removed learner',
        tags: [{status: 'removed', label: 'Removed'}]
      })
    );
    t.is(view.queryByRole('button'), null);
    t.is(view.container.querySelector('tbody td').textContent, 'Removed learnerRemoved');
    t.is(view.container.querySelector(`.${style.actionCell}`), null);
    view.rerender(table({icon: 'draft', action: firstAction}));
    t.truthy(view.container.querySelector('tbody td svg'));
    t.is(view.queryByRole('button'), null);
    t.is(view.container.querySelector(`.${style.actionCell}`), null);
    view.rerender(table(''));
    t.is(view.container.querySelector('tbody td').textContent, '');
    t.is(view.container.querySelector('tbody td svg'), null);
    view.rerender(table({action: firstAction}));
    t.true(view.getByRole('button', {name: 'Remove'}).className.includes(style.dangerAction));
    fireEvent.click(view.getByRole('button', {name: 'Remove'}));
    t.deepEqual(calls, ['remove', 'undo', 'remove']);
  }
);

test.serial(
  'action fields still reject malformed legacy metadata and missing action members',
  t => {
    const action = {label: 'Remove', variant: 'danger', onClick: () => {}};
    const invalidFields = [
      {action, text: 42},
      {action, icon: 42},
      {action, tags: 'Late'},
      {action, tags: [{status: 'late'}]},
      {action, tags: [{label: 42}]},
      {action: {...action, label: undefined}},
      {action: {...action, onClick: true}},
      {action: {...action, variant: undefined}}
    ];
    invalidFields.forEach(field => {
      PropTypes.resetWarningCache();
      t.throws(
        () =>
          PropTypes.checkPropTypes(Table.propTypes, {rows: [{fields: [field]}]}, 'prop', 'Table'),
        {message: /Invalid prop `rows\[0\]\.fields\[0\]`/}
      );
    });
    PropTypes.resetWarningCache();
  }
);

test.serial('legacy table fixtures retain their cells controls and themes', t => {
  [defaultFixture, noOptionsFixture, readonlyFixture, cockpitFixture, taggedFixture].forEach(
    ({props}) => {
      const view = render(<Table {...props} />, options);
      t.is(view.container.querySelectorAll('tbody tr').length, props.rows.length);
      t.is(
        view.container.querySelectorAll('thead th').length,
        props.columns.length + (props.editable === false ? 0 : 1)
      );
      props.rows.forEach((row, index) => {
        const tr = view.container.querySelectorAll('tbody tr')[index];
        t.is(tr.cells.length, row.fields.length + (props.editable === false ? 0 : 1));
        t.is(tr.querySelectorAll('a').length, props.editable === false ? 0 : 1);
        t.is(tr.classList.contains(style.highlighted), Boolean(row.highlighted));
        row.fields.forEach((field, fieldIndex) => {
          const cell = tr.cells[fieldIndex + (props.editable === false ? 0 : 1)];
          if (typeof field === 'string') t.is(cell.textContent, field);
          else if (field && field.icon)
            t.truthy(cell.querySelector('svg') || cell.querySelector('span'));
          else if (field) {
            t.true(cell.textContent.includes(field.text || ''));
            (field.tags || []).forEach(tag => t.truthy(within(cell).getByText(tag.label)));
          }
        });
      });
      props.columns.forEach(column => t.truthy(view.getAllByText(column.title).length));
      t.truthy(
        view.container.querySelector(
          props.theme === 'cockpit' ? `.${style.cockpit}` : `.${style.wrapper}`
        )
      );
      t.is(view.container.querySelector(`.${style.actionCell}`), null);
      t.is(view.queryByRole('button', {name: /Remove|Undo/}), null);
      view.unmount();
    }
  );
});

test.serial(
  'legacy tables without selection retain columns menus edit links actions and themes',
  t => {
    [
      defaultFixture,
      readonlyFixture,
      cockpitFixture,
      noOptionsFixture,
      taggedFixture,
      actionFixture
    ].forEach(({props}) => {
      const view = render(<Table {...props} />, options);
      const extra = props.editable === false ? 0 : 1;
      t.is(view.container.querySelectorAll('thead th').length, props.columns.length + extra);
      [...view.container.querySelectorAll('tbody tr')].forEach((row, index) => {
        t.is(row.cells.length, props.rows[index].fields.length + extra);
        t.is(row.querySelectorAll('a').length, extra);
      });
      t.is(view.container.querySelector('[data-name="checkbox-input"]'), null);
      t.is(
        view.container.querySelectorAll(`.${style.options}`).length,
        props.columns.filter(column => column.options && column.options.length).length
      );
      t.is(
        view.container.querySelectorAll(`.${style.actionCell}`).length,
        props.rows.reduce(
          (count, row) => count + row.fields.filter(field => field && field.action).length,
          0
        )
      );
      t.true(
        view.container.firstChild.classList.contains(
          props.theme === 'cockpit' ? style.cockpit : style.wrapper
        )
      );
      view.unmount();
    });
  }
);

const selectDescriptor = (ariaLabel, checked = false, onChange = () => {}) => ({
  ariaLabel,
  checked,
  onChange
});

test.serial(
  'selection introduced on a later row updates callbacks and removes its column cleanly',
  t => {
    const calls = [];
    const props = {
      editable: false,
      columns: [{title: 'Name'}],
      rows: [{fields: ['Alice']}, {fields: ['Bob']}]
    };
    const view = render(<Table {...props} />, options);
    const rowCells = () =>
      [...view.container.querySelectorAll('tbody tr')].map(row => row.cells.length);
    t.deepEqual(rowCells(), [1, 1]);
    view.rerender(
      <Table
        {...props}
        rows={[
          props.rows[0],
          {
            ...props.rows[1],
            select: selectDescriptor('Select Bob', false, value => calls.push(['old', value]))
          }
        ]}
      />
    );
    t.deepEqual(rowCells(), [2, 2]);
    t.is(view.container.querySelectorAll('th').length, 2);
    t.is(view.container.querySelector('th').textContent, '');
    t.is(view.container.querySelector('tbody td').childElementCount, 0);
    fireEvent.click(
      within(view.container).getByRole('checkbox', {name: 'Select Bob'}).closest('label')
    );
    t.deepEqual(calls, [['old', true]]);

    view.rerender(
      <Table
        {...props}
        selectAll={{...selectDescriptor('Disabled page', true), disabled: true}}
        rows={[
          props.rows[0],
          {
            ...props.rows[1],
            select: selectDescriptor('Renamed Bob', true, value => calls.push(['new', value]))
          }
        ]}
      />
    );
    t.is(within(view.container).queryByRole('checkbox', {name: 'Select Bob'}), null);
    const row = within(view.container).getByRole('checkbox', {name: 'Renamed Bob'});
    t.true(row.checked);
    t.false(row.disabled);
    const header = within(view.container).getByRole('checkbox', {name: 'Disabled page'});
    t.true(header.checked);
    t.true(header.disabled);
    header.click();
    fireEvent.click(row.closest('label'));
    t.deepEqual(calls, [
      ['old', true],
      ['new', false]
    ]);
    view.rerender(<Table {...props} />);
    t.deepEqual(rowCells(), [1, 1]);
    t.is(view.container.querySelectorAll('th').length, 1);
    t.is(view.container.querySelector('[data-name="checkbox-input"]'), null);
    t.truthy(within(view.container).getByRole('checkbox', {name: 'Name'}));
    t.deepEqual(
      [...view.container.querySelectorAll('tbody td')].map(cell => cell.textContent),
      ['Alice', 'Bob']
    );
  }
);

test.serial(
  'table preserves independently supplied header state on empty and fully selected pages',
  t => {
    const calls = [];
    const props = {
      editable: false,
      columns: [{title: 'Name'}],
      selectAll: selectDescriptor('Page', false, (...args) => calls.push(args)),
      rows: [{fields: ['Alice'], select: selectDescriptor('Alice', true)}]
    };
    const view = render(<Table {...props} />, options);
    t.false(within(view.container).getByRole('checkbox', {name: 'Page'}).checked);
    t.true(within(view.container).getByRole('checkbox', {name: 'Alice'}).checked);
    view.rerender(<Table {...props} rows={[]} selectAll={{...props.selectAll, checked: true}} />);
    const header = within(view.container).getByRole('checkbox', {name: 'Page'});
    t.true(header.checked);
    t.false(header.disabled);
    t.is(view.container.querySelectorAll('thead th').length, 2);
    t.is(view.container.querySelectorAll('tbody tr').length, 0);
    fireEvent.click(header);
    t.deepEqual(calls, [[false]]);
    t.true(header.checked);
  }
);

test.serial('selection prepends named controlled header and row checkboxes', t => {
  [false, true].forEach(editable => {
    const calls = [];
    const props = {
      editable,
      columns: [{title: 'Name'}],
      selectAll: selectDescriptor('Select page', false, value => calls.push(['page', value])),
      rows: [
        {
          fields: ['Alice'],
          editHref: '/alice',
          select: selectDescriptor('Alice', true, value => calls.push(['alice', value]))
        }
      ]
    };
    const view = render(<Table {...props} />, options);
    const region = within(view.container);
    const header = region.getByRole('checkbox', {name: 'Select page'});
    const row = region.getByRole('checkbox', {name: 'Alice'});
    t.false(header.checked);
    t.true(row.checked);
    t.is(header.closest('th').cellIndex, 0);
    t.is(row.closest('td').cellIndex, 0);
    t.is(view.container.querySelector('tbody tr').cells[editable ? 2 : 1].textContent, 'Alice');
    if (editable) t.truthy(view.container.querySelector('tbody tr').cells[1].querySelector('a'));
    fireEvent.click(header);
    fireEvent.click(row);
    t.deepEqual(calls, [
      ['page', true],
      ['alice', false]
    ]);
    t.false(header.checked);
    t.true(row.checked);
    view.rerender(
      <Table
        {...props}
        selectAll={{...props.selectAll, checked: true}}
        rows={[{...props.rows[0], select: {...props.rows[0].select, checked: false}}]}
      />
    );
    t.true(header.checked);
    t.false(row.checked);
    view.unmount();
  });
});

test.serial(
  'selection cells stay aligned when only selectAll or only row.select is supplied',
  t => {
    [undefined, 'cockpit'].forEach(theme => {
      ['header', 'row', 'neither'].forEach(mode => {
        const view = render(
          <Table
            theme={theme}
            editable={false}
            columns={[{title: 'Name'}]}
            selectAll={mode === 'header' ? selectDescriptor('Page') : undefined}
            rows={[
              {fields: ['Alice'], select: mode === 'row' ? selectDescriptor('Alice') : undefined},
              {fields: ['Bob']}
            ]}
          />,
          options
        );
        const count = mode === 'neither' ? 1 : 2;
        t.is(view.container.querySelectorAll('th').length, count);
        [...view.container.querySelectorAll('tbody tr')].forEach(row =>
          t.is(row.cells.length, count)
        );
        if (mode !== 'neither') {
          t.true(view.container.querySelector('th').classList.contains(style.selectionCell));
          t.is(view.container.querySelector('tbody tr:last-child td').textContent, '');
        }
        view.unmount();
      });
    });
  }
);

test.serial('disabled selection cannot toggle and has a distinct disabled style', t => {
  const calls = [];
  const view = render(
    <Table
      editable={false}
      rows={[
        {
          fields: ['Deleted'],
          select: {
            ...selectDescriptor('Deleted', false, value => calls.push(value)),
            disabled: true
          }
        }
      ]}
    />,
    options
  );
  const input = within(view.container).getByRole('checkbox', {name: 'Deleted'});
  t.true(input.disabled);
  input.click();
  fireEvent.click(input.closest('label').querySelector('[data-name="checkbox-label"]'));
  t.deepEqual(calls, []);
  const css = postcss.parse(
    readFileSync(path.join(__dirname, '../../../atom/input-checkbox/style.css'), 'utf8')
  );
  const rule = css.nodes.find(node => node.selector === '.checkbox:disabled + .label');
  t.truthy(rule.nodes.find(node => node.prop === 'opacity' && node.value === '0.4'));
});

test.serial('selection layout centres the checkbox without inheriting 42px line-height', t => {
  const view = render(
    <Table
      columns={[{title: 'Name'}]}
      selectAll={selectDescriptor('Page')}
      rows={[{fields: ['Alice'], select: selectDescriptor('Alice')}]}
    />,
    options
  );
  [...view.container.querySelectorAll('th:first-child, td:first-child')].forEach(cell => {
    t.true(cell.classList.contains(style.selectionCell));
    t.truthy(cell.querySelector(`.${style.selectionControl}`));
    const input = cell.querySelector('input');
    t.true(input.closest('label').classList.contains(checkboxStyle.hiddenTitle));
    t.true(
      input.closest('label').querySelector('span').className.includes(checkboxStyle.accessibleTitle)
    );
  });
  const css = postcss.parse(readFileSync(path.join(__dirname, '../style.css'), 'utf8'));
  const rules = css.nodes.filter(node => node.type === 'rule');
  const cells = rules.find(
    rule =>
      rule.selector.includes('.table thead th.selectionCell') &&
      rule.selector.includes('.table tbody td.selectionCell')
  );
  t.truthy(cells);
  const declaration = (rule, prop, value) =>
    t.true(
      rule.nodes.some(node => node.prop === prop && node.value === value),
      `${prop}: ${value}`
    );
  [
    ['text-align', 'center'],
    ['vertical-align', 'middle'],
    ['line-height', 'normal'],
    ['width', '48px'],
    ['min-width', '48px'],
    ['padding', '8px']
  ].forEach(([prop, value]) => declaration(cells, prop, value));
  t.true(
    rules.indexOf(cells) > rules.findIndex(rule => rule.selector === '.cockpit tr td:first-child')
  );
  const control = rules.find(rule => rule.selector === '.selectionControl');
  [
    ['display', 'flex'],
    ['align-items', 'center'],
    ['justify-content', 'center']
  ].forEach(([prop, value]) => declaration(control, prop, value));
  const atomCss = readFileSync(
    path.join(__dirname, '../../../atom/input-checkbox/style.css'),
    'utf8'
  );
  t.regex(atomCss, /\.hiddenTitle input\s*\{[^}]*display:\s*block/);
  t.regex(
    atomCss,
    /composes: visuallyHidden from "\.\.\/\.\.\/molecule\/wizard-summary\/style.css"/
  );
  t.regex(atomCss, /\.hiddenTitle input:focus-visible \+ \.label\s*\{[^}]*outline:/);
});

test.serial('selection descriptors validate required fields and optional absence', t => {
  const valid = selectDescriptor('Learner');
  [
    {},
    {...valid, checked: undefined},
    {...valid, checked: 'yes'},
    {...valid, ariaLabel: undefined},
    {...valid, ariaLabel: 4},
    {...valid, onChange: undefined},
    {...valid, disabled: 'yes'}
  ].forEach(descriptor => {
    ['selectAll', 'row'].forEach(location => {
      PropTypes.resetWarningCache();
      t.throws(
        () =>
          PropTypes.checkPropTypes(
            Table.propTypes,
            location === 'row' ? {rows: [{select: descriptor}]} : {selectAll: descriptor},
            'prop',
            'Table'
          ),
        {message: /select/}
      );
    });
  });
  PropTypes.resetWarningCache();
  t.notThrows(() => PropTypes.checkPropTypes(Table.propTypes, {}, 'prop', 'Table'));
  t.notThrows(() =>
    PropTypes.checkPropTypes(
      Table.propTypes,
      {selectAll: valid, rows: [{select: valid}]},
      'prop',
      'Table'
    )
  );
});
