import buildTask from '@coorpacademy/redux-task';
import {Skill} from '../../types/skills';

export const SKILLS_FETCH_REQUEST = '@@skills/FETCH_REQUEST' as const;
export const SKILLS_FETCH_SUCCESS = '@@skills/FETCH_SUCCESS' as const;
export const SKILLS_FETCH_FAILURE = '@@skills/FETCH_FAILURE' as const;

export type ReceivedSkills = {
  type: '@@skills/FETCH_SUCCESS';
  payload: Skill[];
};

export const fetchSkills = (token: string) => buildTask({
    types: [SKILLS_FETCH_REQUEST, SKILLS_FETCH_SUCCESS, SKILLS_FETCH_FAILURE],
    task: (dispacth, getState, {services}) => services.fetchSkills(token)
  });
