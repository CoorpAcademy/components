import get from 'lodash/fp/get';
import buildTask from '../../utils/redux-task';
import {getContent, getRecommendations} from '../../utils/state-extract';

export const RECO_FETCH_REQUEST = '@@recommendation/FETCH_REQUEST';
export const RECO_FETCH_SUCCESS = '@@recommendation/FETCH_SUCCESS';
export const RECO_FETCH_FAILURE = '@@recommendation/FETCH_FAILURE';

export const fetchRecommendations = progressionId => (dispatch, getState, {services}) => {
  const {Recommendations} = services;
  const currentRef = get('ref', getContent(getState()));

  const action = buildTask({
    types: [RECO_FETCH_REQUEST, RECO_FETCH_SUCCESS, RECO_FETCH_FAILURE],
    task: () => Recommendations.find(currentRef),
    meta: {id: progressionId},
    bailout: getRecommendations(getState())
  });

  return dispatch(action);
};
