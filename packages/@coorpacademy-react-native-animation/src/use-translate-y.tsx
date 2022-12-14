import {Animated} from 'react-native';
import useAnimation, {AnimationParams, TransformAnimation} from './use-timing';

export type TranslateY = TransformAnimation<{transform: {translateY: Animated.Value}[]}>;

const useTranslateY = (animationParams: AnimationParams): TranslateY => {
  const {animation, ref} = useAnimation(animationParams);
  const animatedStyle = {transform: [{translateY: ref}]};

  const translateY: TranslateY = {
    ...animation,
    animatedStyle
  };

  return translateY;
};

export default useTranslateY;
