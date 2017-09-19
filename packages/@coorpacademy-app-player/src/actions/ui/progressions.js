import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import {fetchProgression, fetchEngineConfig, fetchBestProgression} from '../api/progressions';
import {fetchEndRank, fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchContent} from '../api/contents';
import {fetchRecommendations} from '../api/recommendations';
import {
  getEngine,
  getProgressionContent,
  getCurrentProgressionId,
  getStepContent
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

  const progressionContent = getProgressionContent(getState());
  const engine = getEngine(getState());

  await dispatch(fetchStartRank());
  await dispatch(fetchContent(progressionContent.type, progressionContent.ref));
  await dispatch(fetchBestProgression(progressionContent, progressionId));
  await dispatch(fetchEngineConfig(engine));

  const {ref, type} = getStepContent(getState());

  switch (type) {
    case 'slide': {
      const slideResult = await dispatch(fetchContent('slide', ref));
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
