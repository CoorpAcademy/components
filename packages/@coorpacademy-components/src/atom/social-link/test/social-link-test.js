import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SocialLink from '..';
import fixtureFacebook from './fixtures/facebook';
import fixtureFacebookFooter from './fixtures/facebook-footer';

browserEnv();
configure({adapter: new Adapter()});

test('when no mode is provided it should render with the default link styling class', t => {
  const wrapper = mount(<SocialLink {...fixtureFacebook.props} />);
  const link = wrapper.find('a.social-link__link');
  t.assert(link.exists());
  t.pass();
});

test('when footer mode is provided it should render with the linkFooter class', t => {
  const wrapper = mount(<SocialLink {...fixtureFacebookFooter.props} />);
  const link = wrapper.find('a.social-link__linkFooter');
  t.assert(link.exists());
  t.pass();
});
