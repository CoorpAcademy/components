import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import once from 'lodash/fp/once';
import BrandForm from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should submit form', t => {
  t.plan(2);
  const props = {
    groups: [],
    onSubmit: once(() => {
      t.pass();
    }),
    submitValue: 'save',
    isModified: true
  };
  const wrapper = mount(<BrandForm {...props} />);
  t.is(wrapper.find('input[type="submit"]').length, 1);
  wrapper.find('input[type="submit"]').simulate('submit');
});
test('should reset form', t => {
  t.plan(2);
  const props = {
    groups: [],
    onReset: once(() => {
      t.pass();
    }),
    resetValue: 'reset',
    isModified: true
  };
  const wrapper = mount(<BrandForm {...props} />);
  t.is(wrapper.find('input[type="reset"]').length, 1);
  wrapper.find('input[type="reset"]').simulate('reset');
});
