import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {omit} from 'lodash/fp';
import InputTextarea from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onChange function with the value of the target', t => {
  t.plan(1);
  const onChange = value => {
    t.is(value, 'foo');
  };
  const wrapper = shallow(<InputTextarea {...defaultFixture.props} onChange={onChange} />);

  wrapper.find('textarea').simulate('change', {target: {value: 'foo'}});
});

test('should not crash if the onChange function has not been specified', t => {
  const wrapper = shallow(<InputTextarea {...omit('onChange', defaultFixture.props)} />);

  wrapper.find('textarea').simulate('change', {target: {value: 'foo'}});
  t.pass();
});
