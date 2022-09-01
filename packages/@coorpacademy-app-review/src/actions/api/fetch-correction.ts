import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import type {StoreState} from '../../reducers';
import type {Options} from '../../types/common';

export const CORRECTION_FETCH_REQUEST = '@@correction/FETCH_REQUEST' as const;
export const CORRECTION_FETCH_SUCCESS = '@@correction/FETCH_SUCCESS' as const;
export const CORRECTION_FETCH_FAILURE = '@@correction/FETCH_FAILURE' as const;

export const fetchCorrection = async (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): Promise<void> => {
  const action = buildTask({
    types: [CORRECTION_FETCH_REQUEST, CORRECTION_FETCH_SUCCESS, CORRECTION_FETCH_FAILURE],
    task: () => {
      const state = getState();
      const token = getOr('', ['data', 'token'], state);
      const progressionId = get(['data', 'progression', '_id'], state);
      const answer = get(['ui', 'answers'], state);
      const slideRef = get(['ui', 'currentSlideRef'], state);
      // token is always defined (either an empty string on an actual one)
      // raised issue on: https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/62072
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return services.fetchCorrection(slideRef, token!, progressionId, answer);
    }
  });
  await dispatch(action);
};
