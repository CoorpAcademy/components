import buildTask from '@coorpacademy/redux-task';
import {Action, Dispatch} from 'redux';
import type {StoreState} from '../../reducers';
import {Options, Skill} from '../../types/common';

export const SKILLS_FETCH_REQUEST = '@@skills/FETCH_REQUEST' as const;
export const SKILLS_FETCH_SUCCESS = '@@skills/FETCH_SUCCESS' as const;
export const SKILLS_FETCH_FAILURE = '@@skills/FETCH_FAILURE' as const;

export type ReceivedSkills = {
  type: '@@skills/FETCH_SUCCESS';
  payload: Skill[];
};

export const fetchSkills = (token: string): Action =>
  buildTask({
    types: [SKILLS_FETCH_REQUEST, SKILLS_FETCH_SUCCESS, SKILLS_FETCH_FAILURE],
    task: (dispatch: Dispatch, getState: () => StoreState, {services}: Options) =>
      services.fetchSkills(token)
  });
