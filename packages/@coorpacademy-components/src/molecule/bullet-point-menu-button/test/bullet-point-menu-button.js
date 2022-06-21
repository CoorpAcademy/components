import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BulletPointMenuButton from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});
const translate = identity;

test('should launch onClick, should find the button menu and have clickable buttons', t => {
  const wrapper = mount(<BulletPointMenuButton {...defaultFixture.props} />, {
    context: {translate}
  });
  const button = wrapper.find('[data-name="bullet-point-button"]');
  t.true(button.exists());
  button.first().simulate('click', {});
  const menu = wrapper.find('[data-name="button-menu"]').children().first();
  t.true(menu.exists());
  t.is(menu.children().length, 2);
  const publishButton = menu.find('[data-name="menu-publish-button"]');
  t.true(publishButton.exists());
  publishButton.first().simulate('click', {});
  const deleteButton = menu.find('[data-name="menu-delete-button"]');
  t.true(deleteButton.exists());
  deleteButton.first().simulate('click', {});
  t.pass();
});
