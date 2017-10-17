import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import replace from 'lodash/fp/replace';
import {InputTextItem} from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class

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

  const wrapper = mount(<InputTextItem {...defaultFixture.props} handleOnChange={onChange} />);

  t.is(wrapper.find(inputStyle).exists(), true);
  t.is(wrapper.find('text').exists(), true);

  wrapper.find('text').simulate('change', {
    target: {
      value: 'foo'
    }
  });

  t.is(wrapper.find(inputStyle).exists(), true);
});

test('should not crash if the onChange function has not been specified', t => {
  t.plan(2);
  const inputStyle = `.${replace(' ', '.', style.input)}`;

  const wrapper = mount(<InputTextItem {...defaultFixture.props} />);

  t.is(wrapper.find(inputStyle).exists(), true);
  t.is(wrapper.find('text').exists(), true);

  wrapper.find('text').simulate('change', {
    target: {
      value: 'foo'
    }
  });

  t.pass();
});
