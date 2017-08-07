import {markResourceAsViewed} from '../api/progressions';
import {getCurrentProgressionId} from '../../utils/state-extract';

export const UI_VIDEO_PAUSE = '@@ui/VIDEO_PAUSE';
export const UI_VIDEO_ENDED = '@@ui/VIDEO_ENDED';

export const play = resource => (dispatch, getState) => {
  const state = getState();
  const progressionId = getCurrentProgressionId(state);
  return dispatch(markResourceAsViewed(progressionId, resource));
};

export const pause = resource => ({
  type: UI_VIDEO_PAUSE,
  resource
});

export const ended = resource => ({
  type: UI_VIDEO_ENDED,
  resource
});
