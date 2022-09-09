import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import type {Dispatch} from 'redux';
import type {StoreState} from '../../reducers';
import type {Rank} from '../../types/common';
import type {Options} from '../../common';

export const RANK_FETCH_START_REQUEST = '@@rank/FETCH_START_REQUEST' as const;
export const RANK_FETCH_START_SUCCESS = '@@rank/FETCH_START_SUCCESS' as const;
export const RANK_FETCH_START_FAILURE = '@@rank/FETCH_START_FAILURE' as const;

export const RANK_FETCH_END_REQUEST = '@@rank/FETCH_END_REQUEST' as const;
export const RANK_FETCH_END_SUCCESS = '@@rank/FETCH_END_SUCCESS' as const;
export const RANK_FETCH_END_FAILURE = '@@rank/FETCH_END_FAILURE' as const;

type RankFetchStartRequestType = typeof RANK_FETCH_START_REQUEST;
type RankFetchStartSuccessType = typeof RANK_FETCH_START_SUCCESS;
type RankFetchStartFailureType = typeof RANK_FETCH_START_FAILURE;
type RankFetchEndRequestType = typeof RANK_FETCH_END_REQUEST;
type RankFetchEndSuccessType = typeof RANK_FETCH_END_SUCCESS;
type RankFetchEndFailureType = typeof RANK_FETCH_END_FAILURE;

export type RankRequestAction = {
  type: RankFetchStartRequestType | typeof RANK_FETCH_END_REQUEST;
};

export type RankSuccessAction = {
  type: RankFetchStartSuccessType | typeof RANK_FETCH_END_SUCCESS;
  payload: Rank;
};

export type RankFailureAction = {
  type: RankFetchStartFailureType | typeof RANK_FETCH_END_FAILURE;
};

export type RankAction = RankRequestAction | RankSuccessAction | RankFailureAction;

type RankStart = [RankFetchStartRequestType, RankFetchStartSuccessType, RankFetchStartFailureType];
type RankEnd = [RankFetchEndRequestType, RankFetchEndSuccessType, RankFetchEndFailureType];

export type Test = {
  types: RankStart | RankEnd;
  bailout?: (state: StoreState) => boolean;
};

export const fetchRank = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services, types, bailout}: Options<RankStart | RankEnd>
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
  return fetchRank(dispatch, getState, {
    services,
    types: [RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS, RANK_FETCH_START_FAILURE],
    bailout: (state: StoreState): boolean => {
      return has('data.rank.start', state);
    }
  });
};

export const fetchEndRank = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): RankAction => {
  return fetchRank(dispatch, getState, {
    services,
    types: [RANK_FETCH_END_REQUEST, RANK_FETCH_END_SUCCESS, RANK_FETCH_END_FAILURE],
    bailout: undefined
  });
};
