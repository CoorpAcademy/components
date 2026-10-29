import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import BrandTable from '..';
import assignmentLearners from './fixtures/assignment-learners';

browserEnv();
test.afterEach(cleanup);

test.serial(
  'renders tagged learner cells with search, pagination and sortable column headers',
  t => {
    const clicks = [];
    const props = {
      ...assignmentLearners.props,
      columns: assignmentLearners.props.columns.map(column => ({
        ...column,
        onClick: () => clicks.push(column.title)
      }))
    };
    const {container} = render(<BrandTable {...props} />, {
      wrapper: wrappingComponent
    });
    const view = within(container);
    t.truthy(view.getByRole('heading', {name: 'Learners'}));
    t.deepEqual(
      [...container.querySelectorAll('thead th')].map(th => th.getAttribute('aria-sort')),
      ['none', 'none', 'none', 'ascending', 'none', 'none']
    );
    t.deepEqual(
      [...container.querySelectorAll('thead th button')].map(button => button.textContent),
      ['Learner', 'Status', 'Progress', 'Due date▲', 'Completed on', 'Last reminder']
    );
    const rows = container.querySelectorAll('tbody tr');
    t.is(rows.length, 4);
    t.deepEqual(
      [...rows].map(row => row.cells[0].textContent),
      [
        'Alice Martin · alice.martin',
        'Ben Dupont · ben.dupont',
        'Carla Lopez · carla.lopez',
        'David Chen · david.chen'
      ]
    );
    const tagsIn = cell =>
      [...cell.querySelectorAll('[data-name^="content-tag-"]')].map(tag => tag.textContent);
    t.deepEqual(
      [...rows].map(row => tagsIn(row.cells[1])),
      [['Not started'], ['In progress', 'Overdue'], ['Completed'], ['Completed']]
    );
    t.deepEqual(
      [...rows].map(row => row.cells[2].textContent),
      ['0 / 3 modules', '1 / 3 modules', '3 / 3 modules', '3 / 3 modules']
    );
    t.deepEqual(
      [...rows].map(row => row.cells[4].textContent),
      ['-', '-', '9 Nov 2026', '12 Nov 2026Late']
    );
    t.deepEqual(tagsIn(rows[3].cells[4]), ['Late']);
    t.deepEqual(tagsIn(rows[2].cells[4]), []);
    t.is(rows[3].cells[3].textContent, '10 Nov 2026');
    t.is(view.getByPlaceholderText('Name, login…').value, '');
    t.truthy(view.getByText('1-4 on 24'));
    t.truthy(container.querySelector('a[href="#learners-page-2"]'));
    t.truthy(container.querySelector('a[href="#learners-page-1"]'));
    fireEvent.click(view.getByRole('button', {name: /^Due date/}));
    fireEvent.click(view.getByRole('button', {name: /^Completed on/}));
    t.deepEqual(clicks, ['Due date', 'Completed on']);
    t.is(rows[0].cells[0].textContent, 'Alice Martin · alice.martin');
  }
);

test.serial('replaces tagged learner rows with consumer search results and an empty result', t => {
  const changes = [];
  const props = {
    ...assignmentLearners.props,
    search: {...assignmentLearners.props.search, onChange: value => changes.push(value)}
  };
  const {container, rerender} = render(<BrandTable {...props} />, {
    wrapper: wrappingComponent
  });
  const view = within(container);
  fireEvent.input(view.getByPlaceholderText('Name, login…'), {target: {value: 'David'}});
  t.deepEqual(changes, ['David']);
  t.is(container.querySelectorAll('tbody tr').length, 4);
  t.truthy(view.getByText('1-4 on 24'));

  const filteredProps = {
    ...props,
    search: {...props.search, value: 'David'},
    rows: [assignmentLearners.props.rows[3]],
    pagination: {...props.pagination, value: '1-1 on 7'}
  };
  rerender(<BrandTable {...filteredProps} />);
  const rows = container.querySelectorAll('tbody tr');
  t.is(rows.length, 1);
  t.is(rows[0].cells[0].textContent, 'David Chen · david.chen');
  t.is(rows[0].cells[1].textContent, 'Completed');
  t.is(rows[0].cells[4].textContent, '12 Nov 2026Late');
  t.deepEqual(
    [...container.querySelectorAll('[data-name^="content-tag-"]')].map(tag => tag.textContent),
    ['Completed', 'Late']
  );
  t.is(view.getByPlaceholderText('Name, login…').value, 'David');
  t.truthy(view.getByText('1-1 on 7'));

  rerender(<BrandTable {...filteredProps} rows={[]} />);
  t.truthy(view.getByText('There are no learners to display.'));
  t.is(container.querySelector('table'), null);
  t.is(container.querySelector('[data-name^="content-tag-"]'), null);
  t.is(view.getByPlaceholderText('Name, login…').value, 'David');
  t.truthy(view.getByText('1-1 on 7'));

  rerender(<BrandTable {...props} />);
  t.is(view.getByPlaceholderText('Name, login…').value, '');
  t.is(container.querySelectorAll('tbody tr').length, 4);
  t.is(container.querySelectorAll('[data-name^="content-tag-"]').length, 6);
  t.truthy(view.getByText('1-4 on 24'));
});
