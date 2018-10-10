import {fetchProgression, fetchEngineConfig} from '../api/progressions';
import {fetchContent} from '../api/contents';
import {startPolling, stopPolling} from '../../middlewares/polling-saga';
import {
  getCurrentProgression,
  getEngine,
  getStepContent,
  getVictors,
  isSpectator
} from '../../utils/state-extract';
import {syncWithTeammates} from './route';

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

  if (!isSpectator(getState())) {
    const engine = getEngine(getState());
    await dispatch(fetchEngineConfig(engine));

    const {ref: slideRef} = getStepContent(getState());
    return dispatch(fetchContent('slide', slideRef));
  }

  return response;
};

export const syncProgression = progressionId => async (dispatch, getState) => {
  await dispatch(stopPolling(progressionId));
  await dispatch(fetchProgression(progressionId));
  const state = getState();
  const gameOver = getVictors(state) !== null;
  if (!gameOver) {
    await dispatch(startPolling(progressionId));
    const progression = getCurrentProgression(state);
    return dispatch(syncWithTeammates(progression));
  }
};
