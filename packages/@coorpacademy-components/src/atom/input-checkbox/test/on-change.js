import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import noop from 'lodash/fp/noop';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputCheckbox from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onChange function with the checked value of the target', t => {
  t.plan(2);
  const expectedOnChangeValues = [true, false];
  const onChange = value => {
    t.is(value, expectedOnChangeValues.shift());
  };
  const wrapper = shallow(<InputCheckbox {...defaultFixture.props} onChange={onChange} />);

  wrapper.find('#main').simulate('click', {preventDefault: noop, stopPropagation: noop});
  wrapper.find('#main').simulate('click', {preventDefault: noop, stopPropagation: noop});
});
