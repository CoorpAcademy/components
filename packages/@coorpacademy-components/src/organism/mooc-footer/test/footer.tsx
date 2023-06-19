import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import MoocFooter from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('if section pages are not provided, no element should be rendered on place', t => {
  t.plan(2);
  const {container} = render(<MoocFooter {...defaultFixture.props} />);
  const pages = container.querySelector('[data-name="pages-list"]') as Element;
  t.truthy(pages);
  t.is(pages.children.length, 3);
});

test('should find the coorplogo even if no props are provided', t => {
  t.plan(1);
  const {container} = render(<MoocFooter />);
  const coorpLogo = container.querySelector('[data-name="coorp-social-networks-logo"]');
  t.truthy(coorpLogo);
});
