import type {Dispatch} from 'redux';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import type {StoreState} from '../../reducers';
import {ProgressionFromAPI, ProgressionAnswerItem} from '../../types/common';

export const NEXT_SLIDE = '@@slide/NEXT_SLIDE' as const;

type NextSlidePayload = {
  currentSlideRef: string;
  nextSlideRef: string;
  animationType: string;
  position: number;
};

export type NextSlide = {
  type: typeof NEXT_SLIDE;
  payload: NextSlidePayload;
};

export const nextSlide = (dispatch: Dispatch, getState: () => StoreState): NextSlide => {
  const state = getState();
  const progression = state.data.progression as ProgressionFromAPI;
  const correctAnswers = filter(
    (answer: ProgressionAnswerItem) => answer.isCorrect,
    progression.state.allAnswers
  );
  const isCorrect = progression.state.isCorrect;
  const payload = {
    currentSlideRef: get(['ui', 'currentSlideRef'], state),
    nextSlideRef: get(
      ['state', 'nextContent', 'ref'],
      state.data.progression as ProgressionFromAPI
    ),
    animationType: isCorrect ? 'unstack' : 'restack',
    position: isCorrect ? 5 : 4 - correctAnswers.length
  };
  const action = {
    type: NEXT_SLIDE,
    payload
  };

  return dispatch(action);
};
