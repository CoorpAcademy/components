// @flow
import get from 'lodash/fp/get';
import type {Config, NextStepParams, NextStepPayload, Progression, State} from '../../common/types';
import {getCorrection} from '../../common/check-answer-correctness';
import getConfig from '../../common/config';
import selectNextSlide from './select-next-slide';

const hasRemainingLifeRequests = (state: State): boolean => state.remainingLifeRequests > 0;
const stepIsAlreadyExtraLife = (state: State): boolean => get('content.ref', state) === 'extraLife';

export default function nextStepForAnswer(
  progression: Progression,
  params: NextStepParams
): NextStepPayload {
  const {engine, state} = progression;
  const {answer, currentSlide, godmode = false, slidePools} = params;

  if (!slidePools) {
    throw new Error('params.slidePools is required for learner.nextStepForAnswer');
  }

  if (!currentSlide) {
    throw new Error('params.currentSlide is required for learner.nextStepForAnswer');
  }

  if (!answer) {
    throw new Error('params.answer is required for adaptive.nextStepForAnswer');
  }

  const config = (getConfig(engine): Config);
  const {isCorrect} = getCorrection(progression, currentSlide.question, answer, godmode);

  // if no more lives, return failure endpoint
  if (!isCorrect) {
    return !stepIsAlreadyExtraLife(state) && hasRemainingLifeRequests(state)
      ? {nextContent: {ref: 'extraLife', type: 'node'}}
      : {nextContent: {ref: 'failExitNode', type: 'failure'}};
  }

  const nextSlide = selectNextSlide(config, slidePools, state);

  // If user has answered all questions, return success endpoint
  if (!nextSlide) {
    return {
      isCorrect,
      nextContent: {
        ref: 'successExitNode',
        type: 'success'
      }
    };
  }

  // with next slide return content object
  return {
    isCorrect,
    nextContent: {
      ref: nextSlide._id,
      type: 'slide'
    }
  };
}
