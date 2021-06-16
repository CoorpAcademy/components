// @flow strict

import buildTask from '@coorpacademy/redux-task';
import type {Lesson, ProgressionId} from '@coorpacademy/progression-engine';
import {getCurrentProgression, getEngineConfig, getRoute} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {
  Dispatch,
  DispatchedAction,
  Action,
  GetState,
  Options,
  ThunkAction,
} from '../../definitions/redux';

export const MEDIA_VIEWED_ANALYTICS_REQUEST: string = '@@analytics/MEDIA_VIEWED_REQUEST';
export const MEDIA_VIEWED_ANALYTICS_SUCCESS: string = '@@analytics/MEDIA_VIEWED_SUCCESS';
export const MEDIA_VIEWED_ANALYTICS_FAILURE: string = '@@analytics/MEDIA_VIEWED_FAILURE';

export const sendMediaViewed =
  (resource: Lesson): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Analytics} = services;
    const state = getState();
    const location: string = getRoute(state);

    const action: Action = buildTask({
      types: [
        MEDIA_VIEWED_ANALYTICS_REQUEST,
        MEDIA_VIEWED_ANALYTICS_SUCCESS,
        MEDIA_VIEWED_ANALYTICS_FAILURE,
      ],
      task: () => Analytics.sendViewedMediaAnalytics(resource, location),
      meta: {resource, location},
    });

    return dispatch(action);
  };

export const PROGRESSION_UPDATED_FAILURE: string = '@@ui/PROGRESSION_UPDATED_FAILURE';
export const PROGRESSION_UPDATED_ON_MOVE: string = '@@ui/PROGRESSION_UPDATED_ON_MOVE';
export const PROGRESSION_UPDATED_ON_NODE: string = '@@ui/PROGRESSION_UPDATED_ON_NODE';
export const PROGRESSION_FINISHED: string = '@@ui/PROGRESSION_FINISHED';

export const progressionUpdated =
  (
    id: ProgressionId,
    type: typeof PROGRESSION_UPDATED_ON_MOVE | typeof PROGRESSION_UPDATED_ON_MOVE
  ): ThunkAction =>
  async (dispatch: Dispatch, getState: GetState, {services}: Options): DispatchedAction => {
    const state = getState();
    const currentProgression = getCurrentProgression(state);

    if (!currentProgression) {
      return dispatch({
        type: PROGRESSION_UPDATED_FAILURE,
        payload: `progression "${id}" could not be found.`,
      });
    }

    const progressionState = currentProgression.state;
    if (!progressionState) {
      return dispatch({
        type: PROGRESSION_UPDATED_FAILURE,
        payload: `progression "${id}" has no state.`,
      });
    }

    const engineConfig = getEngineConfig(state);

    if (!engineConfig) {
      return dispatch({
        type: PROGRESSION_UPDATED_FAILURE,
        payload: `progression "${id}" has no config.`,
      });
    }

    const progressionUpdatedRequest = await dispatch({
      type,
      meta: {
        id,
      },
    });

    const onMove = type === PROGRESSION_UPDATED_ON_MOVE;
    const isExitNode =
      progressionState.nextContent.type === 'success' ||
      progressionState.nextContent.type === 'failure';

    const {Analytics} = services;
    if (onMove && isExitNode) {
      Analytics.sendProgressionFinished(currentProgression, engineConfig);
    } else if (Analytics.sendProgressionUpdated) {
      Analytics.sendProgressionUpdated(currentProgression, engineConfig);
    }

    return progressionUpdatedRequest;
  };
