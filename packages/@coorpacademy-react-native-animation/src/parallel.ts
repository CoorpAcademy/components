/*
  This file replicates Animated.parallel
  https://github.com/facebook/react-native/blob/main/Libraries/Animated/AnimatedImplementation.js#L364
  and adds static callback onComplete usage
*/
import {Animated} from 'react-native';
import type {Animation} from './use-animation.native';

const parallel = function (
  animations: Array<Animation | Animated.CompositeAnimation>,
  config?: Animated.ParallelConfig
): Animated.CompositeAnimation {
  let doneCount = 0;
  // Make sure we only call stop() at most once for each animation
  const hasEnded: {[key: string]: boolean} = {};
  const stopTogether = !(config && config.stopTogether === false);

  const result = {
    start(endCallback?: Animated.EndCallback) {
      if (doneCount === animations.length) {
        endCallback && endCallback({finished: true});
        return;
      }

      animations.forEach((animation, idx) => {
        const _endCallback = function (endResult: Animated.EndResult | {finished: boolean}) {
          hasEnded[idx] = true;
          doneCount++;
          if (doneCount === animations.length) {
            doneCount = 0;
            endCallback && endCallback(endResult);

            if (endResult.finished && 'onComplete' in animation) {
              animation.onComplete?.();
            }
            return;
          }

          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        };

        if (!animation) {
          _endCallback({finished: true});
        } else {
          animation.start(_endCallback);
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

export default parallel;
