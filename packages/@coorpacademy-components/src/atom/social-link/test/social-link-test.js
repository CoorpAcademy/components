import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import SocialLink from '..';
import fixtureFacebook from './fixtures/facebook';
import fixtureFacebookFooter from './fixtures/facebook-footer';

browserEnv();

test('when no mode is provided it should render with the default link styling class', t => {
  t.plan(2);
  const {container} = render(<SocialLink {...fixtureFacebook.props} />);
  const link = container.querySelector('a.social-link__link');
  t.truthy(link);
  t.pass();
});

test('when footer mode is provided it should render with the linkFooter class', t => {
  t.plan(2);
  const {container} = render(<SocialLink {...fixtureFacebookFooter.props} />);
  const link = container.querySelector('a.social-link__linkFooter');
  t.truthy(link);
  t.pass();
});
