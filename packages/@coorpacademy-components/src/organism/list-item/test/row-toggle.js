import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import ListItem from '..';

browserEnv();
test.afterEach.always(cleanup);

const row = (checkbox, props = {}) => {
  const view = render(
    <ListItem {...props} title="Fire safety" data-name="list-item-0" checkbox={checkbox} />,
    {wrapper: wrappingComponent}
  );
  return {view, item: view.container.querySelector('[data-name="list-item-0"]')};
};

test.serial('a click anywhere on a checkable row toggles its checkbox', t => {
  const calls = [];
  const {item, view} = row({checked: false, onChange: value => calls.push(value)});
  fireEvent.click(view.getByText('Fire safety'));
  t.deepEqual(calls, [true]);
  cleanup();
  const checked = row({checked: true, onChange: value => calls.push(value)});
  fireEvent.click(checked.item);
  t.deepEqual(calls, [true, false]);
  t.truthy(item);
});

test.serial('a click on the checkbox itself toggles once, not twice', t => {
  const calls = [];
  const {view} = row({checked: false, onChange: value => calls.push(value)});
  fireEvent.click(view.container.querySelector('input[type="checkbox"]'));
  t.deepEqual(calls, [true]);
});

test.serial(
  'a disabled checkbox, a disabled row or a row with its own onClick is left alone',
  t => {
    const calls = [];
    const onChange = value => calls.push(value);
    fireEvent.click(row({checked: false, disabled: true, onChange}).item);
    cleanup();
    fireEvent.click(row({checked: false, onChange}, {disabled: true}).item);
    cleanup();
    const clicks = [];
    fireEvent.click(row({checked: false, onChange}, {onClick: () => clicks.push('row')}).item);
    t.deepEqual(calls, []);
    t.deepEqual(clicks, ['row']);
  }
);
