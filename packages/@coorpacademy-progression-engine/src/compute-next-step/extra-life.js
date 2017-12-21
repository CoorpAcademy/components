// @flow
import type {Config, Progression, NextStepParams, NextStepPayload} from '../types';
import getConfig from '../config';
import selectNextSlide from './select-next-slide';

export default function nextStepForExtraLife(
  progression: Progression,
  params: NextStepParams
): NextStepPayload {
  const {engine, state} = progression;
  const config = (getConfig(engine): Config);
  if (params.isAccepted) {
    const {slidePools} = params;
    if (!slidePools) {
      throw new Error('params.slidePools is required for learner.nextStepForExtraLife');
    }

    const nextSlideId = selectNextSlide(config, slidePools, state);

    if (!nextSlideId) {
      return {nextContent: {ref: 'failExitNode', type: 'failure'}};
    }

    return {
      nextContent: {
        ref: nextSlideId,
        type: 'slide'
      }
    };
  } else {
    return {
      nextContent: {ref: 'failExitNode', type: 'failure'}
    };
  }
}
