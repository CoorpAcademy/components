import test from 'ava';

import {renderHook} from '@testing-library/react-native';
import {Animated} from 'react-native';
import useAnimationWaiter from '../use-animation-waiter';
import useTranslateY from '../use-translate-y';

test('should start animation when condition is fulfilled', t => {
  t.plan(1);
  const isLoading = false;
  const animation = renderHook(() =>
    useTranslateY({fromValue: 0, toValue: 100})
  ) as unknown as Animated.CompositeAnimation;

  animation.start = () => {
    t.pass();
  };

  renderHook(() => useAnimationWaiter(isLoading, animation));
});

test('should not start animation while condition is still happening', t => {
  t.plan(0);
  const isLoading = true;
  const animation = renderHook(() =>
    useTranslateY({fromValue: 0, toValue: 100})
  ) as unknown as Animated.CompositeAnimation;

  animation.start = () => {
    t.fail();
  };

  renderHook(() => useAnimationWaiter(isLoading, animation));
});
