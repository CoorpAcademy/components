import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import omit from 'lodash/fp/omit';
import replace from 'lodash/fp/replace';
import InputHtml from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import defaultFixture from './fixtures/default';

test('should call the onChange function with the value of the target', t => {
  t.plan(15);
  const inputStyle = `.${replace(' ', '.', style.input)}`;
  const iconStyle = `.${replace(' ', '.', style.toggle)}`;

  const onChange = value => {
    t.is(value, 'foo');
  };

  const wrapper = mount(<InputHtml {...defaultFixture.props} onChange={onChange} />);

  t.is(wrapper.find(inputStyle).exists(), true);
  t.is(wrapper.find('textarea').exists(), false);
  t.is(wrapper.find(iconStyle).exists(), true);

  wrapper.find(iconStyle).simulate('click', {
    preventDefault: () => {
      t.pass();
    }
  });

  t.is(wrapper.find(inputStyle).exists(), true);
  t.is(wrapper.find(iconStyle).exists(), true);
  t.is(wrapper.find('textarea').exists(), true);

  wrapper.find('textarea').simulate('change', {
    target: {
      value: 'foo'
    }
  });

  t.is(wrapper.find(inputStyle).exists(), true);
  t.is(wrapper.find(iconStyle).exists(), true);
  t.is(wrapper.find('textarea').exists(), true);

  wrapper.find(iconStyle).simulate('click', {
    preventDefault: () => {
      t.pass();
    }
  });

  t.is(wrapper.find(inputStyle).exists(), true);
  t.is(wrapper.find(iconStyle).exists(), true);
  t.is(wrapper.find('textarea').exists(), false);
});

test('should not crash if the onChange function has not been specified', t => {
  t.plan(2);
  const iconStyle = `.${replace(' ', '.', style.toggle)}`;
  const wrapper = mount(<InputHtml {...omit('onChange', defaultFixture.props)} />);

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
test('should not crash if the value has not been specified', t => {
  t.plan(4);
  const inputStyle = `.${replace(' ', '.', style.input)}`;
  const wrapper = shallow(<InputHtml {...defaultFixture.props} />);

  t.is(
    wrapper.find(inputStyle).html(),
    '<div class="input-html__preview input-html__input">Foo <b>foo</b> foo</div>'
  );
  wrapper.setProps({value: undefined});
  t.is(
    wrapper.find(inputStyle).html(),
    '<div class="input-html__preview input-html__input">Foo <b>foo</b> foo</div>'
  );
  wrapper.setProps({value: 'text'});
  t.is(
    wrapper.find(inputStyle).html(),
    '<div class="input-html__preview input-html__input">text</div>'
  );
  t.pass();
});
