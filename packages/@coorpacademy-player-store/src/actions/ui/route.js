// @flow

import {getCurrentProgressionId} from '../../utils/state-extract';
import type {GetState, Dispatch, DispatchedAction} from '../../definitions/redux';

export const UI_SELECT_ROUTE = '@@ui/SELECT_ROUTE';

export const selectRoute =
  (route: string) =>
  (dispatch: Dispatch, getState: GetState): DispatchedAction => {
    const state = getState();
    const progressionId = getCurrentProgressionId(state);

    return dispatch({
      type: UI_SELECT_ROUTE,
      payload: route,
      meta: {progressionId},
    });
  };
