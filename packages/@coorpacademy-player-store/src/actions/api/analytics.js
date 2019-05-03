// @flow strict

import buildTask from '@coorpacademy/redux-task';
import type {Lesson} from '@coorpacademy/progression-engine';
import {getRoute, getCurrentProgression, getEngineConfig} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {
  Dispatch,
  DispatchedAction,
  Action,
  GetState,
  ThunkAction
} from '../../definitions/redux';
import type {
  UI_PROGRESSION_UPDATED_ON_MOVE,
  UI_PROGRESSION_UPDATED_ON_NODE
} from '../ui/progressions';
import {UI_PROGRESSION_ACTION_TYPES} from '../ui/progressions';

export const MEDIA_VIEWED_ANALYTICS_REQUEST: string = '@@analytics/MEDIA_VIEWED_REQUEST';
export const MEDIA_VIEWED_ANALYTICS_SUCCESS: string = '@@analytics/MEDIA_VIEWED_SUCCESS';
export const MEDIA_VIEWED_ANALYTICS_FAILURE: string = '@@analytics/MEDIA_VIEWED_FAILURE';

export const sendMediaViewed = (resource: Lesson): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Analytics} = services;
  const state = getState();
  const location: string = getRoute(state);

  const action: Action = buildTask({
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

export const sendProgressionAnalytics = (
  progressionId: string,
  type: UI_PROGRESSION_UPDATED_ON_MOVE | UI_PROGRESSION_UPDATED_ON_NODE
): ThunkAction => (
  dispatch: Function,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Analytics} = services;
  const state = getState();
  const currentProgression = getCurrentProgression(state);

  if (!currentProgression) {
    return dispatch({
      type: SEND_PROGRESSION_ANALYTICS_FAILURE,
      payload: `progression "${progressionId}" could not be found.`
    });
  }

  const engineConfig = getEngineConfig(state);

  if (!engineConfig) {
    return dispatch({
      type: SEND_PROGRESSION_ANALYTICS_FAILURE,
      payload: `progression "${progressionId}" has no config.`
    });
  }

  const action: Action = buildTask({
    types: [
      SEND_PROGRESSION_ANALYTICS_REQUEST,
      SEND_PROGRESSION_ANALYTICS_SUCCESS,
      SEND_PROGRESSION_ANALYTICS_FAILURE
    ],
    task: () => {
      const progressionState = currentProgression.state;
      if (!progressionState) {
        return;
      }

      const onMove = type === UI_PROGRESSION_ACTION_TYPES.PROGRESSION_UPDATED_ON_MOVE;
      const isExitNode =
        progressionState.nextContent.type === 'success' ||
        progressionState.nextContent.type === 'failure';

      if (onMove && isExitNode) {
        Analytics.sendProgressionAnalytics(currentProgression, engineConfig);
      }
    },
    meta: {id: progressionId}
  });

  return dispatch(action);
};
