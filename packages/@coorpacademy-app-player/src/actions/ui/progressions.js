import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import {fetchProgression, fetchEngineConfig, fetchBestProgression} from '../api/progressions';
import {fetchSlide} from '../api/slides';
import {fetchEndRank, fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchChapter} from '../api/chapters';
import {fetchRecommendations} from '../api/recommendations';
import {
  getEngine,
  getCurrentProgression,
  getCurrentProgressionId,
  getCurrentContent
} from '../../utils/state-extract';
import {selectRoute} from './route';

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

  const progression = getCurrentProgression(getState());
  const engine = getEngine(getState());
  const {ref, type} = getCurrentContent(getState());
  const contentRef = get('content.ref', progression);

  await dispatch(fetchStartRank());
  await dispatch(fetchChapter(contentRef));
  await dispatch(fetchBestProgression(contentRef, progressionId));
  await dispatch(fetchEngineConfig(engine));

  switch (type) {
    case 'slide': {
      const slideResult = await dispatch(fetchSlide(ref));
      if (isNil(get('payload.context.title', slideResult))) {
        return slideResult;
      }
      return dispatch(selectRoute('context'));
    }
    case 'success':
    case 'failure': {
      await dispatch(fetchEndRank(progressionId));
      await dispatch(fetchRecommendations(progressionId));
      return dispatch(fetchExitNode(ref));
    }
  }
};
