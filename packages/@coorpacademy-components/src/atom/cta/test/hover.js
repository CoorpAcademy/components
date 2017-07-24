import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Cta from '..';
import ctaFixture from './fixtures/primary';

const context = {
  skin: {
    common: {
      primary: '#FF7043'
    }
  }
};

test('should call cardsWidth', t => {
  const wrapper = shallow(<Cta {...ctaFixture.props} />, {context});
  const instance = wrapper.instance();

  t.false(instance.state.hovered);
  instance.handleMouseEnter();
  t.true(instance.state.hovered);
  instance.handleMouseLeave();
  t.false(instance.state.hovered);
});
