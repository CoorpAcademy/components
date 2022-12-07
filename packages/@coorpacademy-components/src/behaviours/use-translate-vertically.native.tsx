import {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

type Params = Omit<Animated.TimingAnimationConfig, 'useNativeDriver' | 'toValue'> & {
  fromValue?: number;
  toValue?: Animated.TimingAnimationConfig['toValue'];
};

const useTranslateVertically = (params: Params = {}) => {
  const {fromValue = 0, toValue = 100, duration = 550, ...othersParams} = params;
  const translateY = useRef(new Animated.Value(fromValue)).current;

  const translate = useCallback(() => {
    Animated.timing(translateY, {
      ...othersParams,
      toValue,
      duration,
      useNativeDriver: true
    }).start();
  }, [duration, othersParams, toValue, translateY]);

  useEffect(translate, [translate]);

  return {transform: [{translateY}]};
};

export default useTranslateVertically;
