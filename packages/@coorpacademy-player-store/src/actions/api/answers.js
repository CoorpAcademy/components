// @flow

import buildTask from '@coorpacademy/redux-task';
import type {Answer} from '@coorpacademy/progression-engine';
import type {Services} from '../../definitions/services';
import type {Dispatch, AnswersActions, GetState} from '../../definitions/redux';

export const ANSWER_FETCH_REQUEST: string = '@@answer/FETCH_REQUEST';
export const ANSWER_FETCH_SUCCESS: string = '@@answer/FETCH_SUCCESS';
export const ANSWER_FETCH_FAILURE: string = '@@answer/FETCH_FAILURE';

export const fetchAnswer = (progressionId: string, slideId: string, givenAnswers: Answer) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): Dispatch => {
  const {Answers} = services;

  const action: AnswersActions = buildTask({
    types: [ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS, ANSWER_FETCH_FAILURE],
    task: () => Answers.findById(progressionId, slideId, givenAnswers),
    meta: {progressionId, slideId}
  });
  return dispatch(action);
};
