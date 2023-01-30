import {useEffect, useState} from 'react';
import {Animated} from 'react-native';

/**
  - haveToWait: condition to wait for before to start the animation. if true: we have to wait.
  - animation: animation to start when "haveToWait" is false.
 */
const useAnimationWaiter = (haveToWait: boolean, animation: Animated.CompositeAnimation) => {
  const [readyToAnimate, setReadyToAnimate] = useState<boolean>(false);
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);

  useEffect(() => {
    if (haveToWait || animationStarted) {
      return;
    }

    if (!haveToWait && !readyToAnimate) {
      setReadyToAnimate(true);
      return;
    }

    if (readyToAnimate) {
      animation.start();
      setAnimationStarted(true);
    }
  }, [haveToWait, readyToAnimate, animationStarted, animation]);
};

export default useAnimationWaiter;
