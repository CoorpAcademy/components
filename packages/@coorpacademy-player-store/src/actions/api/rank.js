// @flow

import buildTask from '@coorpacademy/redux-task';
import {getStartRank} from '../../utils/state-extract';
import type {Dispatch, RankActions, GetState} from '../../types';

export const RANK_FETCH_START_REQUEST: string = '@@rank/FETCH_START_REQUEST';
export const RANK_FETCH_START_SUCCESS: string = '@@rank/FETCH_START_SUCCESS';
export const RANK_FETCH_START_FAILURE: string = '@@rank/FETCH_START_FAILURE';

export const RANK_FETCH_END_REQUEST: string = '@@rank/FETCH_END_REQUEST';
export const RANK_FETCH_END_SUCCESS: string = '@@rank/FETCH_END_SUCCESS';
export const RANK_FETCH_END_FAILURE: string = '@@rank/FETCH_END_FAILURE';

const fetchRank = (
  dispatch: Dispatch,
  getState: GetState,
  {services},
  {types, bailout}
): Dispatch => {
  const {LeaderBoard} = services;

  const action: RankActions = buildTask({
    types,
    task: () => LeaderBoard.getRank(),
    bailout
  });

  return dispatch(action);
};

export const fetchStartRank = () => (dispatch: Dispatch, getState: GetState, {services}): void => {
  return fetchRank(
    dispatch,
    getState,
    {services},
    {
      bailout: getStartRank,
      types: [RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS, RANK_FETCH_START_FAILURE]
    }
  );
};

export const fetchEndRank = () => (dispatch: Dispatch, getState: GetState, {services}): void => {
  return fetchRank(
    dispatch,
    getState,
    {services},
    {
      types: [RANK_FETCH_END_REQUEST, RANK_FETCH_END_SUCCESS, RANK_FETCH_END_FAILURE]
    }
  );
};
