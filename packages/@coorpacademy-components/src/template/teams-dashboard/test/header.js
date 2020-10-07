import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TeamsDashboard from '..';
import TeamsHeader from '../../../organism/teams-header';
import noHeaderPropsFixture from './fixtures/no-props-for-header';

browserEnv();
configure({adapter: new Adapter()});

test('should render only empty TeamsHeader if no header props are pased', t => {
  const wrapper = shallow(<TeamsDashboard {...noHeaderPropsFixture.props} />);
  const childLength = wrapper.find('[data-name="teams-dashboard"]').children().length;
  t.is(childLength, 3);
  t.is(wrapper.find('TeamsHeader').children().lenght, undefined);
  t.pass();
});

test('should return null if no props are provided', t => {
  t.is(TeamsHeader(), null);
  t.pass();
});
