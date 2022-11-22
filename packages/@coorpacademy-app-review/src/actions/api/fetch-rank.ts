import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {Dispatch} from 'redux';
import type {
  Rank,
  Services,
  ThunkOptions
} from '@coorpacademy/review-services/es/types/services-types';
import type {StoreState} from '../../reducers';

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
  type: RankFetchStartRequestType | RankFetchEndRequestType;
};

export type RankSuccessAction = {
  type: RankFetchStartSuccessType | RankFetchEndSuccessType;
  payload: Rank;
};

export type RankFailureAction = {
  type: RankFetchStartFailureType | RankFetchEndFailureType;
};

export type RankAction = RankRequestAction | RankSuccessAction | RankFailureAction;

type RankStart = [RankFetchStartRequestType, RankFetchStartSuccessType, RankFetchStartFailureType];
type RankEnd = [RankFetchEndRequestType, RankFetchEndSuccessType, RankFetchEndFailureType];

const bailout =
  (path: string) =>
  (state: StoreState): boolean => {
    const value = get(path, state);
    return !Number.isNaN(value);
  };

export const fetchRank = (
  dispatch: Dispatch,
  getState: () => StoreState,
  services: Services,
  types: RankStart | RankEnd,
  path?: string
): RankAction => {
  const action = buildTask({
    types,
    task: () => {
      const state = getState();
      const token = get(['data', 'token'], state);
      return services.fetchRank(token);
    },
    bailout: path ? bailout(path) : undefined
  });

  return dispatch(action);
};

export const fetchStartRank = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: ThunkOptions
): RankAction => {
  return fetchRank(
    dispatch,
    getState,
    services,
    [RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS, RANK_FETCH_START_FAILURE],
    'data.rank.start'
  );
};

export const fetchEndRank = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: ThunkOptions
): RankAction => {
  return fetchRank(dispatch, getState, services, [
    RANK_FETCH_END_REQUEST,
    RANK_FETCH_END_SUCCESS,
    RANK_FETCH_END_FAILURE
  ]);
};
