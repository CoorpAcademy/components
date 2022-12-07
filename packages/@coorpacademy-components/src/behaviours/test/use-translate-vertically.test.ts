import test from 'ava';
import {renderHook} from '@testing-library/react-native';
import {Animated, Easing, EasingFunction} from 'react-native';
import useTranslateVertically from '../use-translate-vertically.native';

type TranslateYTestType = Animated.Value & {
  _animation: {
    _easing: EasingFunction;
    _delay: number;
    _duration: number;
    _toValue: number;
  };
};

test('using default params', t => {
  const {result} = renderHook(() => useTranslateVertically());

  const translateY = result.current.transform[0].translateY as TranslateYTestType;

  t.is(translateY._animation._toValue, 100);
  t.is(translateY._animation._duration, 550);
});

test('using custom params', t => {
  const {result} = renderHook(() =>
    useTranslateVertically({
      fromValue: 100,
      toValue: 300,
      delay: 100,
      duration: 1000,
      easing: Easing.cubic
    })
  );

  const translateY = result.current.transform[0].translateY as TranslateYTestType;

  t.is(translateY._animation._toValue, 300);
  t.is(translateY._animation._duration, 1000);
  t.is(translateY._animation._delay, 100);
  t.is(translateY._animation._easing, Easing.cubic);
});
