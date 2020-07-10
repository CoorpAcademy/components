import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import Tab from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call onClick with the targetContent value', t => {
  t.plan(1);
  const onClick = value => {
    t.is(value, 'foobar');
  };
  const wrapper = shallow(
    <Tab {...defaultFixture.props} onClick={onClick} targetContent="foobar" />
  );

  wrapper.find(`div.${style.tab}`).simulate('click');
});
