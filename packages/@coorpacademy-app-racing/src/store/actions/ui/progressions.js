import get from 'lodash/fp/get';
import {fetchProgression, fetchEngineConfig, waitForRefresh} from '../api/progressions';
import {fetchContent} from '../api/contents';
import {getEngine, getStepContent, getCurrentUserId} from '../../utils/state-extract';

export const UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';

export const selectProgression = id => async (dispatch, getState) => {
  await dispatch({
    type: UI_SELECT_PROGRESSION,
    payload: {
      id
    }
  });

  const response = await dispatch(fetchProgression(id));
  if (response.error) return response;

  const engine = getEngine(getState());
  await dispatch(fetchEngineConfig(engine));

  const {ref: slideRef} = getStepContent(getState());
  return dispatch(fetchContent('slide', slideRef));
};

export const UI_REFRESH_RACE_ON_POLLING = '@@ui/REFRESH_RACE_ON_POLLING';
export const UI_POLLING_RESET = '@@ui/POLLING_RESET';

export const refreshStateOnPolling = id => async (dispatch, getState, {services}) => {
  const state = getState();
  const currentView = get(['ui', 'route', id], state);
  const payload = get(['ui', 'current', id, 'polling'], state);

  console.log('dispatch UI_POLLING_RESET');
  await dispatch({
    type: UI_POLLING_RESET,
    meta: {id, currentView}
  });

  if (getCurrentUserId(getState()) !== payload.userId) {
    console.log('refreshing --> ', payload.userId);

    console.log('dispatch UI_REFRESH_RACE_ON_POLLING');
    await dispatch({
      type: UI_REFRESH_RACE_ON_POLLING,
      meta: {id, currentView},
      payload
    });
  }
  else {
    console.log('NO refreshing --> ', payload.userId);
  }

  console.log('dispatch waitForRefresh');
  return dispatch(waitForRefresh(id));
};
