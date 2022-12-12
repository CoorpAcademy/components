import {Animated} from 'react-native';
import useAnimation, {AnimationParams, TransformAnimation} from './use-timing';

export type TranslateX = TransformAnimation<{transform: {translateX: Animated.Value}[]}>;

const useTranslateX = (animationParams: AnimationParams): TranslateX => {
  const {animation, ref} = useAnimation(animationParams);
  const animatedStyle = {transform: [{translateX: ref}]};

  const translateX: TranslateX = {
    ...animation,
    animatedStyle
  };

  return translateX;
};

export default useTranslateX;
