import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render, within} from '@testing-library/react';
import SplitButton from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call the primary action on click', t => {
  t.plan(2);
  const props = {...defaultFixture.props, onClick: () => t.pass()};
  const {container, unmount} = render(<SplitButton {...props} />);
  t.teardown(unmount);

  const primaryAction = within(container).getByTestId('button-link');
  t.truthy(primaryAction);
  fireEvent.click(primaryAction);
});

test('should call the selected menu option on click', t => {
  t.plan(4);
  const option = defaultFixture.props.menu.options[1];
  const props = {
    ...defaultFixture.props,
    onClick: () => t.fail('The primary action should not be called'),
    menu: {
      ...defaultFixture.props.menu,
      options: defaultFixture.props.menu.options.map(item => ({
        ...item,
        onClick: item === option ? () => t.pass() : () => t.fail('Unexpected menu option')
      }))
    }
  };
  const {container, unmount} = render(<SplitButton {...props} />);
  t.teardown(unmount);

  const trigger = within(container).getByRole('button', {name: props.menu.ariaLabel});
  t.truthy(trigger);
  fireEvent.click(trigger);

  const menuOption = within(container).getByRole('menuitem', {name: option.label});
  t.truthy(menuOption);
  fireEvent.click(menuOption);
  t.falsy(within(container).queryByRole('menu'));
});
