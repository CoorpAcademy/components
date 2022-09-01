import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import type {Options, ProgressionFromAPI} from '../../types/common';
import type {StoreState} from '../../reducers';
import {fetchSlide} from './fetch-slide';

export const POST_ANSWER_REQUEST = '@@answer/POST_REQUEST' as const;
export const POST_ANSWER_SUCCESS = '@@answer/POST_SUCCESS' as const;
export const POST_ANSWER_FAILURE = '@@answer/POST_FAILURE' as const;

export type PostAnswerRequestAction = {
  type: typeof POST_ANSWER_REQUEST;
};

export type PostAnswerSuccessAction = {
  type: typeof POST_ANSWER_SUCCESS;
  payload: ProgressionFromAPI;
};

export const postAnswer = async (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): Promise<void> => {
  const state = getState();
  const token = getOr('', ['data', 'token'], state);
  const answer = get(['ui', 'answers'], state);
  const progression = state.data.progression;
  if (!progression) throw new Error('cannot answer question of inexisting progression');

  const action = buildTask({
    types: [POST_ANSWER_REQUEST, POST_ANSWER_SUCCESS, POST_ANSWER_FAILURE],
    task: () => {
      // raised issue on: https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/62072
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return services.postAnswer(progression, token!, answer);
    }
  });
  const response = await dispatch(action);
  if (response.type === POST_ANSWER_SUCCESS) {
    const updatedProgression = response.payload;
    const slideRef = updatedProgression.state.nextContent.ref;
    await dispatch(fetchSlide(slideRef));
  }
};
