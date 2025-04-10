import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {identity} from 'lodash/fp';
import {renderWithContext} from '../../../util/render-with-context';
import BulletPointMenuButton from '..';
import {BulletPointMenuButtonProps} from '../types';

browserEnv();
const translate = identity;

test('should launch onClick, should find the button menu and have clickable buttons', t => {
  t.plan(12);
  const props: BulletPointMenuButtonProps = {
    menuAriaLabel: 'aria menu',
    onClick: () => t.pass(),
    buttons: [
      {
        'data-name': 'menu-publish-button',
        label: 'Publish',
        onClick: () => t.pass(),
        type: 'default'
      },
      {
        'data-name': 'menu-delete-button',
        label: 'Delete',
        onClick: () => t.pass(),
        type: 'dangerous'
      }
    ]
  };

  const {container} = renderWithContext(<BulletPointMenuButton {...props} />, {
    context: {translate}
  });

  const button = container.querySelector('[data-name="bullet-point-button"]');
  t.truthy(button);
  t.falsy(
    container.querySelector('[data-name="button-menu"]'),
    'Menu should not be visible before click'
  );
  fireEvent.click(button as Element);

  const menu = container.querySelector('[data-name="button-menu"]') as Element;
  t.truthy(menu, 'Menu should appear after click');

  t.is(menu.children.length, 2);
  const publishButton = menu.querySelector('[data-name="menu-publish-button"]');
  t.truthy(publishButton);
  fireEvent.click(publishButton as Element);

  const deleteButton = menu.querySelector('[data-name="menu-delete-button"]');
  t.truthy(deleteButton);
  fireEvent.click(deleteButton as Element);

  const menuAfterActionClick = container.querySelector('[data-name="button-menu"]');
  t.truthy(menuAfterActionClick, 'Menu should continue to appear after actions click');

  fireEvent.click(document.body);

  const menuAfter = container.querySelector('[data-name="button-menu"]');
  t.falsy(menuAfter, 'Menu should disappear after clicking outside');

  t.pass();
});

test('should launch onClick, should open and close the menu', t => {
  t.plan(8);
  const props: BulletPointMenuButtonProps = {
    menuAriaLabel: 'aria menu',
    onClick: () => t.pass(),
    buttons: [
      {
        'data-name': 'menu-publish-button',
        label: 'Publish',
        onClick: () => t.fail(),
        type: 'default'
      }
    ]
  };

  const {container} = renderWithContext(<BulletPointMenuButton {...props} />, {
    context: {translate}
  });

  let button = container.querySelector('[data-name="bullet-point-button"]');
  t.truthy(button);
  t.falsy(
    container.querySelector('[data-name="button-menu"]'),
    'Menu should not be visible before click'
  );
  fireEvent.click(button as Element); // open menu

  const menu = container.querySelector('[data-name="button-menu"]') as Element;
  t.truthy(menu, 'Menu should appear after click');

  button = container.querySelector('[data-name="bullet-point-button"]');
  t.truthy(button);
  fireEvent.click(button as Element); // close menu

  t.falsy(
    container.querySelector('[data-name="button-menu"]'),
    'Menu should not be visible after click'
  );
  t.pass();
});
