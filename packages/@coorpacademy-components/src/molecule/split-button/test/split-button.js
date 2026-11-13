import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import SplitButton from '..';
import fixture from './fixtures/default';

browserEnv();
test.afterEach.always(cleanup);

test.serial(
  'keyboard navigation opens the menu, wraps and moves to the first and last option',
  t => {
    const {getByRole, getAllByRole, queryByRole} = render(<SplitButton {...fixture.props} />, {
      wrapper: wrappingComponent
    });
    const trigger = getByRole('button', {name: 'Choose export format'});
    trigger.focus();
    fireEvent.keyDown(trigger, {key: 'ArrowDown'});
    const items = getAllByRole('menuitem');
    t.is(document.activeElement, items[0]);
    fireEvent.keyDown(document.activeElement, {key: 'ArrowUp'});
    t.is(document.activeElement, items[2]);
    fireEvent.keyDown(document.activeElement, {key: 'ArrowUp'});
    t.is(document.activeElement, items[1]);
    fireEvent.keyDown(document.activeElement, {key: 'Home'});
    t.is(document.activeElement, items[0]);
    fireEvent.keyDown(document.activeElement, {key: 'End'});
    t.is(document.activeElement, items[2]);
    fireEvent.keyDown(document.activeElement, {key: 'ArrowDown'});
    t.is(document.activeElement, items[0]);
    fireEvent.keyDown(document.activeElement, {key: 'Tab'});
    t.is(document.activeElement, items[0]);
    fireEvent.keyDown(trigger, {key: 'ArrowDown'});
    t.truthy(queryByRole('menu'));
    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    t.is(queryByRole('menu'), null);
    t.is(document.activeElement, trigger);
  }
);

test.serial('keeps the menu open for internal focus and closes on focus or touch outside', t => {
  const {getByRole, queryByRole} = render(<SplitButton {...fixture.props} />, {
    wrapper: wrappingComponent
  });
  const trigger = getByRole('button', {name: 'Choose export format'});
  fireEvent.click(trigger);
  const option = getByRole('menuitem', {name: 'Export CSV'});
  fireEvent.mouseDown(option);
  t.truthy(queryByRole('menu'));
  fireEvent.blur(trigger, {relatedTarget: option});
  t.truthy(queryByRole('menu'));
  fireEvent.blur(option, {relatedTarget: document.body});
  t.is(queryByRole('menu'), null);
  fireEvent.click(trigger);
  fireEvent.touchStart(document.body);
  t.is(queryByRole('menu'), null);
});

test.serial('allows an empty menu and leaves focus unchanged when navigation has no options', t => {
  const props = {...fixture.props, menu: {...fixture.props.menu, options: []}};
  const {getByRole, queryAllByRole} = render(<SplitButton {...props} />, {
    wrapper: wrappingComponent
  });
  const trigger = getByRole('button', {name: 'Choose export format'});
  trigger.focus();
  fireEvent.click(trigger);
  t.is(queryAllByRole('menuitem').length, 0);
  fireEvent.keyDown(getByRole('menu'), {key: 'ArrowDown'});
  t.is(document.activeElement, trigger);
});
