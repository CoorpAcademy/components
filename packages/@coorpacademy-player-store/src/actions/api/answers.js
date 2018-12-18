// @flow

import buildTask from '@coorpacademy/redux-task';
import type {Dispatch, AnswersActions, GetState} from '../../types';

export const ANSWER_FETCH_REQUEST: string = '@@answer/FETCH_REQUEST';
export const ANSWER_FETCH_SUCCESS: string = '@@answer/FETCH_SUCCESS';
export const ANSWER_FETCH_FAILURE: string = '@@answer/FETCH_FAILURE';

export const fetchAnswer = (progressionId: string, slideId: string, givenAnswers) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}
): Dispatch => {
  const {Answers} = services;

  const action: AnswersActions = buildTask({
    types: [ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS, ANSWER_FETCH_FAILURE],
    task: () => Answers.findById(progressionId, slideId, givenAnswers),
    meta: {progressionId, slideId}
  });
  return dispatch(action);
};
