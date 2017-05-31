// @flow
import sample from 'lodash/fp/sample';
import pipe from 'lodash/fp/pipe';
import without from 'lodash/fp/without';
import map from 'lodash/fp/map';
import {type State, type Slide, type Action, type Content} from './types';
import updateState from './update-state';

const getNextSlide = (state: State, slides: Array<Slide>): string => {
  return pipe(map('_id'), without(state.slides), sample)(slides);
};

export default function computeNextStep(
  state: State,
  action: Action,
  slidePool: Array<Slide>
): Content {
  // compute next state according to the action
  const nextState = updateState(state, [action]);
  const {lives = 0, slides = []} = nextState;

  // if no more lives, return endpoint content
  if (lives < 0) {
    return {
      ref: 'failExitNode',
      type: 'failure'
    };
  }

  // if all slides answered and still alive
  if (slides.length === 4 && lives >= 0) {
    return {
      ref: 'successExitNode',
      type: 'success'
    };
  }

  // if still alive, get next slide
  const nextSlideId = getNextSlide(nextState, slidePool);

  // with next slide return content object
  if (nextSlideId)
    return {
      ref: nextSlideId,
      type: 'slide'
    };

  return {
    ref: 'successExitNode',
    type: 'success'
  };
}
