import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import LottieWrapper, {fetchAndLoadAnimation} from '..';
import starFixture from './fixtures/default';
import controlsFixture from './fixtures/controls';

browserEnv();

test.afterEach(cleanup);

test('should update && load the animation, should clean up after unmount', t => {
  const {container, rerender, unmount} = render(<LottieWrapper {...starFixture.props} />);

  rerender(<LottieWrapper {...starFixture.props} />);

  const wrapper = container.querySelectorAll('[data-name="default-lottie"]');
  t.truthy(wrapper);

  const backupImage = wrapper[0].querySelector('[data-name="ie11-backup-image"]');
  t.falsy(backupImage);

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

  const backupImage = wrapper[0].querySelector('[data-name="ie11-backup-image"]');
  t.falsy(backupImage);
  unmount();

  t.pass();
});

test('ie11: should load an image in place of the animation', t => {
  window.msCrypto = () => {};
  // eslint-disable-next-line lodash-fp/prefer-constant
  window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  });

  const {container, rerender, unmount} = render(<LottieWrapper {...starFixture.props} />);

  rerender(<LottieWrapper {...starFixture.props} />);
  const wrapper = container.querySelectorAll('[data-name="default-lottie"]');
  t.truthy(wrapper);

  const backupImage = wrapper[0].querySelector('[data-name="ie11-backup-image"]');
  t.truthy(backupImage);

  delete window.msCrypto;
  // eslint-disable-next-line lodash-fp/prefer-constant
  window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/13.2.0';
  });
  unmount();

  t.pass();
});

test('other browser: should not load an image in place of the animation', t => {
  // eslint-disable-next-line lodash-fp/prefer-constant
  window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 (other stuff; rv:77.0) like Gecko';
  });

  const {container, rerender, unmount} = render(<LottieWrapper {...starFixture.props} />);

  rerender(<LottieWrapper {...starFixture.props} />);
  const wrapper = container.querySelectorAll('[data-name="default-lottie"]');
  t.truthy(wrapper);

  const backupImage = wrapper[0].querySelector('[data-name="ie11-backup-image"]');
  t.falsy(backupImage);

  // eslint-disable-next-line lodash-fp/prefer-constant
  window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/13.2.0';
  });
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
