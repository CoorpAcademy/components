import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TeamsHeader from '..';
import noLinksFixture from './fixtures/logo-only';

browserEnv();
configure({adapter: new Adapter()});

test('should return null if no props are provided', t => {
  t.is(TeamsHeader({}), null);
  t.is(TeamsHeader(), null);
  t.pass();
});

test('should not render linkView if no links are given', t => {
  const wrapper = shallow(<TeamsHeader {...noLinksFixture} />);
  const childLength = wrapper.find('[data-name="teams-header"]').children().length;
  t.is(childLength, 1);
  t.pass();
});
