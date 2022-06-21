import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {shallow, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TeamsDashboard from '..';
import defaultFixture from './fixtures/default';
import loadingFixture from './fixtures/is-loading';

browserEnv();
configure({adapter: new Adapter()});
const translate = identity;

test('if isLoading is true, then the loader should be rendered', t => {
  const wrapper = shallow(<TeamsDashboard {...loadingFixture.props} />, {
    context: {translate}
  });
  const loader = wrapper.find('[data-name="teams-dashboard-loader"]');
  t.true(loader.exists());
});

test('if isLoading is false, then the dashboard content should be rendered (header and 2 sections)', t => {
  const wrapper = shallow(<TeamsDashboard {...defaultFixture.props} />, {
    context: {translate}
  });
  const dashboard = wrapper.find('[data-name="teams-dashboard"]');
  t.true(dashboard.exists());
  t.is(dashboard.children().length, 2);
});
