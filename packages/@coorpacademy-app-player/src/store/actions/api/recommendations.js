import buildTask from '@coorpacademy/redux-task';
import {getProgressionContent, getRecommendations} from '../../utils/state-extract';

export const RECO_FETCH_REQUEST = '@@recommendation/FETCH_REQUEST';
export const RECO_FETCH_SUCCESS = '@@recommendation/FETCH_SUCCESS';
export const RECO_FETCH_FAILURE = '@@recommendation/FETCH_FAILURE';

export const fetchRecommendations = progressionId => (dispatch, getState, {services}) => {
  const {Recommendations} = services;
  const {type, ref} = getProgressionContent(getState());

  const action = buildTask({
    types: [RECO_FETCH_REQUEST, RECO_FETCH_SUCCESS, RECO_FETCH_FAILURE],
    task: () => Recommendations.find(type, ref),
    meta: {id: progressionId},
    bailout: getRecommendations
  });

  return dispatch(action);
};
