import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import DashboardPreview from '..';

import defaultFixture from './fixtures/selected';

test('should call the onUpdateField function with the value of the target', t => {
  t.plan(3);

  const selector = 'li[data-name="platform-field"] input';
  const onChange = (field, value) => {
    t.is(field, 'platform');
    t.is(value, 'toto');
  };

  const wrapper = mount(<DashboardPreview {...defaultFixture.props} onUpdateField={onChange} />);

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('change', {
    target: {
      value: 'toto'
    }
  });
});

test('should not crash if the onUpdateField function has not been specified', t => {
  t.plan(1);
  const selector = 'li[data-name="platform-field"] input';
  const wrapper = mount(<DashboardPreview {...defaultFixture.props} onUpdateField={undefined} />);

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('change', {
    target: {
      value: 'toto'
    }
  });
});
