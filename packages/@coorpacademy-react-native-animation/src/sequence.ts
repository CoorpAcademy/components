/*
  This file replicates Animated.sequence
  https://github.com/facebook/react-native/blob/main/Libraries/Animated/AnimatedImplementation.js#L303
  and adds static callback onComplete usage
*/
import {Animated} from 'react-native';
import type {Animation} from '.';

const sequence = function (
  animations: Array<Animation | Animated.CompositeAnimation>
): Animated.CompositeAnimation {
  let current = 0;
  return {
    start(endCallback?: Animated.EndCallback) {
      const onComplete = function (result: Animated.EndResult) {
        if (!result.finished) {
          endCallback && endCallback(result);
          return;
        } else {
          const currentAnimation = animations[current];
          if ('onComplete' in currentAnimation) {
            currentAnimation.onComplete?.();
          }
        }

        current++;

        if (current === animations.length) {
          endCallback && endCallback(result);
          return;
        }

        animations[current].start(onComplete);
      };

      if (animations.length === 0) {
        endCallback?.({finished: true});
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

export default sequence;
