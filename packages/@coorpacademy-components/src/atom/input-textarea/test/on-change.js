import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import omit from 'lodash/fp/omit';
import defaultFixture from './fixtures/default';
import InputTextarea from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onChange function with the value of the target', t => {
  t.plan(1);
  const onChange = value => {
    t.is(value, 'foo');
  };
  const wrapper = shallow(<InputTextarea {...defaultFixture.props} onChange={onChange} />);

  wrapper.find('textarea').simulate('input', {target: {value: 'foo'}});
});

test('should not crash if the onChange function has not been specified', t => {
  const wrapper = shallow(<InputTextarea {...omit('onChange', defaultFixture.props)} />);

  wrapper.find('textarea').simulate('input', {target: {value: 'foo'}});
  t.pass();
});
