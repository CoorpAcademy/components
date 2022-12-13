import {useRef} from 'react';
import {Animated, TransformsStyle, ViewStyle} from 'react-native';

export type AnimationParams = Omit<Animated.TimingAnimationConfig, 'useNativeDriver'> & {
  property: 'translateX' | 'translateY' | keyof ViewStyle;
  fromValue: number;
  transform?: boolean;
  onComplete?: () => void;
};

type AnimatedStyle =
  | {transform: Animated.AnimatedProps<TransformsStyle>[]}
  | Animated.AnimatedProps<ViewStyle>;

export type Animation = Animated.CompositeAnimation & {
  onComplete?: () => void;
  animatedStyle?: AnimatedStyle;
  revert: Animated.CompositeAnimation['start'];
};

const requireTransform = (property: AnimationParams['property']) =>
  property === 'translateX' || property === 'translateY';

const useAnimation = (params: AnimationParams): Animation => {
  const {property, fromValue = 0, toValue = 100, onComplete, ...othersParams} = params;
  const ref = useRef(new Animated.Value(fromValue)).current;
  const animatedProperty = {[property]: ref};

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

  const animation: Animation = {
    ...timing,
    animatedStyle: requireTransform(property) ? {transform: [animatedProperty]} : animatedProperty,
    onComplete,
    revert: revertTiming.start
  };

  return animation;
};

export default useAnimation;
