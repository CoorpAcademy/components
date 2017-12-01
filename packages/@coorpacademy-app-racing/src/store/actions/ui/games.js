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

export const UI_OPEN_GAME = '@@ui/OPEN_GAME';

export const openGame = (id, userId) => async (dispatch, getState) => {
  await dispatch({type: UI_OPEN_GAME, payload: {id, userId}});

  await dispatch(fetchProgression(id));
};
