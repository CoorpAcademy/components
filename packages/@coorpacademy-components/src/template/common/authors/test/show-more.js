import 'jsdom-global/register';
import test from 'ava';
import {replace} from 'lodash/fp';
import React from 'react';
import {mount} from 'enzyme';
import Authors from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import authorFixture from './fixtures/default';

test('should show more', t => {
  const context = {
    skin: {},
    translate: key => key
  };

  const toggleStyle = `.${replace(' ', '.', style.toggle)}`;
  t.plan(6);

  const wrapper = mount(<Authors {...authorFixture.props} />, {context});

  t.is(wrapper.find(toggleStyle).exists(), true);
  t.is(wrapper.find(toggleStyle).text(), 'Show more');

  wrapper.find(toggleStyle).simulate('click');

  t.is(wrapper.find(toggleStyle).exists(), true);
  t.is(wrapper.find(toggleStyle).text(), 'See less');

  wrapper.find(toggleStyle).simulate('click');

  t.is(wrapper.find(toggleStyle).exists(), true);
  t.is(wrapper.find(toggleStyle).text(), 'Show more');
});
