// @flow

import buildTask from '@coorpacademy/redux-task';
import {getProgressionContent, getRecommendations} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {
  Action,
  DispatchedAction,
  GetState,
  ThunkAction,
  Dispatch
} from '../../definitions/redux';

export const RECO_FETCH_REQUEST: string = '@@recommendation/FETCH_REQUEST';
export const RECO_FETCH_SUCCESS: string = '@@recommendation/FETCH_SUCCESS';
export const RECO_FETCH_FAILURE: string = '@@recommendation/FETCH_FAILURE';

export const fetchRecommendations =
  (progressionId: string): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Recommendations} = services;
    const content = getProgressionContent(getState());

    if (!content) {
      return dispatch({
        type: RECO_FETCH_FAILURE,
        meta: {id: progressionId},
        payload: `progression "${progressionId}" has no content.`
      });
    }

    const {type, ref} = content;

    const action: Action = buildTask({
      types: [RECO_FETCH_REQUEST, RECO_FETCH_SUCCESS, RECO_FETCH_FAILURE],
      task: () => Recommendations.find(type, ref),
      meta: {id: progressionId},
      bailout: getRecommendations
    });

    return dispatch(action);
  };
