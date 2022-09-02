import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {StoreState} from '../../reducers';
import type {CorrectionFromAPI, Options} from '../../types/common';

export const CORRECTION_FETCH_REQUEST = '@@correction/FETCH_REQUEST' as const;
export const CORRECTION_FETCH_SUCCESS = '@@correction/FETCH_SUCCESS' as const;
export const CORRECTION_FETCH_FAILURE = '@@correction/FETCH_FAILURE' as const;

export type FetchCorrection = {
  type: typeof CORRECTION_FETCH_REQUEST;
  meta: {slideRef: string};
};

export type ReceivedCorrection = {
  type: typeof CORRECTION_FETCH_SUCCESS;
  payload: CorrectionFromAPI | void;
  meta: {slideRef: string};
};

export const fetchCorrection = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): ReceivedCorrection => {
  const action = buildTask({
    types: [CORRECTION_FETCH_REQUEST, CORRECTION_FETCH_SUCCESS, CORRECTION_FETCH_FAILURE],
    meta: {slideRef: get(['ui', 'currentSlideRef'], getState())},
    task: () => {
      const state = getState();
      const token = get(['data', 'token'], state);
      const progressionId = get(['data', 'progression', '_id'], state);
      const answer = get(['ui', 'answers'], state);
      const slideRef = get(['ui', 'currentSlideRef'], state);
      return services.fetchCorrection(slideRef, token, progressionId, answer);
    }
  });
  return dispatch(action);
};
