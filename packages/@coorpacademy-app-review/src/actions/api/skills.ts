import buildTask from '@coorpacademy/redux-task';
import {Skills} from '../../types/skills';

export const FETCH_SKILL_REQUEST = '@@api/skills/FETCH_REQUEST';
export const FETCH_SKILL_SUCCESS = '@@api/skills/FETCH_SUCCESS';
export const FETCH_SKILL_FAILURE = '@@api/skills/FETCH_FAILURE';

export type FetchSkillRequest = {
  type: '@@api/skills/FETCH_REQUEST';
};

export type FetchSkillSuccess = {
  type: '@@api/skills/FETCH_SUCCESS';
  payload: Skills;
};

export type FetchSkillFailure = {
  type: '@@api/skills/FETCH_FAILURE';
  payload: Error;
};

export type FetchSkillAction = FetchSkillRequest | FetchSkillSuccess | FetchSkillFailure;

export const fetchSkills =
  (token: string) =>
  (dispatch, getState, {services}) => {
    const action = buildTask({
      types: [FETCH_SKILL_REQUEST, FETCH_SKILL_SUCCESS, FETCH_SKILL_FAILURE],
      task: () => services.fetchSkills(token)
    });
    return dispatch(action);
  };
