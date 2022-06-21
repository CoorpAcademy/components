import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, cleanup, waitFor} from '@testing-library/react';
import ReviewCardCongrats, {setAnimations} from '..';
import starFixture from './fixtures/star';

browserEnv({pretendToBeVisual: true});

test.afterEach(cleanup);

test('should trigger lottie animation', async t => {
  const props = {...starFixture.props, timerAnimation: 0};
  const {container, rerender} = render(<ReviewCardCongrats {...props} />);

  await waitFor(async () => {
    const result = await t.try(tt => {
      rerender(<ReviewCardCongrats {...props} />);
      const lottieWrapper = container.querySelectorAll('[data-name="lottie-wrapper"]');
      tt.truthy(lottieWrapper);
    });
    if (result.passed) return result.commit();
    result.discard();
    throw result.errors;
  });
  t.pass();
});

test('setAnimations', t => {
  t.plan(2);
  const _setIsAnimationVisible = () => {
    t.pass();
  };
  const _setIsAnimated = () => {
    t.pass();
  };

  setAnimations(_setIsAnimationVisible, _setIsAnimated)();
});
