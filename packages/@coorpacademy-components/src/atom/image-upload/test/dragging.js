import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import ImageUpload from '..';
import desktopFixture from './fixtures/desktop';

test('should set state to dragging when user starts dragging', t => {
  const wrapper = shallow(<ImageUpload {...desktopFixture.props} />);
  const instance = wrapper.instance();

  t.false(instance.state.dragging);
  wrapper.find('input').simulate('dragenter');
  t.true(instance.state.dragging);
  wrapper.find('input').simulate('dragleave');
  t.false(instance.state.dragging);
});
