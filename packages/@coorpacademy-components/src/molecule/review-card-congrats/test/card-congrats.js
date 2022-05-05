import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {render, cleanup, waitFor} from '@testing-library/react';
import ReviewCardCongrats from '..';
import starFixture from './fixtures/star';

browserEnv();

test.afterEach(cleanup);

test('should trigger lottie animation', async t => {
  const {container, unmount, rerender} = render(<ReviewCardCongrats {...starFixture.props} />);
  const lottieWrapper = container.querySelectorAll('[data-name="lottie-wrapper"]');
  t.truthy(lottieWrapper);

  // const propsReviewCardCongrats = {
  //   animationLottie: {
  //     ...starFixture.animationLottie.props,
  //     animationControl: 'play',
  //     autoplay: false
  //   }
  // };

  await waitFor(async () => {
    // const result = await t.try(tt => {
    //   <ReviewCardCongrats {...starFixture.props} {...propsReviewCardCongrats} />;
    // });

    const result = await t.try(tt => {
      rerender(<ReviewCardCongrats {...starFixture.props} />);
    });

    if (result.passed) return result.commit();
    result.discard();
    throw result.errors;
  });
  // await waitFor(() => t.is(lottieWrapper.animationControl, 'play'));

  // await waitFor(() => t.is(lottieWrapper, {animationControl: 'play'}), {
  //   timeout: starFixture.props.timerAnimation
  // });

  unmount();

  t.pass();
});

// test('should trigger lottie animation scheluder', async t => {
//   const {container, unmount} = render(<ReviewCardCongrats {...starFixture.props} />);
//   const scheluderWrapper = container.querySelectorAll('[data-name="animation-scheluder-wrapper"]');
//   t.truthy(scheluderWrapper);

//   await waitFor(() => t.is(scheluderWrapper.props.animated, true), {
//     timeout: starFixture.props.timerAnimation
//   });

//   unmount();

//   t.pass();
// });
