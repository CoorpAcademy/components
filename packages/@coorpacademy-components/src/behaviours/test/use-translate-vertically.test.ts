import test from 'ava';
import {renderHook} from '@testing-library/react-native';
import {Animated, Easing, EasingFunction} from 'react-native';
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
      toValue: 0
    })
  );

  const translateY = result.current.style.transform[0].translateY as TranslateYTestType;

  t.is(translateY._animation._toValue, 100);
  t.is(translateY._animation._duration, 550);
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

  const translateY = result.current.style.transform[0].translateY as TranslateYTestType;

  t.is(translateY._animation._toValue, 300);
  t.is(translateY._animation._duration, 1000);
  t.is(translateY._animation._delay, 100);
  t.is(translateY._animation._easing, Easing.cubic);
});

test('plop', t => {
  t.is(1, 1);
});
