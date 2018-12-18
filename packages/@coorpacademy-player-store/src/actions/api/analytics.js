// @flow

import buildTask from '@coorpacademy/redux-task';
import type {State, Progression, Engine} from '@coorpacademy/progression-engine';
import {getRoute, getCurrentProgression, getEngineConfig} from '../../utils/state-extract';
import type {Resource, Dispatch, AnalyticsActions, GetState} from '../../types';

export const MEDIA_VIEWED_ANALYTICS_REQUEST: string = '@@analytics/MEDIA_VIEWED_REQUEST';
export const MEDIA_VIEWED_ANALYTICS_SUCCESS: string = '@@analytics/MEDIA_VIEWED_SUCCESS';
export const MEDIA_VIEWED_ANALYTICS_FAILURE: string = '@@analytics/MEDIA_VIEWED_FAILURE';

export const sendMediaViewed = (resource: Resource) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}
): Dispatch => {
  const {Analytics} = services;
  const state: State = getState();
  const location: string = getRoute(state);

  const action: AnalyticsActions = buildTask({
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

export const SEND_PROGRESSION_ANALYTICS_REQUEST: string = '@@analytics/SEND_PROGRESSION_REQUEST';
export const SEND_PROGRESSION_ANALYTICS_SUCCESS: string = '@@analytics/SEND_PROGRESSION_SUCCESS';
export const SEND_PROGRESSION_ANALYTICS_FAILURE: string = '@@analytics/SEND_PROGRESSION_FAILURE';

export const sendProgressionAnalytics = (progressionId: string) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}
): Dispatch => {
  const {Analytics} = services;
  const state: State = getState();
  const currentProgression: Progression = getCurrentProgression(state);
  const engineConfig: Engine = getEngineConfig(state);

  const action: AnalyticsActions = buildTask({
    types: [
      SEND_PROGRESSION_ANALYTICS_REQUEST,
      SEND_PROGRESSION_ANALYTICS_SUCCESS,
      SEND_PROGRESSION_ANALYTICS_FAILURE
    ],
    task: () => Analytics.sendProgressionAnalytics(currentProgression, engineConfig),
    meta: {id: progressionId}
  });

  return dispatch(action);
};
