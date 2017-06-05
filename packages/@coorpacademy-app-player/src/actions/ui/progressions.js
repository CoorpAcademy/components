import {fetchProgression} from '../api/progressions';
import {fetchSlide} from '../api/slides';
import {fetchExitNode} from '../api/exit-nodes';
import {getCurrentProgression, getCurrentProgressionId} from '../../utils/state-extract';

export const UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';

export const fetchContent = ({type, ref}) => {
  switch (type) {
    case 'slide':
      return fetchSlide(ref);

    case 'success':
    case 'failure':
      return fetchExitNode(ref);
  }
};

export const selectProgression = id => async (dispatch, getState) => {
  await dispatch({
    type: UI_SELECT_PROGRESSION,
    payload: {
      id
    }
  });

  const progressionId = getCurrentProgressionId(getState());
  const response = await dispatch(fetchProgression(progressionId));
  if (response.error) return response;

  const progression = getCurrentProgression(getState());
  return dispatch(fetchContent(progression.state.nextContent));
};
