import {Dispatch} from 'redux';
import get from 'lodash/fp/get';
import buildTask from '@coorpacademy/redux-task';
import type {StoreState} from '../../reducers';
import type {Skill, ThunkOptions} from '../../types/common';

export const SKILL_FETCH_REQUEST = '@@skill/FETCH_REQUEST' as const;
export const SKILL_FETCH_SUCCESS = '@@skill/FETCH_SUCCESS' as const;
export const SKILL_FETCH_FAILURE = '@@skill/FETCH_FAILURE' as const;

export type fetchSkillAction = {
  type: typeof SKILL_FETCH_SUCCESS;
  payload: Skill;
};

export const fetchSkill =
  (skillRef: string) =>
  (dispatch: Dispatch, getState: () => StoreState, {services}: ThunkOptions): fetchSkillAction => {
    const action = buildTask({
      types: [SKILL_FETCH_REQUEST, SKILL_FETCH_SUCCESS, SKILL_FETCH_FAILURE],
      task: () => {
        const state = getState();
        const token = get(['data', 'token'], state);
        return services.fetchSkill(skillRef, token);
      }
    });
    return dispatch(action);
  };
