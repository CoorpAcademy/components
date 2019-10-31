import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ctaFixture from './fixtures/primary';
import Cta from '..';

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
