import get from 'lodash/fp/get';
import includes from 'lodash/fp/includes';
import buildTask from '../../utils/redux-task';

export const PROGRESSION_JOIN_TEAM_REQUEST = '@@progression/JOIN_TEAM_REQUEST';
export const PROGRESSION_JOIN_TEAM_SUCCESS = '@@progression/JOIN_TEAM_SUCCESS';
export const PROGRESSION_JOIN_TEAM_FAILURE = '@@progression/JOIN_TEAM_FAILURE';

export const joinTeam = id => (dispatch, getState, {services}) => {
  const {Progressions} = services;

  const action = buildTask({
    types: [PROGRESSION_JOIN_TEAM_REQUEST, PROGRESSION_JOIN_TEAM_SUCCESS, PROGRESSION_JOIN_TEAM_FAILURE],
    task: () => Progressions.joinTeam(id),
    meta: {id}
  });

  return dispatch(action);
};
