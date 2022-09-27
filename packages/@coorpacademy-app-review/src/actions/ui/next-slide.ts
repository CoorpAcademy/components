import type {Dispatch} from 'redux';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import type {StoreState} from '../../reducers';
import {ProgressionFromAPI} from '../../types/common';

export const NEXT_SLIDE = '@@slide/NEXT_SLIDE' as const;

type NextSlidePayload = {
  currentSlideRef: string;
  nextSlideRef: string;
  animationType: string;
};

export type NextSlide = {
  type: typeof NEXT_SLIDE;
  payload: NextSlidePayload;
};

export const nextSlide = (dispatch: Dispatch, getState: () => StoreState): NextSlide => {
  const state = getState();
  const payload = {
    currentSlideRef: get(['ui', 'currentSlideRef'], state),
    nextSlideRef: get(
      ['state', 'nextContent', 'ref'],
      state.data.progression as ProgressionFromAPI
    ),
    animationType: getOr(false, ['state', 'isCorrect'], state.data.progression)
      ? 'unstack'
      : 'restack'
  };
  const action = {
    type: NEXT_SLIDE,
    payload
  };

  return dispatch(action);
};
