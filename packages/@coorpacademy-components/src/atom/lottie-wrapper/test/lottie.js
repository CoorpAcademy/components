import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import delay from 'delay';
import {render, cleanup} from '@testing-library/react';
import LottieWrapper, {fetchAndLoadAnimation} from '..';
import starFixture from './fixtures/default';
import controlsFixture from './fixtures/controls';

browserEnv();

test.afterEach(cleanup);

test('should update && load the animation, should clean up after unmount', async t => {
  const {container, rerender, unmount} = render(<LottieWrapper {...starFixture.props} />);

  await delay(500);

  rerender(<LottieWrapper {...starFixture.props} />);

  await delay(500);

  const wrapper = container.querySelectorAll('[data-name="default-lottie"]');
  t.truthy(wrapper);

  unmount();

  t.pass();
});

test('lottie controls: should update && load the animation, should clean up after unmount', t => {
  const props = {
    ...controlsFixture.props,
    animationControl: 'play'
  };

  const {container, rerender, unmount} = render(<LottieWrapper {...props} />);

  rerender(<LottieWrapper {...props} />);
  const wrapper = container.querySelectorAll('[data-name="default-lottie"]');
  t.truthy(wrapper);

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
