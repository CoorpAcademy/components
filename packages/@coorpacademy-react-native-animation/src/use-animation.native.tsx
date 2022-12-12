import {useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';
import _sequence from './sequence';
import _parallel from './parallel';

export type AnimationParams = Omit<Animated.TimingAnimationConfig, 'useNativeDriver'> & {
  property: 'translateX' | 'translateY' | keyof ViewStyle;
  fromValue: number;
  transform?: boolean;
  onComplete?: () => void;
};

type AnimatedProperty = {
  [x: string]: Animated.Value;
};

type Style = {transform: AnimatedProperty[]} | AnimatedProperty;
export type RecursiveArray<T> = (T | RecursiveArray<T>)[];

type Animation = {timing: Animated.CompositeAnimation; style: RecursiveArray<Style>};

type Sequence = (animations: (AnimationParams | Animation)[]) => Animation;
type Parallel = (animations: (AnimationParams | Animation)[]) => Animation;
// type Stagger = (animations: (AnimationParams | Animation)[]) => Animation;

export type ExtendedAnimation = Animated.CompositeAnimation & {
  onComplete?: () => void;
};

const requireTransform = (property: AnimationParams['property']) =>
  property === 'translateX' || property === 'translateY';

const useAnimation = (params: AnimationParams | Animation): Animation => {
  if (!('property' in params)) {
    return params;
  }

  const {property, fromValue = 0, toValue = 100, onComplete, ...othersParams} = params;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(new Animated.Value(fromValue)).current;

  const timing: ExtendedAnimation = Animated.timing(ref, {
    ...othersParams,
    toValue,
    useNativeDriver: true
  });

  const animatedStyle = requireTransform(property)
    ? {transform: [{[property]: ref}]}
    : {[property]: ref};

  if (onComplete) {
    timing.onComplete = onComplete;
  }

  return {timing, style: [animatedStyle]};
};

type OrganiseFunc = typeof _sequence | typeof _parallel;

const organise = (func: OrganiseFunc, allParams: (AnimationParams | Animation)[]): Animation => {
  const animations = allParams.map(params => useAnimation(params));

  return {
    timing: func(animations.map(a => a.timing)),
    style: animations.map(a => a.style)
  };
};

const sequence: Sequence = allParams => organise(_sequence, allParams);
const parallel: Parallel = allParams => organise(_parallel, allParams);
// const stagger: Stagger = allParams => organise(Animated.stagger, allParams);

export {useAnimation, sequence, parallel};
