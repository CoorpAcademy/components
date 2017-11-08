import buildTask from '../../utils/redux-task';
import {getRoute, getCurrentEngine, getStepContent} from '../../utils/state-extract';

export const MEDIA_VIEWED_ANALYTICS_REQUEST = '@@analytics/MEDIA_VIEWED_REQUEST';
export const MEDIA_VIEWED_ANALYTICS_SUCCESS = '@@analytics/MEDIA_VIEWED_SUCCESS';
export const MEDIA_VIEWED_ANALYTICS_FAILURE = '@@analytics/MEDIA_VIEWED_FAILURE';

export const sendMediaViewed = resource => (dispatch, getState, {services}) => {
  const {Analytics} = services;
  const state = getState();
  const location = getRoute(state);

  const action = buildTask({
    types: [
      MEDIA_VIEWED_ANALYTICS_REQUEST,
      MEDIA_VIEWED_ANALYTICS_SUCCESS,
      MEDIA_VIEWED_ANALYTICS_FAILURE
    ],
    task: () => Analytics.sendViewedMediaAnalytics(resource, location),
    meta: {resource, location}
  });

  return dispatch(action);
};

export const SEND_PROGRESSION_ANALYTICS_REQUEST = '@@analytics/SEND_PROGRESSION_REQUEST';
export const SEND_PROGRESSION_ANALYTICS_SUCCESS = '@@analytics/SEND_PROGRESSION_SUCCESS';
export const SEND_PROGRESSION_ANALYTICS_FAILURE = '@@analytics/SEND_PROGRESSION_FAILURE';

export const sendProgressionAnalytics = progressionId => (dispatch, getState, {services}) => {
  const {Analytics} = services;
  const state = getState();
  const engine = getCurrentEngine(state);
  const nextContent = getStepContent(state);

  const action = buildTask({
    types: [
      SEND_PROGRESSION_ANALYTICS_REQUEST,
      SEND_PROGRESSION_ANALYTICS_SUCCESS,
      SEND_PROGRESSION_ANALYTICS_FAILURE
    ],
    task: () => Analytics.sendProgressionAnalytics(engine.ref, nextContent),
    meta: {id: progressionId}
  });

  return dispatch(action);
};
