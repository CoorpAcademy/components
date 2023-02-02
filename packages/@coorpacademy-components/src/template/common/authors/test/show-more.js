import test from 'ava';
import browserEnv from 'browser-env';
import {replace} from 'lodash/fp';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import style from '../style.css';
import Authors from '..';
import authorFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

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
