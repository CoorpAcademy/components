import 'jsdom-global/register';
import test from 'ava';
import {replace} from 'lodash/fp';
import React from 'react';
import {shallow} from 'enzyme';
import InputDoublestep from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import defaultFixture from './fixtures/default';

test('should call the onChange function on change', t => {
  const deleteStyle = `.${replace(' ', '.', style.delete)}`;
  const cancelStyle = `.${replace(' ', '.', style.cancel)}`;
  const toggleStyle = `.${replace(' ', '.', style.toggle)}`;

  t.plan(14);
  const onChange = e => {
    t.is(e.value, 'foo');
  };
  const wrapper = shallow(<InputDoublestep {...defaultFixture.props} onChange={onChange} />);
  t.is(wrapper.find(deleteStyle).exists(), false);
  t.is(wrapper.find(cancelStyle).exists(), false);
  t.is(wrapper.find(toggleStyle).exists(), true);

  wrapper.find(toggleStyle).simulate('click');

  t.is(wrapper.find(deleteStyle).exists(), true);
  t.is(wrapper.find(cancelStyle).exists(), true);
  t.is(wrapper.find(toggleStyle).exists(), false);

  wrapper.find(cancelStyle).simulate('click');

  t.is(wrapper.find(deleteStyle).exists(), false);
  t.is(wrapper.find(cancelStyle).exists(), false);
  t.is(wrapper.find(toggleStyle).exists(), true);

  wrapper.find(toggleStyle).simulate('click');

  t.is(wrapper.find(deleteStyle).exists(), true);
  t.is(wrapper.find(cancelStyle).exists(), true);
  t.is(wrapper.find(toggleStyle).exists(), false);

  wrapper.find(deleteStyle).simulate('click', {
    value: 'foo',
    preventDefault: () => {
      t.pass();
    }
  });
});
