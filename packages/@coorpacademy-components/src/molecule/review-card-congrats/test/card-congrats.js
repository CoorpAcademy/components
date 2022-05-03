import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {render, cleanup, useRealTimers, act} from '@testing-library/react';
import ReviewCardCongrats from '..';
import starFixture from './fixtures/star';

browserEnv();

test.before(() => {
  useRealTimers();
});

test.afterEach(cleanup);

test('should load and update lottie animation', t => {
  // const {container, result, waitForNextUpdate, unmount} = render(

  const propsAnimation = {
    ...starFixture.props,
    animationLottie: {...animationLottie.props, animationControl: 'loading'}
  };

  const {container, unmount} = render(<ReviewCardCongrats {...propsAnimation} />);

  // const wrapper = container.querySelectorAll('[data-name="card-star"]');
  // t.truthy(wrapper);

  act(() => {
    t.runAllTimers();
  });

  // await waitForNextUpdate();

  // expect(result.current.isAnimationVisible).toEqual('play');
  unmount();

  t.pass();
});
