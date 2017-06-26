import {getCurrentProgressionId, getRoute} from '../../utils/state-extract';

export const UI_SELECT_ROUTE = '@@ui/SELECT_ROUTE';

export const selectRoute = route => (dispatch, getState) => {
  const state = getState();
  const progressionId = getCurrentProgressionId(state);
  const currentRoute = getRoute(state);

  const nextRoute = currentRoute === route ? null : route;

  return dispatch({
    type: UI_SELECT_ROUTE,
    payload: nextRoute,
    meta: {progressionId}
  });
};
