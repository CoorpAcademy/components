import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toString from 'lodash/fp/toString';
import Animation, {LINEAR} from '..';

configure({adapter: new Adapter()});

test('should ', t => {
  const expectedOnChangeValues = [false, true];
  const wrapper = shallow(<Animation name="test" >{toString}</Animation>);
  const instance = wrapper.instance();

  console.log(instance);
});
