import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {render, cleanup} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Tag from '../../../atom/tag';
import Table from '..';
import style from '../style.css';
import defaultFixture from './fixtures/default';
import readonlyFixture from './fixtures/readonly';
import cockpitFixture from './fixtures/cockpit-theme';

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
      rows={[{fields: [{text: '13 Nov 2026', tags: [...originalTags].reverse()}, 'Unchanged']}]}
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
      rows={[{fields: [{tags: [{status: 'inProgress', label: 'Flag'}]}, 'Unchanged']}]}
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
                {text: '12 Nov 2026', tags: [{status: 'late', label: 'Late'}]}
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
        {title: 'Due date', order: 'asc', onClick: () => clicks.push('due')},
        {title: 'Completed on', order: 'desc', onClick: () => clicks.push('completed')},
        {title: 'Last reminder', order: '', onClick: () => clicks.push('reminder')}
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
