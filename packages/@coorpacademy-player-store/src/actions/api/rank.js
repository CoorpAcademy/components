// @flow

import buildTask from '@coorpacademy/redux-task';
import {getStartRank} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {
  Action,
  Dispatch,
  DispatchedAction,
  GetState,
  ThunkAction,
} from '../../definitions/redux';

export const RANK_FETCH_START_REQUEST: string = '@@rank/FETCH_START_REQUEST';
export const RANK_FETCH_START_SUCCESS: string = '@@rank/FETCH_START_SUCCESS';
export const RANK_FETCH_START_FAILURE: string = '@@rank/FETCH_START_FAILURE';

export const RANK_FETCH_END_REQUEST: string = '@@rank/FETCH_END_REQUEST';
export const RANK_FETCH_END_SUCCESS: string = '@@rank/FETCH_END_SUCCESS';
export const RANK_FETCH_END_FAILURE: string = '@@rank/FETCH_END_FAILURE';

const fetchRank = (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services},
  {types, bailout}
): DispatchedAction => {
  const {LeaderBoard} = services;

  const action: Action = buildTask({
    types,
    task: () => LeaderBoard.getRank(),
    bailout,
  });

  return dispatch(action);
};

export const fetchStartRank =
  (): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    return fetchRank(dispatch, getState, ({services}: {services: Services}), {
      bailout: getStartRank,
      types: [RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS, RANK_FETCH_START_FAILURE],
    });
  };

export const fetchEndRank =
  (): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    return fetchRank(dispatch, getState, ({services}: {services: Services}), {
      types: [RANK_FETCH_END_REQUEST, RANK_FETCH_END_SUCCESS, RANK_FETCH_END_FAILURE],
      bailout: undefined,
    });
  };
