import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import getOr from 'lodash/fp/getOr';
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
    const token = getOr('', ['data', 'token'], state);
    const action = buildTask({
      types: [POST_PROGRESSION_REQUEST, POST_PROGRESSION_SUCCESS, POST_PROGRESSION_FAILURE],
      task: () => {
        // raised issue on: https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/62072
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return services.postProgression(skillRef, token!);
      }
    });
    const response = await dispatch(action);

    if (response.type === POST_PROGRESSION_SUCCESS) {
      const progression = response.payload;
      const slideRef = progression.state.nextContent.ref;
      await dispatch(fetchSlide(slideRef));
    }
  };
