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
  wrapper.unmount();

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
