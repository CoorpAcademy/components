import type {Dispatch} from 'redux';
import get from 'lodash/fp/get';
import type {StoreState} from '../../reducers';
import {ProgressionFromAPI, ProgressionAnswerItem} from '../../types/common';
import {getProgressionSlidesRefs} from '../../common';

export const NEXT_SLIDE = '@@slide/NEXT_SLIDE' as const;

type NextSlidePayload = {
  currentSlideRef: string;
  nextSlideRef: string;
  animationType: string;
  allAnswers: ProgressionAnswerItem[];
  slides: string[];
};

export type NextSlide = {
  type: typeof NEXT_SLIDE;
  payload: NextSlidePayload;
};

export const nextSlide = (dispatch: Dispatch, getState: () => StoreState): NextSlide => {
  const state = getState();
  const progression = state.data.progression as ProgressionFromAPI;
  const isCorrect = progression.state.isCorrect;
  const payload = {
    currentSlideRef: get(['ui', 'currentSlideRef'], state),
    nextSlideRef: get(
      ['state', 'nextContent', 'ref'],
      state.data.progression as ProgressionFromAPI
    ),
    animationType: isCorrect ? 'unstack' : 'restack',
    allAnswers: progression.state.allAnswers,
    slides: getProgressionSlidesRefs(progression)
  };
  const action = {
    type: NEXT_SLIDE,
    payload
  };

  return dispatch(action);
};
