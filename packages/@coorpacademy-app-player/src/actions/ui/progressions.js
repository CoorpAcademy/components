import get from 'lodash/fp/get';
import {fetchProgression, fetchBestProgression} from '../api/progressions';
import {fetchSlide} from '../api/slides';
import {fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchChapter} from '../api/chapters';
import {
  getCurrentProgression,
  getCurrentProgressionId,
  getCurrentContent,
  getCurrentContentRef
} from '../../utils/state-extract';

export const UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';

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

  await dispatch(fetchStartRank());
  await dispatch(fetchBestProgression(progressionId, getCurrentContentRef(getState())));

  const progression = getCurrentProgression(getState());
  const {ref, type} = getCurrentContent(getState());
  const chapterRef = get('content.ref', progression);
  await dispatch(fetchChapter(chapterRef));

  switch (type) {
    case 'slide': {
      return dispatch(fetchSlide(ref));
    }
    case 'success':
    case 'failure': {
      return dispatch(fetchExitNode(ref));
    }
  }
};
