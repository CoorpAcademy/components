import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Tab from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import defaultFixture from './fixtures/default';

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
