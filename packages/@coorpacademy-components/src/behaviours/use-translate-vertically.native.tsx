import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

type Params = Omit<Animated.TimingAnimationConfig, 'useNativeDriver' | 'toValue'> & {
  onFinished?: () => void;
  fromValue?: number;
  toValue?: Animated.TimingAnimationConfig['toValue'];
};

const useTranslateVertically = (params: Params = {}) => {
  const {fromValue = 0, toValue = 100, duration = 550, onFinished, ...othersParams} = params;
  const translateY = useRef(new Animated.Value(fromValue)).current;

  const translate = useCallback(() => {
    Animated.timing(translateY, {
      ...othersParams,
      toValue,
      duration,
      useNativeDriver: true
    }).start(({finished}) => {
      if (finished) {
        onFinished?.();
      }
    });
  }, [onFinished, duration, othersParams, toValue, translateY]);

  return {translate, animatedY: {transform: [{translateY}]}};
};

export default useTranslateVertically;
