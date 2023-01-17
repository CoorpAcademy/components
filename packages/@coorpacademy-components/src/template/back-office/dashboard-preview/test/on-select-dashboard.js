import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import DashboardPreview from '..';
import defaultFixture from './fixtures/selected';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onSelectDashboard function with the value of the target', t => {
  t.plan(2);

  const selector = 'a[data-name="analytics-content-link"]';
  const onClick = value => {
    t.is(value, 'analytics-content');
  };

  const wrapper = mount(
    <DashboardPreview {...defaultFixture.props} onSelectDashboard={onClick} />,
    {
      context: {translate: id => id},
      childContextTypes: {translate: PropTypes.func}
    }
  );

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('click');
});

test('should not crash if the onChange function has not been specified', t => {
  t.plan(1);
  const selector = 'a[data-name="analytics-content-link"]';
  const wrapper = mount(
    <DashboardPreview {...defaultFixture.props} onSelectDashboard={undefined} />,
    {
      context: {translate: id => id},
      childContextTypes: {translate: PropTypes.func}
    }
  );

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('click');
});
