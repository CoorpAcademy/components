import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {Options, ProgressionFromAPI} from '../../types/common';
import type {StoreState} from '../../reducers';
import {fetchCorrection} from './fetch-correction';
import {fetchSlide} from './fetch-slide';
import {fetchEndRank, fetchStartRank} from './fetch-rank';

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
  const token = get(['data', 'token'], state);
  const answer = get(['ui', 'answers'], state);
  const progression = get(['data', 'progression'], state);
  if (!progression) throw new Error('Cannot answer a question of an inexistent progression');

  const action = buildTask({
    types: [POST_ANSWER_REQUEST, POST_ANSWER_SUCCESS, POST_ANSWER_FAILURE],
    task: () => services.postAnswer(progression, token, answer)
  });
  const response = await dispatch(action);

  if (response.type === POST_ANSWER_SUCCESS) {
    const updatedProgression = response.payload;
    const slideRef = updatedProgression.state.nextContent.ref;
    if (slideRef !== 'successExitNode') {
      await dispatch(fetchSlide(slideRef));
      await dispatch(fetchCorrection);
      await dispatch(fetchStartRank);
    } else {
      // await dispatch(fetchCorrection);
      await dispatch(fetchEndRank);
    }
  }
};
