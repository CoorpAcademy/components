import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Search from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call onChange with new value when user try to change the input value', t => {
  t.plan(1);

  const onChange = value => {
    t.is(value, 'my name is murphy');
  };

  const wrapper = shallow(
    <Search placeholder="say your name" value="my name is murph" onChange={onChange} />
  );

  wrapper.find('input').simulate('input', {target: {value: 'my name is murphy'}});
});
