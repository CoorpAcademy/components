import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {set} from 'lodash/fp';
import Go1Banner from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call onClick on go1Banner', t => {
  t.plan(2);
  const props = set('onClick', () => t.pass(), defaultFixture.props);
  const {container} = render(<Go1Banner {...props} />);
  const go1BannerCta = container.querySelector('[data-name="go1-banner"] a');
  t.truthy(go1BannerCta);
  fireEvent.click(go1BannerCta as Element);
});
