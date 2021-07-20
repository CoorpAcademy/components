// @flow

import type {Lesson, Slide} from '@coorpacademy/progression-engine';
import {PROGRESSION_UPDATED_ON_NODE, progressionUpdated, sendMediaViewed} from '../api/analytics';
import {markResourceAsViewed} from '../api/progressions';
import {
  getRoute,
  getCurrentProgressionId,
  getCurrentSlide,
  getResourceToPlay,
  getPreviousSlide,
} from '../../utils/state-extract';
import type {
  DispatchedAction,
  GetState,
  ReduxState,
  ThunkAction,
  Dispatch,
} from '../../definitions/redux';

export const UI_VIDEO_ERROR = '@@ui/VIDEO_ERROR';
export const UI_VIDEO_PAUSE = '@@ui/VIDEO_PAUSE';
export const UI_VIDEO_RESUME = '@@ui/UI_VIDEO_RESUME';
export const UI_VIDEO_ENDED = '@@ui/VIDEO_ENDED';

const getSlide = (state: ReduxState): Slide | void => {
  const isCorrection = getRoute(state) === 'correction';
  return isCorrection ? getPreviousSlide(state) : getCurrentSlide(state);
};

export const play =
  (): ThunkAction =>
  async (dispatch: Dispatch, getState: GetState): DispatchedAction => {
    const state = getState();
    const progressionId = getCurrentProgressionId(state);

    if (!progressionId) {
      return dispatch({
        type: UI_VIDEO_ERROR,
        payload: 'progressionId is required.',
      });
    }

    const slide = getSlide(state);
    const resources = slide && slide.lessons && slide.lessons;

    if (!resources || resources.length === 0) {
      return dispatch({
        type: UI_VIDEO_ERROR,
        payload: `cannot play video for progression "${progressionId}", no resources found.`,
      });
    }

    const selectedResourceId: string = getResourceToPlay(state);
    const resource: Lesson = selectedResourceId
      ? resources.filter((r) => r._id === selectedResourceId)[0]
      : resources[0];

    await dispatch(sendMediaViewed(resource));
    await dispatch(markResourceAsViewed(progressionId, resource));
    return dispatch(progressionUpdated(progressionId, PROGRESSION_UPDATED_ON_NODE));
  };

export const pause = (resource: Lesson) => ({
  type: UI_VIDEO_PAUSE,
  resource,
});

export const resume = (resource: Lesson) => ({
  type: UI_VIDEO_RESUME,
  resource,
});

export const ended = (resource: Lesson) => ({
  type: UI_VIDEO_ENDED,
  resource,
});
