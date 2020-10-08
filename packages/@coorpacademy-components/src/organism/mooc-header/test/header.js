import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {identity} from 'lodash/fp';
import MoocHeader from '..';
import defaultFixture from './fixtures/default';
import noLinksFixture from './fixtures/user-change-password';

browserEnv();
configure({adapter: new Adapter()});

test('should focus when in searchBar input', t => {
  const translate = identity;

  const wrapper = mount(<MoocHeader {...defaultFixture.props} />, {
    context: {translate}
  });

  wrapper.find('[data-name="Search-Bar"] input').simulate('focus', {});
  t.pass();
});

test('should submit when submit value in searchBar input', t => {
  const translate = identity;

  const wrapper = mount(<MoocHeader {...defaultFixture.props} />, {
    context: {translate}
  });

  wrapper.find('[data-name="Search-Bar"] input').simulate('submit', {});
  t.pass();
});

test('render should return null if no props are provided', t => {
  t.is(new MoocHeader({}).render(), null);
  t.is(new MoocHeader().render(), null);
  t.pass();
});

test('menu wrapper should not have any childrens if no links are provided', t => {
  const translate = identity;
  const wrapper = mount(<MoocHeader {...noLinksFixture} />, {
    context: {translate}
  });
  const childLength = wrapper.find('[data-name="menu-wrapper"]').children().length;
  t.is(childLength, 0);
  t.pass();
});
