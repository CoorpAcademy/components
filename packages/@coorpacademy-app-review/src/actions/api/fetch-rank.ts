import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import type {Dispatch} from 'redux';
import type {StoreState} from '../../reducers';
import type {Options, Rank} from '../../types/common';

export const RANK_FETCH_START_REQUEST = '@@rank/FETCH_START_REQUEST';
export const RANK_FETCH_START_SUCCESS = '@@rank/FETCH_START_SUCCESS';
export const RANK_FETCH_START_FAILURE = '@@rank/FETCH_START_FAILURE';

export const RANK_FETCH_END_REQUEST = '@@rank/FETCH_END_REQUEST';
export const RANK_FETCH_END_SUCCESS = '@@rank/FETCH_END_SUCCESS';
export const RANK_FETCH_END_FAILURE = '@@rank/FETCH_END_FAILURE';

export type RankRequestAction = {
  type: typeof RANK_FETCH_START_REQUEST | typeof RANK_FETCH_END_SUCCESS;
};

export type RankSuccessAction = {
  type: typeof RANK_FETCH_START_SUCCESS | typeof RANK_FETCH_END_REQUEST;
  payload: Rank;
};

export type RankFailureAction = {
  type: typeof RANK_FETCH_START_FAILURE | typeof RANK_FETCH_END_FAILURE;
};

export type RankAction = RankRequestAction | RankSuccessAction | RankFailureAction;

export type Test = {
  types: string[];
  bailout?: (state: StoreState) => boolean;
};

export const fetchRank = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options,
  {types, bailout}: Test
): RankAction => {
  const action = buildTask({
    types,
    task: () => {
      const state = getState();
      const token = get(['data', 'token'], state);
      return services.fetchRank(token);
    },
    bailout
  });

  return dispatch(action);
};

export const fetchStartRank = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): RankAction => {
  return fetchRank(
    dispatch,
    getState,
    {services},
    {
      types: [RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS, RANK_FETCH_START_FAILURE],
      bailout: (state: StoreState): boolean => {
        return has('data.rank.start', state);
      }
    }
  );
};

export const fetchEndRank = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): RankAction => {
  return fetchRank(
    dispatch,
    getState,
    {services},
    {
      types: [RANK_FETCH_END_REQUEST, RANK_FETCH_END_SUCCESS, RANK_FETCH_END_FAILURE],
      bailout: undefined
    }
  );
};
