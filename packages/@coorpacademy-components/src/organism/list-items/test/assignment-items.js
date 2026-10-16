import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import ListItem from '../../list-item';
import ListItems from '..';
import certification from './fixtures/published-certification';

browserEnv();
test.afterEach(cleanup);

const items = ['one', 'two'].map((id, index) => ({
  id,
  title: `Assignment ${id}`,
  status: index === 0 ? 'active' : 'disabled',
  statusLabel: index === 0 ? 'Active' : 'Disabled',
  audienceSummary: 'Everyone',
  dateRange: '01 Oct 2026 – 31 Oct 2026 GMT',
  completion: index === 0 ? 25 : 100,
  sync: {state: index === 0 ? 'running' : 'done', label: index === 0 ? 'Syncing…' : 'Up to date'}
}));

const props = {title: 'Assignments', content: {type: 'list', itemType: 'assignment', items}};
const options = {wrapper: wrappingComponent};

test.serial('renders assignment items inside the content list', t => {
  const {container} = render(<ListItems {...props} />, options);
  const list = container.querySelector('[data-name="content-list"]');
  t.is(list.querySelectorAll(':scope > li').length, 2);
  t.is(list.querySelectorAll('li li').length, 0);
  items.forEach((item, index) => {
    const row = list.querySelector(`[data-name="list-item-${index}"]`);
    t.truthy(within(row).getByText(item.title));
    t.truthy(within(row).getByText(item.statusLabel));
    t.truthy(within(row).getByText(item.sync.label));
    t.is(within(row).getByRole('progressbar').getAttribute('aria-valuenow'), `${item.completion}`);
  });
});

test.serial('routes assignment action callbacks and disabled state through ListItems', t => {
  const calls = [0, 0, 0];
  const actions = ['Edit', 'Delete'].map((label, index) => ({
    label,
    disabled: index === 1,
    danger: index === 1,
    onClick: () => calls[index]++
  }));
  const content = {
    ...props.content,
    items: [
      {...items[0], actions},
      {...items[1], actions: [{label: 'Edit second', onClick: () => calls[2]++}]}
    ]
  };
  const {getByRole} = render(<ListItems {...props} content={content} />, options);
  fireEvent.click(getByRole('button', {name: 'Edit'}));
  const disabled = getByRole('button', {name: 'Delete'});
  t.true(disabled.disabled);
  t.is(disabled.tagName, 'BUTTON');
  fireEvent.click(disabled);
  t.deepEqual(calls, [1, 0, 0]);
  fireEvent.click(getByRole('button', {name: 'Edit second'}));
  t.deepEqual(calls, [1, 0, 1]);
});

test.serial(
  'renders assignment rows without certification drag handling even when isDraggable is set',
  t => {
    let drops = 0;
    const content = {...props.content, isDraggable: true, onDrop: () => drops++};
    const {container, getAllByRole} = render(<ListItems {...props} content={content} />, options);
    t.is(getAllByRole('progressbar').length, 2);
    t.is(container.querySelectorAll('[draggable="true"]').length, 0);
    t.is(container.querySelectorAll('[data-name="content-list"] > li').length, 2);
    t.is(drops, 0);
  }
);

test.serial('keeps certification rows on the existing renderer', t => {
  const item = certification.props.content.items[0];
  const content = {...certification.props.content, items: [item]};
  const actual = render(<ListItems title="Certifications" content={content} />, options);
  const expected = render(
    <ListItem {...item} order={null} contentType="certification" data-name="list-item-0" />,
    options
  );
  t.is(
    actual.container.querySelector('[data-name="list-item-0"]').outerHTML,
    expected.container.firstChild.outerHTML
  );
  t.is(actual.container.querySelector('[data-name="assignment-title"]'), null);
});

test.serial('renders an empty labelled assignment list without controls', t => {
  const view = render(
    <ListItems
      {...props}
      aria-label="Assignment results"
      content={{...props.content, items: [], isDraggable: true}}
    />,
    options
  );
  const list = view.getByRole('list', {name: 'Assignment results'});
  t.is(within(list).queryAllByRole('listitem').length, 0);
  t.is(view.queryAllByRole('progressbar').length, 0);
  t.is(view.queryAllByRole('button').length, 0);
});

test.serial('keeps actions attached to their assignment after reorder and removal', t => {
  const calls = [0, 0];
  const sharedLabels = items.map((item, index) => ({
    ...item,
    title: 'Shared assignment title',
    actions: [{label: 'Manage', onClick: () => calls[index]++}]
  }));
  const view = render(
    <ListItems {...props} content={{...props.content, items: sharedLabels}} />,
    options
  );
  const rows = () => within(view.getByRole('list')).getAllByRole('listitem');
  fireEvent.click(within(rows()[0]).getByRole('button', {name: 'Manage'}));
  t.deepEqual(calls, [1, 0]);
  view.rerender(
    <ListItems {...props} content={{...props.content, items: [sharedLabels[1], sharedLabels[0]]}} />
  );
  t.truthy(within(rows()[0]).getByText('Disabled'));
  t.is(within(rows()[0]).getByRole('progressbar').getAttribute('aria-valuenow'), '100');
  t.truthy(within(rows()[1]).getByText('Active'));
  t.is(within(rows()[1]).getByRole('progressbar').getAttribute('aria-valuenow'), '25');
  fireEvent.click(within(rows()[0]).getByRole('button', {name: 'Manage'}));
  fireEvent.click(within(rows()[1]).getByRole('button', {name: 'Manage'}));
  t.deepEqual(calls, [2, 1]);
  view.rerender(<ListItems {...props} content={{...props.content, items: [sharedLabels[1]]}} />);
  t.is(rows().length, 1);
  t.is(view.getAllByRole('button', {name: 'Manage'}).length, 1);
  t.is(view.queryByText('Active'), null);
  fireEvent.click(view.getByRole('button', {name: 'Manage'}));
  t.deepEqual(calls, [2, 2]);
});

test.serial('switches between assignment rows and the supplied empty result', t => {
  let creates = 0;
  const emptyResult = {
    title: 'No assignments',
    description: 'Choose a different filter',
    button: {label: 'Create assignment', onClick: () => creates++}
  };
  const content = {...props.content, emptyResult};
  const view = render(<ListItems {...props} content={content} />, options);
  view.rerender(<ListItems {...props} content={{...content, items: []}} />);
  t.truthy(view.getByText(emptyResult.title));
  t.truthy(view.getByText(emptyResult.description));
  t.is(view.queryAllByRole('progressbar').length, 0);
  t.is(view.queryByRole('list'), null);
  fireEvent.click(view.getByRole('button', {name: 'Create assignment'}));
  t.is(creates, 1);
  view.rerender(<ListItems {...props} content={{...content, items: [items[0]]}} />);
  t.is(view.queryByText(emptyResult.title), null);
  t.is(view.queryByRole('button', {name: 'Create assignment'}), null);
  t.is(view.getAllByRole('listitem').length, 1);
  t.truthy(view.getByRole('progressbar', {name: items[0].title}));
});
