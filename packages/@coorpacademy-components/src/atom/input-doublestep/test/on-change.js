import browserEnv from 'browser-env';
import test from 'ava';
import {replace} from 'lodash/fp';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import InputDoublestep from '..';
import inputConfirmFixture from './fixtures/input-confirm';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onChange function on change with inputConfirm fixture', t => {
  const deleteStyle = `.${replace(' ', '.', style.delete)}`;
  const inputStyle = `.${replace(' ', '.', style.input)}`;
  const sectionStyle = `.${replace(' ', '.', style.sectionConfirm)}`;
  const cancelStyle = `.${replace(' ', '.', style.cancel)}`;
  const toggleStyle = `.${replace(' ', '.', style.toggle)}`;

  t.plan(22);
  const onClick = e => {
    t.is(e.value, 'foo');
  };
  const wrapper = mount(<InputDoublestep {...inputConfirmFixture.props} onClick={onClick} />);

  t.is(wrapper.find(deleteStyle).exists(), false);
  t.is(wrapper.find(inputStyle).exists(), false);
  t.is(wrapper.find(cancelStyle).exists(), false);
  t.is(wrapper.find(sectionStyle).exists(), false);
  t.is(wrapper.find(toggleStyle).exists(), true);

  wrapper.find(toggleStyle).simulate('click');

  t.is(wrapper.find(sectionStyle).exists(), true);
  t.is(wrapper.find(inputStyle).exists(), true);
  t.is(wrapper.find(deleteStyle).exists(), true);
  t.is(wrapper.find(cancelStyle).exists(), true);
  t.is(wrapper.find(toggleStyle).exists(), false);

  wrapper.find(cancelStyle).simulate('click');

  t.is(wrapper.find(sectionStyle).exists(), false);
  t.is(wrapper.find(inputStyle).exists(), false);
  t.is(wrapper.find(deleteStyle).exists(), false);
  t.is(wrapper.find(cancelStyle).exists(), false);
  t.is(wrapper.find(toggleStyle).exists(), true);

  wrapper.find(toggleStyle).simulate('click');

  t.is(wrapper.find(sectionStyle).exists(), true);
  t.is(wrapper.find(inputStyle).exists(), true);
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
