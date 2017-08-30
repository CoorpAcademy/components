import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import InputDoublestep from '..';
import defaultFixture from './fixtures/default';

test('should call the onChange function on change', t => {
  t.plan(14);
  const onChange = e => {
    t.is(e.value, 'foo');
  };
  const wrapper = shallow(<InputDoublestep {...defaultFixture.props} onChange={onChange} />);
  t.is(wrapper.find('.input-doublestep__delete').exists(), false);
  t.is(wrapper.find('.input-doublestep__cancel').exists(), false);
  t.is(wrapper.find('.input-doublestep__toggle').exists(), true);

  wrapper.find('.input-doublestep__toggle').simulate('click');

  t.is(wrapper.find('.input-doublestep__delete').exists(), true);
  t.is(wrapper.find('.input-doublestep__cancel').exists(), true);
  t.is(wrapper.find('.input-doublestep__toggle').exists(), false);

  wrapper.find('.input-doublestep__cancel').simulate('click');

  t.is(wrapper.find('.input-doublestep__delete').exists(), false);
  t.is(wrapper.find('.input-doublestep__cancel').exists(), false);
  t.is(wrapper.find('.input-doublestep__toggle').exists(), true);

  wrapper.find('.input-doublestep__toggle').simulate('click');

  t.is(wrapper.find('.input-doublestep__delete').exists(), true);
  t.is(wrapper.find('.input-doublestep__cancel').exists(), true);
  t.is(wrapper.find('.input-doublestep__toggle').exists(), false);

  wrapper.find('.input-doublestep__delete').simulate('click', {
    value: 'foo',
    preventDefault: () => {
      t.pass();
    }
  });
});
