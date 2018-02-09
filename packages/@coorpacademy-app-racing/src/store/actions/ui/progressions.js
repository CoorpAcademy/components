import {fetchProgression, fetchEngineConfig} from '../api/progressions';
import {fetchContent} from '../api/contents';
import {sendProgressionAnalytics} from '../api/analytics';
import {getEngine, getStepContent} from '../../utils/state-extract';

export const UI_PROGRESSION_UPDATED = '@@ui/UI_PROGRESSION_UPDATED';

export const progressionUpdated = id => async (dispatch, getState) => {
  await dispatch({
    type: UI_PROGRESSION_UPDATED,
    meta: {
      id
    }
  });
  return dispatch(sendProgressionAnalytics(id));
};

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
