import {useRef} from 'react';
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
    revert: Animated.CompositeAnimation['start'];
  };
  ref: Animated.Value;
};

const useTiming = (params: AnimationParams): Timing => {
  const {fromValue = 0, toValue = 100, onComplete, ...othersParams} = params;
  const ref = useRef(new Animated.Value(fromValue)).current;

  const timing = Animated.timing(ref, {
    ...othersParams,
    toValue,
    useNativeDriver: true
  });

  const revertTiming = Animated.timing(ref, {
    ...othersParams,
    toValue: fromValue,
    useNativeDriver: true
  });

  const animation = {
    ...timing,
    onComplete,
    revert: revertTiming.start
  };

  return {animation, ref};
};

export default useTiming;
