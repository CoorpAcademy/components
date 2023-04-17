import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {identity} from 'lodash/fp';
import {renderWithContext} from '../../../util/render-with-context';
import BulletPointMenuButton from '..';
import defaultFixture from './fixtures/default';

browserEnv();
const translate = identity;

test('should launch onClick, should find the button menu and have clickable buttons', t => {
  const {container} = renderWithContext(<BulletPointMenuButton {...defaultFixture.props} />, {
    context: {translate}
  });

  const button = container.querySelector('[data-name="bullet-point-button"]');
  t.truthy(button);
  fireEvent.click(button as Element);
  const menu = container.querySelector('[data-name="button-menu"]') as Element;
  t.truthy(menu);
  t.is(menu.children.length, 2);
  const publishButton = menu.querySelector('[data-name="menu-publish-button"]');
  t.truthy(publishButton);
  fireEvent.click(publishButton as Element);
  const deleteButton = menu.querySelector('[data-name="menu-delete-button"]');
  t.truthy(deleteButton);
  fireEvent.click(deleteButton as Element);
  t.pass();
});
