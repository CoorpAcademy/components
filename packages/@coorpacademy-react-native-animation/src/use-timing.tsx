import {useRef, useCallback, useEffect} from 'react';
import {Animated} from 'react-native';

export type AnimationParams = Omit<Animated.TimingAnimationConfig, 'useNativeDriver'> & {
  fromValue: number;
  onComplete?: () => void;
};

export type TransformAnimation<T> = Animated.CompositeAnimation & {
  onComplete?: () => void;
  animatedStyle?: T;
  revert: Animated.CompositeAnimation['start'];
};

type Timing = {
  animation: Animated.CompositeAnimation & {
    onComplete?: () => void;
    reset: (callback: Animated.EndCallback) => void;
    start: Animated.CompositeAnimation['start'];
    revert: Animated.CompositeAnimation['start'];
  };
  ref: Animated.Value;
};

const useTiming = (params: AnimationParams): Timing => {
  const {fromValue = 0, toValue = 100, onComplete, duration, delay, easing} = params;

  const animatedValue = useRef(new Animated.Value(fromValue)).current;

  // Créer les animations et les mémoriser
  const timingRef = useRef<Animated.CompositeAnimation | null>(null);
  const revertTimingRef = useRef<Animated.CompositeAnimation | null>(null);

  // Recréer les animations seulement si les paramètres changent
  useEffect(() => {
    timingRef.current = Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      easing,
      useNativeDriver: true
    });

    revertTimingRef.current = Animated.timing(animatedValue, {
      toValue: fromValue,
      duration,
      delay,
      easing,
      useNativeDriver: true
    });
  }, [animatedValue, toValue, fromValue, duration, delay, easing]);

  // Cleanup: stop animations on unmount
  useEffect(() => {
    return () => {
      timingRef.current?.stop();
      revertTimingRef.current?.stop();
    };
  }, []);

  const start = useCallback((cb?: Animated.EndCallback) => {
    animatedValue.setValue(fromValue);
    timingRef.current?.start((result: Animated.EndResult) => {
      onComplete?.();
      return cb?.(result);
    });
  }, [animatedValue, fromValue, onComplete]);

  const reset = useCallback(() => {
    animatedValue.setValue(fromValue);
  }, [animatedValue, fromValue]);

  const revert = useCallback((cb?: Animated.EndCallback) => {
    revertTimingRef.current?.start(cb);
  }, []);

  const animation = {
    start,
    stop: () => timingRef.current?.stop(),
    reset,
    revert
  };

  return {animation: animation as any, ref: animatedValue};
};

export default useTiming;
