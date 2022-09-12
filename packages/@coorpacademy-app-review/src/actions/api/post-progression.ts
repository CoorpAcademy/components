import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {Options, ProgressionFromAPI} from '../../types/common';
import type {StoreState} from '../../reducers';
import {fetchSlide} from './fetch-slide';

export const POST_PROGRESSION_REQUEST = '@@progression/POST_REQUEST' as const;
export const POST_PROGRESSION_SUCCESS = '@@progression/POST_SUCCESS' as const;
export const POST_PROGRESSION_FAILURE = '@@progression/POST_FAILURE' as const;

export type ReceivedProgression = {
  type: typeof POST_PROGRESSION_SUCCESS;
  payload: ProgressionFromAPI;
};

export const postProgression =
  (skillRef: string) =>
  async (dispatch: Dispatch, getState: () => StoreState, {services}: Options): Promise<void> => {
    const state = getState();
    const token = get(['data', 'token'], state);
    const action = buildTask({
      types: [POST_PROGRESSION_REQUEST, POST_PROGRESSION_SUCCESS, POST_PROGRESSION_FAILURE],
      task: () => services.postProgression(skillRef, token)
    });
    const response = await dispatch(action);

    if (response.type === POST_PROGRESSION_SUCCESS) {
      const progression = response.payload;
      const slideRef = progression.state.nextContent.ref;
      await dispatch(fetchSlide(slideRef));
    }
  };
