import {fetchProgression} from '../api/progressions';
import {fetchSlide} from '../api/slides';
import {getProgression, getProgressionId} from '../../utils/state-extract';

export const UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';

export const selectProgression = id => async (dispatch, getState) => {
  await dispatch({
    type: UI_SELECT_PROGRESSION,
    payload: {
      id
    }
  });

  const progressionId = getProgressionId(getState());
  const response = await dispatch(fetchProgression(progressionId));
  if (response.error) return response;

  const progression = getProgression(getState());
  return dispatch(fetchSlide(progression.content.id));
};
