import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import omit from 'lodash/fp/omit';
import replace from 'lodash/fp/replace';
import InputHtml from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import defaultFixture from './fixtures/default';

test('should call the onChange function with the value of the target', t => {
  t.plan(15);
  const previewStyle = `.${replace(' ', '.', style.preview)}`;
  const iconStyle = `.${replace(' ', '.', style.toggle)}`;

  const onChange = value => {
    t.is(value, 'foo');
  };

  const wrapper = shallow(<InputHtml {...defaultFixture.props} onChange={onChange} />);
  t.is(wrapper.find('textarea').exists(), false);
  t.is(wrapper.find(previewStyle).exists(), true);
  t.is(wrapper.find(iconStyle).exists(), true);

  wrapper.find(iconStyle).simulate('click', {
    preventDefault: () => {
      t.pass();
    }
  });

  t.is(wrapper.find('textarea').exists(), true);
  t.is(wrapper.find(previewStyle).exists(), false);
  t.is(wrapper.find(iconStyle).exists(), true);

  wrapper.find('textarea').simulate('input', {
    target: {
      value: 'foo'
    }
  });

  t.is(wrapper.find('textarea').exists(), true);
  t.is(wrapper.find(previewStyle).exists(), false);
  t.is(wrapper.find(iconStyle).exists(), true);

  wrapper.find(iconStyle).simulate('click', {
    preventDefault: () => {
      t.pass();
    }
  });

  t.is(wrapper.find('textarea').exists(), false);
  t.is(wrapper.find(previewStyle).exists(), true);
  t.is(wrapper.find(iconStyle).exists(), true);
});

test('should not crash if the onChange function has not been specified', t => {
  t.plan(2);
  const iconStyle = `.${replace(' ', '.', style.toggle)}`;
  const wrapper = shallow(<InputHtml {...omit('onChange', defaultFixture.props)} />);

  wrapper.find(iconStyle).simulate('click', {
    preventDefault: () => {
      t.pass();
    }
  });

  wrapper.find('textarea').simulate('input', {
    target: {
      value: 'foo'
    }
  });

  t.pass();
});
