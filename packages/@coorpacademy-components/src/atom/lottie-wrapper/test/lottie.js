import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LottieWrapper, {fetchAndLoadAnimation} from '..';
import starFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should update && load the animation, should clean up after unmount', t => {
  const wrapper = mount(<LottieWrapper {...starFixture.props} />);

  wrapper.update();

  const backupImage = wrapper.find('[data-name="ie11-backup-image"]');
  t.false(backupImage.at(0).exists());

  wrapper.unmount();

  t.pass();
});

test('ie11: should load an image in place of the animation', t => {
  window.msCrypto = () => {};
  // eslint-disable-next-line lodash-fp/prefer-constant
  window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  });

  const wrapper = mount(<LottieWrapper {...starFixture.props} />);

  wrapper.update();

  const backupImage = wrapper.find('[data-name="ie11-backup-image"]');
  t.true(backupImage.at(0).exists());

  wrapper.unmount();

  delete window.msCrypto;
  // eslint-disable-next-line lodash-fp/prefer-constant
  window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/13.2.0';
  });

  t.pass();
});

test('other browser: should not load an image in place of the animation', t => {
  // eslint-disable-next-line lodash-fp/prefer-constant
  window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 (other stuff; rv:77.0) like Gecko';
  });

  const wrapper = mount(<LottieWrapper {...starFixture.props} />);

  const backupImage = wrapper.find('[data-name="ie11-backup-image"]');
  t.false(backupImage.at(0).exists());

  wrapper.unmount();

  // eslint-disable-next-line lodash-fp/prefer-constant
  window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/13.2.0';
  });

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
    props.src,
    '123456',
    true,
    'test',
    true,
    _lottie,
    _fetch
  );

  t.is(animation.name, 'animation');
});
