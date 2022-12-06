import {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useTranslateVertically = ({fromValue = 0, toValue = 100, duration = 550}) => {
  const translateY = useRef(new Animated.Value(fromValue)).current;

  const translate = useCallback(() => {
    Animated.timing(translateY, {
      toValue,
      duration,
      useNativeDriver: true
    }).start();
  }, [duration, toValue, translateY]);

  useEffect(translate, [translate]);

  return {transform: [{translateY}]};
};

export default useTranslateVertically;
