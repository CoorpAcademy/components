import {useCallback, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

type AnimationParams = Omit<Animated.TimingAnimationConfig, 'useNativeDriver'> & {
  property: 'translateX' | 'translateY' | keyof ViewStyle;
  fromValue: number;
  transform?: boolean;
  onFinished?: () => void;
};

type AnimationStep = AnimationConfiguration | AnimationParams;

type AnimationConfiguration =
  | AnimationParams
  | {
      type: 'sequence' | 'parallel' | 'stagger';
      steps: AnimationStep[];
    };

const sequence = function (
  animations: Array<Animated.CompositeAnimation>
): Animated.CompositeAnimation {
  let current = 0;
  return {
    start(callback?: Animated.EndCallback) {
      const onComplete = function (result: Animated.EndResult) {
        if (!result.finished) {
          callback && callback(result);
          return;
        } else {
          animations[current].onFinished?.();
        }

        current++;

        if (current === animations.length) {
          callback && callback(result);
          return;
        }

        animations[current].start(onComplete);
      };

      if (animations.length === 0) {
        callback?.({finished: true});
      } else {
        animations[current].start(onComplete);
      }
    },

    stop() {
      if (current < animations.length) {
        animations[current].stop();
      }
    },

    reset() {
      animations.forEach((animation, idx) => {
        if (idx <= current) {
          animation.reset();
        }
      });
      current = 0;
    }
  };
};

const parallel = function (
  animations: Array<Animated.CompositeAnimation>,
  config?: Animated.ParallelConfig
): Animated.CompositeAnimation {
  let doneCount = 0;
  // Make sure we only call stop() at most once for each animation
  const hasEnded = {};
  const stopTogether = !(config && config.stopTogether === false);

  const result = {
    start(callback?: Animated.EndCallback) {
      if (doneCount === animations.length) {
        callback && callback({finished: true});
        return;
      }

      animations.forEach((animation, idx) => {
        const cb = function (endResult: Animated.EndResult | {finished: boolean}) {
          hasEnded[idx] = true;
          doneCount++;
          if (doneCount === animations.length) {
            doneCount = 0;
            callback && callback(endResult);

            if (endResult.finished) {
              animation.onFinished?.();
            }
            return;
          }

          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        };

        if (!animation) {
          cb({finished: true});
        } else {
          animation.start(cb);
        }
      });
    },

    stop(): void {
      animations.forEach((animation, idx) => {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    },

    reset(): void {
      animations.forEach((animation, idx) => {
        animation.reset();
        hasEnded[idx] = false;
        doneCount = 0;
      });
    }
  };

  return result;
};

const Animation = {sequence, parallel};

const requireTransform = (property: AnimationParams['property']) =>
  property === 'translateX' || property === 'translateY';

const useAnimation = (configuration: AnimationConfiguration) => {
  if ('type' in configuration) {
    const anims = configuration.steps.map((_config: AnimationStep) => useAnimation(_config));
    const timing = Animation[configuration.type](anims.map(_anim => _anim.timing));
    const style = anims.map(_anim => _anim.style);
    return {timing, style};
  } else {
    const {property, fromValue = 0, toValue = 100, onFinished, ...othersParams} = configuration;
    const ref = useRef(new Animated.Value(fromValue)).current;

    const timing = Animated.timing(ref, {
      ...othersParams,
      toValue,
      useNativeDriver: true
    });

    const animatedStyle = requireTransform(property)
      ? {transform: [{[property]: ref}]}
      : {[property]: ref};

    timing.onFinished = onFinished;
    // if (onFinished) {
    //   console.log('attaching an onFinishedfor', property);
    //   timing.onFinished = () => {
    //     console.log('--- calling finished for', property);
    //     onFinished();
    //   };
    // }

    return {timing, style: animatedStyle};
  }
};

export default useAnimation;
