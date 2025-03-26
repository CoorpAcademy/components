import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import ButtonMenuAction from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should toggle visibility of the menu on button click', t => {
  t.plan(6);

  const props = {
    ...defaultFixture.props,
    button: {...defaultFixture.props.button, onClick: () => t.pass()}
  };
  const {container} = render(<ButtonMenuAction {...props} />);

  const button = container.querySelector('[data-name="button-menu-action"]') as Element;
  t.truthy(button);

  fireEvent.click(button);

  const menu = container.querySelector('[data-name="menu-wrapper"]') as Element;
  t.truthy(menu);

  fireEvent.click(button);

  t.false(menu.classList.contains('visible'));

  t.pass();
});

test('should close the menu when clicking outside', t => {
  t.plan(5);

  const props = {
    ...defaultFixture.props,
    button: {...defaultFixture.props.button, onClick: () => t.pass()}
  };
  const {container} = render(<ButtonMenuAction {...props} />);

  const button = container.querySelector('[data-name="button-menu-action"]') as Element;
  t.truthy(button);

  fireEvent.click(button);

  const menu = container.querySelector('[data-name="menu-wrapper"]') as Element;
  t.truthy(menu);

  fireEvent.mouseDown(document.body);

  t.false(menu.classList.contains('visible'));

  t.pass();
});
