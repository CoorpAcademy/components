import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from '..';

test('should call the onChange function and toggle the value on change', t => {
  t.plan(5);
  const expectedOnChangeValues = [false, true];
  const onChange = value => {
    t.is(value, expectedOnChangeValues.shift());
  };
  const wrapper = shallow(<Checkbox checked onChange={onChange} />);
  const instance = wrapper.instance();

  t.true(instance.state.checked);
  wrapper.find('input').simulate('change', {target: {checked: false}});
  t.false(instance.state.checked);
  wrapper.find('input').simulate('change', {target: {checked: true}});
  t.true(instance.state.checked);
});
