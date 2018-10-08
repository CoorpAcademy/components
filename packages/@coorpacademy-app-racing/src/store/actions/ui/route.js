import {getCurrentProgressionId, getRoute} from '../../utils/state-extract';

export const UI_SELECT_ROUTE = '@@ui/SELECT_ROUTE';
export const TIMER_START_ON = '@@timer/start/on';
export const TIMER_START_OFF = '@@timer/start/off';

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

export const launchStartTimer = async (dispatch, getState) => {
  await dispatch({
    type: TIMER_START_ON
  });

  return new Promise(function(resolve) {
    setTimeout(async () => {
      await dispatch({type: TIMER_START_OFF});
      await dispatch(selectRoute('question'));
      resolve(true);
    }, 5000);
  });
};
