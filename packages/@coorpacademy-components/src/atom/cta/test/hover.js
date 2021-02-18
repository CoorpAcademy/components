import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cta from '..';
import ctaFixture from './fixtures/primary';
import logoutFixture from './fixtures/logout';

browserEnv();
configure({adapter: new Adapter()});

const context = {
  skin: {
    common: {
      primary: '#FF7043'
    }
  }
};

test('should be considered as hovered when mouse enters', t => {
  const wrapper = shallow(<Cta {...ctaFixture.props} />, {context});
  const instance = wrapper.instance();

  t.false(instance.state.hovered);
  wrapper.simulate('mouseenter');
  t.true(instance.state.hovered);
  wrapper.simulate('mouseleave');
  t.false(instance.state.hovered);
});

test('should be considered as hovered when mouse enters for logout', t => {
  const wrapper = shallow(<Cta {...logoutFixture.props} />, {context});
  const instance = wrapper.instance();

  t.false(instance.state.hovered);
  wrapper.simulate('mouseenter');
  t.true(instance.state.hovered);
  wrapper.simulate('mouseleave');
  t.false(instance.state.hovered);
});
