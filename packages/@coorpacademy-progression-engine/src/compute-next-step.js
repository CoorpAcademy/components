// @flow
import map from 'lodash/fp/map';
import sample from 'lodash/fp/sample';
import without from 'lodash/fp/without';
import type {State, Slide, Content, Engine, MicroLearningConfig} from './types';
import {hasFinished, isAlive, hasRemainingLifeRequests} from './util';
import getConfig from './config';

export default function computeNextStep(
  engine: Engine,
  slidePool: Array<Slide>,
  state: State
): Content {
  const config = (getConfig(engine): MicroLearningConfig);
  // if no more lives, return failure endpoint
  if (!isAlive(state)) {
    return hasRemainingLifeRequests(state)
      ? {ref: 'extraLifeNode', type: 'extraLife'}
      : {ref: 'failExitNode', type: 'failure'};
  }

  // if all slides answered and still alive return success endpoint
  if (hasFinished(config.slidesToComplete, state)) {
    return {
      ref: 'successExitNode',
      type: 'success'
    };
  }

  const remainingSlides = without(state.slides, map('_id', slidePool));
  const nextSlide = sample(remainingSlides);

  // with next slide return content object
  return {
    ref: nextSlide,
    type: 'slide'
  };
}
