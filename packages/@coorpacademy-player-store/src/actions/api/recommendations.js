// @flow

import buildTask from '@coorpacademy/redux-task';
import {getProgressionContent, getRecommendations} from '../../utils/state-extract';
import type {Dispatch, RecommendationsActions, GetState} from '../../types';

export const RECO_FETCH_REQUEST: string = '@@recommendation/FETCH_REQUEST';
export const RECO_FETCH_SUCCESS: string = '@@recommendation/FETCH_SUCCESS';
export const RECO_FETCH_FAILURE: string = '@@recommendation/FETCH_FAILURE';

export const fetchRecommendations = (progressionId: string) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}
): Dispatch => {
  const {Recommendations} = services;
  const {type, ref} = getProgressionContent(getState());

  const action: RecommendationsActions = buildTask({
    types: [RECO_FETCH_REQUEST, RECO_FETCH_SUCCESS, RECO_FETCH_FAILURE],
    task: () => Recommendations.find(type, ref),
    meta: {id: progressionId},
    bailout: getRecommendations
  });

  return dispatch(action);
};
