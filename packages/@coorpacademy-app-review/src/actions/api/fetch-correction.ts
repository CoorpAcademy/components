import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {StoreState} from '../../reducers';
import type {CorrectionFromAPI, Options} from '../../types/common';

export const CORRECTION_FETCH_REQUEST = '@@correction/FETCH_REQUEST' as const;
export const CORRECTION_FETCH_SUCCESS = '@@correction/FETCH_SUCCESS' as const;
export const CORRECTION_FETCH_FAILURE = '@@correction/FETCH_FAILURE' as const;

export type FetchCorrection = {
  type: typeof CORRECTION_FETCH_SUCCESS;
  payload: CorrectionFromAPI | void;
};

export const fetchCorrection = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): FetchCorrection => {
  const action = buildTask({
    types: [CORRECTION_FETCH_REQUEST, CORRECTION_FETCH_SUCCESS, CORRECTION_FETCH_FAILURE],
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
