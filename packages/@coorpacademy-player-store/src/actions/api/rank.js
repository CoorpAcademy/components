import buildTask from '@coorpacademy/redux-task';
import {getStartRank} from '../../utils/state-extract';

export const RANK_FETCH_START_REQUEST = '@@rank/FETCH_START_REQUEST';
export const RANK_FETCH_START_SUCCESS = '@@rank/FETCH_START_SUCCESS';
export const RANK_FETCH_START_FAILURE = '@@rank/FETCH_START_FAILURE';

export const RANK_FETCH_END_REQUEST = '@@rank/FETCH_END_REQUEST';
export const RANK_FETCH_END_SUCCESS = '@@rank/FETCH_END_SUCCESS';
export const RANK_FETCH_END_FAILURE = '@@rank/FETCH_END_FAILURE';

const fetchRank = (dispatch, getState, {services}, {types, bailout}) => {
  const {LeaderBoard} = services;

  const action = buildTask({
    types,
    task: () => LeaderBoard.getRank(),
    bailout
  });

  return dispatch(action);
};

export const fetchStartRank = () => (dispatch, getState, {services}) => {
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

export const fetchEndRank = () => (dispatch, getState, {services}) => {
  return fetchRank(
    dispatch,
    getState,
    {services},
    {
      types: [RANK_FETCH_END_REQUEST, RANK_FETCH_END_SUCCESS, RANK_FETCH_END_FAILURE]
    }
  );
};
