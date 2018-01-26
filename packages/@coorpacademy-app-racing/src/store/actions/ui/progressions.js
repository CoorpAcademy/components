import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import {fetchProgression, fetchEngineConfig, fetchBestProgression} from '../api/progressions';
import {fetchEndRank, fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchContent, fetchContentInfo, fetchSlideChapter} from '../api/contents';
import {fetchRecommendations} from '../api/recommendations';
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

  return  dispatch(fetchProgression(progressionId));
};
