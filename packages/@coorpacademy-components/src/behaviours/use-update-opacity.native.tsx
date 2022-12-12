import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

type Params = Omit<Animated.TimingAnimationConfig, 'useNativeDriver' | 'toValue'> & {
  onFadeInFinished?: () => void;
  onFadeOutFinished?: () => void;
};

const useUpdateOpacity = (params: Params = {}) => {
  const {duration = 750, onFadeInFinished, onFadeOutFinished, ...othersParams} = params;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      ...othersParams,
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start(({finished}) => {
      if (finished) {
        onFadeInFinished?.();
      }
    });
  }, [duration, fadeAnim, onFadeInFinished, othersParams]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      ...othersParams,
      toValue: 0,
      duration,
      useNativeDriver: true
    }).start(({finished}) => {
      if (finished) {
        onFadeOutFinished?.();
      }
    });
  }, [duration, fadeAnim, onFadeOutFinished, othersParams]);

  return {fadeIn, fadeOut, animatedOpacity: {opacity: fadeAnim}};
};

export default useUpdateOpacity;
