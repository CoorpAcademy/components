// @flow
import includes from 'lodash/fp/includes';
import sample from 'lodash/fp/sample';
import {type State, type Slide, type Action, type Content} from './types';
import updateState from './update-state';

const getNextSlide = (state: State, slides: Array<Slide>): Slide => {
  const nextSlide = sample(slides);
  if (includes(nextSlide._id, state.slides)) {
    return getNextSlide(state, slides);
  }
  return nextSlide;
};

export default function computeNextStep(
  state: State,
  action: Action,
  slides: Array<Slide>
): Content {
  // compute next state according to the action
  const nextState = updateState(state, [action]);

  // if no more lives, return endpoint content
  if (nextState.lives < 0) {
    return {
      ref: 'failExitNode',
      type: 'failure'
    };
  }

  // if all slides answered and still alive
  if (nextState.slides.length === 4 && nextState.lives >= 0) {
    return {
      ref: 'successExitNode',
      type: 'success'
    };
  }

  // if still alive, get next slide
  const nextSlide = getNextSlide(nextState, slides);

  // with next slide return content object
  return {
    ref: nextSlide._id,
    type: 'slide'
  };
}
