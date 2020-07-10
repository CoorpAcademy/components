import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {identity} from 'lodash/fp';
import MoocHeader from '..';
import defaultFixture from './fixtures/default';

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
