// @flow
import map from 'lodash/fp/map';
import sample from 'lodash/fp/sample';
import without from 'lodash/fp/without';
import type {State, Slide, Content, Engine, MicroLearningConfig} from './types';
import {hasFinished, isAlive} from './util';
import getConfig from './config';

const defaultState = {
  lives: 1,
  slides: [],
  stars: 0,
  requestedClues: [],
  isCorrect: true,
  nextContent: {
    ref: '',
    type: ''
  },
  step: {
    current: 0,
    total: 4
  }
};

export default function computeNextStep(
  engine: Engine,
  slidePool: Array<Slide>,
  state: State = defaultState
): Content {
  const config = (getConfig(engine): MicroLearningConfig);
  const {slides = []} = state;
  // if no more lives, return failure endpoint
  if (!isAlive(state)) {
    return {
      ref: 'failExitNode',
      type: 'failure'
    };
  }

  // if all slides answered and still alive return success endpoint
  if (hasFinished(config.slidesToComplete, state)) {
    return {
      ref: 'successExitNode',
      type: 'success'
    };
  }

  const remainingSlides = without(slides, map('_id', slidePool));
  const nextSlide = sample(remainingSlides);

  // with next slide return content object
  return {
    ref: nextSlide,
    type: 'slide'
  };
}
