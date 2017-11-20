import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import replace from 'lodash/fp/replace';
import {InputTextItem} from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class

configure({adapter: new Adapter()});

const defaultFixture = {
  title: 'Bar',
  value: 'Foo'
};

test('should call the onChange function with the value of the target', t => {
  t.plan(4);
  const inputStyle = `.${replace(' ', '.', style.input)}`;

  const onChange = value => {
    t.is(value, 'foo');
  };

  const wrapper = mount(<InputTextItem {...defaultFixture} onChange={onChange} />);

  t.true(wrapper.find(inputStyle).exists());
  t.true(wrapper.find('input').exists());

  wrapper.find('input').simulate('change', {
    target: {
      value: 'foo'
    }
  });

  t.true(wrapper.find(inputStyle).exists());
});

test('should not crash if the onChange function has not been specified', t => {
  t.plan(2);
  const inputStyle = `.${replace(' ', '.', style.input)}`;

  const wrapper = mount(<InputTextItem {...defaultFixture} />);

  t.true(wrapper.find(inputStyle).exists());
  t.true(wrapper.find('input').exists());

  wrapper.find('input').simulate('change', {
    target: {
      value: 'foo'
    }
  });
});
