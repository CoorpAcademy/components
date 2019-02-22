// @flow

import {sendMediaViewed} from '../api/analytics';
import {markResourceAsViewed} from '../api/progressions';
import {
  getCurrentProgressionId,
  getCurrentSlide,
  getResourceToPlay
} from '../../utils/state-extract';
import type {GetState, ThunkAction} from '../../definitions/redux';
import type {Lesson} from '../../definitions/models';
import {progressionUpdated} from './progressions';

export const UI_VIDEO_PAUSE = '@@ui/VIDEO_PAUSE';
export const UI_VIDEO_RESUME = '@@ui/UI_VIDEO_RESUME';
export const UI_VIDEO_ENDED = '@@ui/VIDEO_ENDED';

export const play = (): DispatchedAction => async (
  dispatch: Function,
  getState: GetState
): ThunkAction => {
  const state = getState();
  const progressionId = getCurrentProgressionId(state);

  const slide = getCurrentSlide(state);
  const resources = (slide && slide.lessons && slide.lessons) || [];
  const selectedResourceId: string =
    getResourceToPlay(state) || (resources.length === 0 ? '' : resources[0]._id);

  const resource: Lesson = resources.filter(r => r._id === selectedResourceId)[0];

  await dispatch(sendMediaViewed(resource));
  await dispatch(markResourceAsViewed(progressionId, resource));
  return dispatch(progressionUpdated(progressionId));
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
