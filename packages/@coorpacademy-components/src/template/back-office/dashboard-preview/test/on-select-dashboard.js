import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import DashboardPreview from '..';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class

import defaultFixture from './fixtures/selected';

test('should call the onSelectDashboard function with the value of the target', t => {
  t.plan(2);

  const selector = 'a[data-name="analytics-content-link"]';
  const onClick = value => {
    t.is(value, 'analytics-content');
  };

  const wrapper = mount(<DashboardPreview {...defaultFixture.props} onSelectDashboard={onClick} />);

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('click');
});

test('should not crash if the onChange function has not been specified', t => {
  t.plan(1);
  const selector = 'a[data-name="analytics-content-link"]';
  const wrapper = mount(
    <DashboardPreview {...defaultFixture.props} onSelectDashboard={undefined} />
  );

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('click');
});
