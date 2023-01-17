import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import delay from 'delay';
import {render} from '@testing-library/react';
import LottieWrapper, {fetchAndLoadAnimation} from '..';
import starFixture from './fixtures/default';
import controlsFixture from './fixtures/controls';

browserEnv();

test('should update && load the animation, should clean up after unmount', async t => {
  const {container, rerender} = render(<LottieWrapper {...starFixture.props} />);

  await delay(500);

  rerender(<LottieWrapper {...starFixture.props} />);

  await delay(500);

  const wrapper = container.querySelectorAll('[data-name="default-lottie"]');
  t.truthy(wrapper);
  t.pass();
});

test('lottie controls: should update && load the animation, should clean up after unmount', async t => {
  const {container, rerender, unmount} = render(<LottieWrapper {...controlsFixture.props} />);

  await delay(500);

  const lottieAnimation = container.querySelectorAll('[data-name="default-lottie"] svg');

  t.truthy(lottieAnimation);

  rerender(<LottieWrapper {...controlsFixture.props} animationControl="play" />);

  await delay(500);

  rerender(<LottieWrapper {...controlsFixture.props} animationControl="stop" />);

  unmount();

  t.pass();
});

test('fetchAndLoadAnimation', async t => {
  t.plan(3);
  const props = starFixture.props;
  const _lottie = {
    loadAnimation: () => {
      t.pass();
      return {name: 'animation'};
    }
  };
  const _fetch = () => {
    t.pass();
    return {
      json: () => ({
        animationData: 'some value'
      })
    };
  };
  const animation = await fetchAndLoadAnimation(
    _lottie,
    _fetch,
    props.animationSrc,
    '123456',
    true,
    'test',
    true
  );

  t.is(animation.name, 'animation');
});
