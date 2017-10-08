import buildTask from '../../utils/redux-task';
import {getRoute} from '../../utils/state-extract';

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
