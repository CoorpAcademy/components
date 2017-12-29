// @flow
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import type {Config, NextStepParams, NextStepPayload, Progression, State} from '../../types';
import {getCorrection} from '../../check-answer-correctness';
import getConfig from '../../config';
import selectNextSlide from '../select-next-slide';

const hasRemainingLifeRequests = (state: State): boolean => state.remainingLifeRequests > 0;
const stepIsAlreadyExtraLife = (state: State): boolean => get('content.ref', state) === 'extraLife';

const checkParams = (params: NextStepParams, fields: Array<string>, context: string) =>
  map(field => {
    if (!params[field]) {
      throw new Error(`${field} is required for ${context}`);
    }
  }, fields);

export default function nextStepForAnswer(
  progression: Progression,
  params: NextStepParams
): NextStepPayload {
  checkParams(params, ['currentSlide', 'slidePools', 'answer'], 'learner.nextStepForAnswer');

  const {engine, state} = progression;
  const {answer, currentSlide, godmode = false, slidePools} = params;
  const config = (getConfig(engine): Config);
  const {isCorrect} = getCorrection(progression, currentSlide.question, answer, godmode);

  // if no more lives, return failure endpoint
  if (!isCorrect) {
    return !stepIsAlreadyExtraLife(state) && hasRemainingLifeRequests(state)
      ? {nextContent: {ref: 'extraLife', type: 'node'}}
      : {nextContent: {ref: 'failExitNode', type: 'failure'}};
  }

  const nextSlideId = selectNextSlide(config, slidePools, state);

  // If user has answered all questions, return success endpoint
  if (!nextSlideId) {
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
      ref: nextSlideId,
      type: 'slide'
    }
  };
}
