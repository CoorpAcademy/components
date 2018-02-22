import get from 'lodash/fp/get';
import last from 'lodash/fp/last';
import isNil from 'lodash/fp/isNil';
import {fetchProgression, fetchEngineConfig, fetchBestProgression} from '../api/progressions';
import {fetchEndRank, fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchContent, fetchContentInfo, fetchSlideChapter} from '../api/contents';
import {fetchRecommendations} from '../api/recommendations';
import {fetchNext} from '../api/next-content';
import {sendProgressionAnalytics} from '../api/analytics';
import {fetchAnswer} from '../api/answers';
import {selectCurrentUser} from '../ui/users';
import {
  getEngine,
  getProgressionContent,
  getCurrentProgressionId,
  getStepContent,
  getPrevStepContent,
  getSlide
} from '../../utils/state-extract';
import userStateExtract, {getCurrentUserId} from '../../utils/user-state-extract';
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

  await dispatch(selectCurrentUser());

  const progressionId = getCurrentProgressionId(getState());
  const response = await dispatch(fetchProgression(progressionId));

  if (response.error) return response;

  const currentUserId = getCurrentUserId(getState());
  const {ref: slideRef} = userStateExtract.getStepContent(currentUserId, getState());

  return await dispatch(fetchContent('slide', slideRef));
};
