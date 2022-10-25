import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {Dispatch} from 'redux';
import type {StoreState} from '../../reducers';
import type {ThunkOptions, SkillsToReview} from '../../types/common';

export const SKILLS_FETCH_REQUEST = '@@skills/FETCH_REQUEST' as const;
export const SKILLS_FETCH_SUCCESS = '@@skills/FETCH_SUCCESS' as const;
export const SKILLS_FETCH_FAILURE = '@@skills/FETCH_FAILURE' as const;

export type ReceivedSkills = {
  type: typeof SKILLS_FETCH_SUCCESS;
  payload: SkillsToReview[];
};

export const fetchSkills = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: ThunkOptions
): ReceivedSkills => {
  const action = buildTask({
    types: [SKILLS_FETCH_REQUEST, SKILLS_FETCH_SUCCESS, SKILLS_FETCH_FAILURE],
    task: () => {
      const state = getState();
      const token = get(['data', 'token'], state);
      return services.fetchSkills(token);
    }
  });

  return dispatch(action);
};
