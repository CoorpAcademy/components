// @flow
import map from 'lodash/fp/map';
import sample from 'lodash/fp/sample';
import without from 'lodash/fp/without';
import {type State, type Slide, type Content} from './types';
import {hasFinished, isAlive} from './util';

const defaultState = {
  lives: 4,
  slides: [],
  isCorrect: true,
  nextContent: {
    ref: '',
    type: ''
  }
};

export default function computeNextStep(
  slidePool: Array<Slide>,
  state: State = defaultState
): Content {
  const {slides = []} = state;
  // if no more lives, return failure endpoint
  if (isAlive(state)) {
    return {
      ref: 'failExitNode',
      type: 'failure'
    };
  }

  // if all slides answered and still alive return success endpoint
  if (hasFinished(4, state)) {
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
