// @flow

import {getCurrentProgressionId} from '../../utils/state-extract';
import type {GetState, ThunkAction} from '../../definitions/redux';

export const UI_SELECT_ROUTE = '@@ui/SELECT_ROUTE';

export const selectRoute = (route: string) => (
  dispatch: Function,
  getState: GetState
): ThunkAction => {
  const state = getState();
  const progressionId = getCurrentProgressionId(state);

  return dispatch({
    type: UI_SELECT_ROUTE,
    payload: route,
    meta: {progressionId}
  });
};
