import buildTask from '@coorpacademy/redux-task';
import type {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import type {StoreState} from '../../reducers';
import {Options, Skill} from '../../types/common';

export const SKILLS_FETCH_REQUEST = '@@skills/FETCH_REQUEST' as const;
export const SKILLS_FETCH_SUCCESS = '@@skills/FETCH_SUCCESS' as const;
export const SKILLS_FETCH_FAILURE = '@@skills/FETCH_FAILURE' as const;

export interface ReceivedSkills extends AnyAction {
  type: '@@skills/FETCH_SUCCESS';
  payload: Skill[];
}

export type FetchSkillsAction = ThunkAction<Promise<void>, StoreState, Options, AnyAction>;
type Dispatch = ThunkDispatch<StoreState, Options, AnyAction>;

export const fetchSkills = (token: string): FetchSkillsAction =>
  buildTask({
    types: [SKILLS_FETCH_REQUEST, SKILLS_FETCH_SUCCESS, SKILLS_FETCH_FAILURE],
    task: (dispatch: Dispatch, getState: () => StoreState, {services}: Options) =>
      services.fetchSkills(token)
  });
