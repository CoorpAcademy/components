import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import {fetchProgression, fetchEngineConfig, fetchBestProgression} from '../api/progressions';
import {fetchEndRank, fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchContent, fetchContentInfo, fetchSlideChapter} from '../api/contents';
import {fetchRecommendations} from '../api/recommendations';
import {fetchNext} from '../api/next-content';
import {sendProgressionAnalytics} from '../api/analytics';
import {fetchAnswer} from '../api/answers';
import {
  getEngine,
  getProgressionContent,
  getCurrentProgressionId,
  getStepContent,
  getPrevStepContent,
  getSlide
} from '../../utils/state-extract';
import {selectRoute} from './route';

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

  const progressionId = getCurrentProgressionId(getState());
  const response = await dispatch(fetchProgression(progressionId));
  if (response.error) return response;

  await dispatch(fetchStartRank());
  const progressionContent = getProgressionContent(getState());
  const engine = getEngine(getState());
  await dispatch(fetchContent(progressionContent.type, progressionContent.ref));
  await dispatch(fetchBestProgression(progressionContent, progressionId));
  await dispatch(fetchEngineConfig(engine));
  await dispatch(fetchContentInfo(progressionContent, engine));

  const {ref, type} = getStepContent(getState());

  switch (type) {
    case 'slide': {
      const chapterResult = await dispatch(fetchSlideChapter(ref));
      const slideResult = getSlide(ref)(getState());

      if (isNil(get('context.title', slideResult))) {
        return chapterResult;
      }
      return dispatch(selectRoute('context'));
    }
    case 'node': {
      switch (ref) {
        case 'extraLife': {
          const prevContent = getPrevStepContent(getState());
          await dispatch(fetchContent(prevContent.type, prevContent.ref));
          return dispatch(fetchAnswer(progressionId, get('ref', prevContent), []));
        }
      }
    }
    case 'success': // eslint-disable-line no-fallthrough
    case 'failure': {
      await dispatch(fetchEndRank(progressionId));
      await dispatch(fetchNext(progressionId));
      await dispatch(fetchRecommendations(progressionId));
      return dispatch(fetchExitNode(ref));
    }
  }
};
