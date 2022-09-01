import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {StoreState} from '../../reducers';
import type {Options, ProgressionFromAPI} from '../../types/common';

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
      const token: string = get('data.token', state);
      const progressionId: ProgressionFromAPI['_id'] = get('data.progression._id', state);
      const answer: StoreState['ui']['answers'] = get('ui.answers', state);
      const slideRef: string = get('ui.currentSlideRef', state);
      return services.fetchCorrection(slideRef, token, progressionId, answer);
    }
  });
  await dispatch(action);
};
