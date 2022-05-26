import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import PropTypes from 'prop-types';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DashboardPreview from '..';
import defaultFixture from './fixtures/selected';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onUpdateVersion function with the value of the target', t => {
  t.plan(2);

  const selector = 'li[data-name="version-field"] select';
  const onChange = value => {
    t.is(value, 'foo');
  };

  const wrapper = mount(<DashboardPreview {...defaultFixture.props} onUpdateVersion={onChange} />, {
    context: {translate: id => id},
    childContextTypes: {translate: PropTypes.func}
  });

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('change', {
    target: {
      value: 'foo'
    }
  });
});

test('should not crash if the onUpdateVersion function has not been specified', t => {
  t.plan(1);
  const selector = 'li[data-name="version-field"] select';
  const wrapper = mount(
    <DashboardPreview {...defaultFixture.props} onUpdateVersion={undefined} />,
    {
      context: {translate: id => id},
      childContextTypes: {translate: PropTypes.func}
    }
  );

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('change', {
    target: {
      value: 'foo'
    }
  });
});
