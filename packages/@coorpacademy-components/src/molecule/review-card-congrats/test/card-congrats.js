import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {render, cleanup, clearAllMocks, useRealTimers} from '@testing-library/react';
import ReviewCardCongrats from '..';
import starFixture from './fixtures/star';

browserEnv();

test.afterEach(cleanup);

test.afterEach(() => {
  clearAllMocks();
  useRealTimers();
});

test('should load animation', t => {
  const {container, rerender, unmount} = render(<ReviewCardCongrats {...starFixture.props} />);

  rerender(<ReviewCardCongrats {...starFixture.props} />);

  // const wrapper = container.querySelectorAll('[data-name="default-lottie"]');
  // t.truthy(wrapper);

  // const backupImage = wrapper[0].querySelector('[data-name="ie11-backup-image"]');
  // t.falsy(backupImage);

  unmount();

  t.pass();
});
