import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import ListItem from '../../list-item';
import AssignmentRow from '../../../molecule/assignment-row';
import ListItems from '..';
import certification from './fixtures/published-certification';
import assignments from './fixtures/assignments';

browserEnv();
test.afterEach(cleanup);

const options = {wrapper: wrappingComponent};
const {items} = assignments.props.content;

test.serial('renders each assignment as an AssignmentRow inside the content list', t => {
  const {container} = render(<ListItems {...assignments.props} />, options);
  const list = container.querySelector('[data-name="content-list"]');
  t.is(list.querySelectorAll(':scope > li').length, items.length);
  items.forEach((item, index) => {
    const expected = render(<AssignmentRow {...item} data-name={`list-item-${index}`} />, options);
    t.is(
      list.querySelector(`[data-name="list-item-${index}"]`).outerHTML,
      expected.container.firstChild.outerHTML
    );
    expected.unmount();
  });
});

test.serial('a click on a row calls that row onClick only', t => {
  const calls = items.map(() => 0);
  const content = {
    ...assignments.props.content,
    items: items.map((item, index) => ({...item, onClick: () => calls[index]++}))
  };
  const {container} = render(<ListItems {...assignments.props} content={content} />, options);
  fireEvent.click(
    within(container.querySelector('[data-name="list-item-1"]')).getByText(items[1].title)
  );
  t.deepEqual(
    calls,
    items.map((_, index) => (index === 1 ? 1 : 0))
  );
});

test.serial('assignment rows are never draggable, even when isDraggable is set', t => {
  const content = {...assignments.props.content, isDraggable: true, onDrop: () => {}};
  const {container} = render(<ListItems {...assignments.props} content={content} />, options);
  t.is(container.querySelectorAll('[draggable="true"]').length, 0);
  t.is(container.querySelectorAll('[data-name="content-list"] > li').length, items.length);
});

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
});
