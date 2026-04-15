import {Animated, ViewStyle} from 'react-native';
import useAnimation, {AnimationParams, TransformAnimation} from './use-timing';

export type AnimateProp = TransformAnimation<{[property: string]: Animated.Value}>;

export type AnimatePropParams = AnimationParams & {
  property: keyof ViewStyle;
};

const useAnimateProp = (params: AnimatePropParams): AnimateProp => {
  const {property, ...animationParams} = params;
  const {animation, ref} = useAnimation(animationParams);
  const animatedStyle = {[property]: ref};

  const translateX: AnimateProp = {
    start: animation.start,
    stop: animation.stop,
    reset: animation.reset,
    revert: animation.revert,
    animatedStyle
  };

  return translateX;
};

export default useAnimateProp;
