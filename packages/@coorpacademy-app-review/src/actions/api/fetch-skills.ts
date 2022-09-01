import buildTask from '@coorpacademy/redux-task';
import getOr from 'lodash/fp/getOr';
import type {Dispatch} from 'redux';
import type {StoreState} from '../../reducers';
import type {Options, Skill} from '../../types/common';

export const SKILLS_FETCH_REQUEST = '@@skills/FETCH_REQUEST' as const;
export const SKILLS_FETCH_SUCCESS = '@@skills/FETCH_SUCCESS' as const;
export const SKILLS_FETCH_FAILURE = '@@skills/FETCH_FAILURE' as const;

export type ReceivedSkills = {
  type: '@@skills/FETCH_SUCCESS';
  payload: Skill[];
};

export const fetchSkills = async (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): Promise<void> => {
  const action = buildTask({
    types: [SKILLS_FETCH_REQUEST, SKILLS_FETCH_SUCCESS, SKILLS_FETCH_FAILURE],
    task: () => {
      const state = getState();
      const token = getOr('', ['data', 'token'], state);
      // raised issue on: https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/62072
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return services.fetchSkills(token!);
    }
  });

  await dispatch(action);
};
