// @flow
import type {Config, Progression, NextStepParams, NextStepPayload} from '../../common/types';
import getConfig from '../../common/config';
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

    const nextSlide = selectNextSlide(config, slidePools, state);

    if (!nextSlide) {
      return {nextContent: {ref: 'failExitNode', type: 'failure'}};
    }

    return {
      nextContent: {
        ref: nextSlide._id,
        type: 'slide'
      }
    };
  } else {
    return {
      nextContent: {ref: 'failExitNode', type: 'failure'}
    };
  }
}
