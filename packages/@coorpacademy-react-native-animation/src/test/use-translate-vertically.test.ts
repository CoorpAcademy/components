import test from 'ava';
import type {Animated, EasingFunction} from 'react-native';
import {Easing} from 'react-native';

import {renderHook} from '@testing-library/react-native';
import {useAnimation} from '../use-animation.native';

type TranslateYTestType = Animated.Value & {
  _animation: {
    _easing: EasingFunction;
    _delay: number;
    _duration: number;
    _toValue: number;
  };
};

test('using default params', t => {
  const {result} = renderHook(() =>
    useAnimation({
      property: 'translateY',
      fromValue: 100,
      toValue: 200
    })
  );

  const translateY = result.current.style[0].transform[0].translateY as TranslateYTestType;
  result.current.timing.start();

  t.is(translateY._animation._toValue, 200);
  t.is(translateY._animation._duration, 500);
});

test('using custom params', t => {
  const {result} = renderHook(() =>
    useAnimation({
      property: 'translateY',
      fromValue: 100,
      toValue: 300,
      delay: 100,
      duration: 1000,
      easing: Easing.cubic
    })
  );

  const translateY = result.current.style[0].transform[0].translateY as TranslateYTestType;
  result.current.timing.start();

  t.is(translateY._animation._toValue, 300);
  t.is(translateY._animation._duration, 1000);
  t.is(translateY._animation._delay, 100);
  t.is(translateY._animation._easing, Easing.cubic);
});
