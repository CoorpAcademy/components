import get from 'lodash/fp/get';
import {sendMediaViewed} from '../api/analytics';
import {markResourceAsViewed, requestExtralifeAccepted} from '../api/progressions';
import {getCurrentProgressionId, getCurrentProgression} from '../../utils/state-extract';

export const UI_VIDEO_PAUSE = '@@ui/VIDEO_PAUSE';
export const UI_VIDEO_RESUME = '@@ui/UI_VIDEO_RESUME';
export const UI_VIDEO_ENDED = '@@ui/VIDEO_ENDED';

export const play = resource => async (dispatch, getState) => {
  const state = getState();
  const progression = getCurrentProgression(state);
  const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';

  const progressionId = getCurrentProgressionId(state);
  await dispatch(sendMediaViewed(resource));
  if (isExtraLifeActive) {
    await dispatch(requestExtralifeAccepted(progressionId));
  }

  return dispatch(markResourceAsViewed(progressionId, resource));
};

export const pause = resource => ({
  type: UI_VIDEO_PAUSE,
  resource
});

export const resume = resource => ({
  type: UI_VIDEO_RESUME,
  resource
});

export const ended = resource => ({
  type: UI_VIDEO_ENDED,
  resource
});
