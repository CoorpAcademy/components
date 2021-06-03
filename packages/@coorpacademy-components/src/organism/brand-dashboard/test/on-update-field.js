import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import PropTypes from 'prop-types';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BrandDashboard from '..';
import defaultFixture from './fixtures/selected';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onUpdateField function with the value of the target', t => {
  t.plan(2);

  const selector = 'li[data-name="platform-field"] input';
  const onChange = value => {
    t.is(value, 'toto');
  };
  defaultFixture.props.sidebarItems[1].onChange = onChange;

  const wrapper = mount(<BrandDashboard {...defaultFixture.props} onUpdateField={onChange} />, {
    context: {translate: id => id},
    childContextTypes: {translate: PropTypes.func}
  });

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('change', {
    target: {
      value: 'toto'
    }
  });
});
