import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {Options, ProgressionFromAPI} from '../../types/common';
import type {StoreState} from '../../reducers';
import {fetchSlide} from './fetch-slide';

export const POST_ANSWER_REQUEST = '@@answer/POST_REQUEST' as const;
export const POST_ANSWER_SUCCESS = '@@answer/POST_SUCCESS' as const;
export const POST_ANSWER_FAILURE = '@@answer/POST_FAILURE' as const;

export type ReceivedAnswer = {
  type: typeof POST_ANSWER_SUCCESS;
  payload: ProgressionFromAPI;
};

export const postAnswer =
  (skillRef: string, progressionId: string, answer: string[]) =>
  async (dispatch: Dispatch, getState: () => StoreState, {services}: Options): Promise<void> => {
    const state = getState();
    const token = get('data.token', state);
    const action = buildTask({
      types: [POST_ANSWER_REQUEST, POST_ANSWER_SUCCESS, POST_ANSWER_FAILURE],
      task: () => {
        return services.postAnswer(skillRef, token, progressionId, answer);
      }
    });
    const response = await dispatch(action);

    if (response.type === POST_ANSWER_SUCCESS) {
      const progression = response.payload;
      const slideRef = progression.state.nextContent.ref;
      await dispatch(fetchSlide(slideRef));
    }
  };
