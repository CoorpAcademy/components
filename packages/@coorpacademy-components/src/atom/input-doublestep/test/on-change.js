import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import InputDoublestep from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import defaultFixture from './fixtures/default';

test('should call the onChange function on change', t => {
  t.plan(14);
  const onChange = e => {
    t.is(e.value, 'foo');
  };
  const wrapper = shallow(<InputDoublestep {...defaultFixture.props} onChange={onChange} />);
  t.is(wrapper.find(`.${style.delete}`).exists(), false);
  t.is(wrapper.find(`.${style.cancel}`).exists(), false);
  t.is(wrapper.find(`.${style.toggle}`).exists(), true);

  wrapper.find(`.${style.toggle}`).simulate('click');

  t.is(wrapper.find(`.${style.delete}`).exists(), true);
  t.is(wrapper.find(`.${style.cancel}`).exists(), true);
  t.is(wrapper.find(`.${style.toggle}`).exists(), false);

  wrapper.find(`.${style.cancel}`).simulate('click');

  t.is(wrapper.find(`.${style.delete}`).exists(), false);
  t.is(wrapper.find(`.${style.cancel}`).exists(), false);
  t.is(wrapper.find(`.${style.toggle}`).exists(), true);

  wrapper.find(`.${style.toggle}`).simulate('click');

  t.is(wrapper.find(`.${style.delete}`).exists(), true);
  t.is(wrapper.find(`.${style.cancel}`).exists(), true);
  t.is(wrapper.find(`.${style.toggle}`).exists(), false);

  wrapper.find(`.${style.delete}`).simulate('click', {
    value: 'foo',
    preventDefault: () => {
      t.pass();
    }
  });
});
