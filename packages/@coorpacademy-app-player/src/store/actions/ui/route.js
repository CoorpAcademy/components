import {getCurrentProgressionId} from '../../utils/state-extract';

export const UI_SELECT_ROUTE = '@@ui/SELECT_ROUTE';

export const selectRoute = route => (dispatch, getState) => {
  const state = getState();
  const progressionId = getCurrentProgressionId(state);

  return dispatch({
    type: UI_SELECT_ROUTE,
    payload: route,
    meta: {progressionId}
  });
};
