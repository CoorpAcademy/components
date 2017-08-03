import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import InputDoublestep from '..';
import defaultFixture from './fixtures/default';

test('should call the onChange function on change', t => {
  t.plan(2);
  const onChange = e => {
    t.is(e.value, 'foo');
  };
  const wrapper = shallow(<InputDoublestep {...defaultFixture.props} onChange={onChange} />);

  wrapper.find('button').simulate('click', {
    value: 'foo',
    preventDefault: () => {
      t.pass();
    }
  });
});
