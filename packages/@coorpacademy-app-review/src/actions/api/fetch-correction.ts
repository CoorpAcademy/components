import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {CorrectionFromAPI} from '@coorpacademy/review-services/es/types/services-types';
import type {ThunkOptions} from '../../types/common';
import type {StoreState} from '../../reducers';

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
  {services}: ThunkOptions
): ReceivedCorrection => {
  const state = getState();
  const slideRef = get(['ui', 'currentSlideRef'], state);
  const token = get(['data', 'token'], state);
  const progressionId = get(['data', 'progression', '_id'], state);
  const answer = get(['ui', 'answers', slideRef], state);

  const action = buildTask({
    types: [CORRECTION_FETCH_REQUEST, CORRECTION_FETCH_SUCCESS, CORRECTION_FETCH_FAILURE],
    meta: {slideRef},
    task: () => services.fetchCorrection(slideRef, token, progressionId, answer)
  });
  return dispatch(action);
};
