import buildTask from '../../utils/redux-task';
import {getProgression} from '../../utils/state-extract';

export const ANSWER_CREATE_REQUEST = '@@answer/CREATE_REQUEST';
export const ANSWER_CREATE_SUCCESS = '@@answer/CREATE_SUCCESS';
export const ANSWER_CREATE_FAILURE = '@@answer/CREATE_FAILURE';

export const createAnswer = (progressionId, answers) => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const progression = getProgression(progressionId)(getState());
  const nextContent = progression.state.nextContent;

  const action = buildTask({
    types: [ANSWER_CREATE_REQUEST, ANSWER_CREATE_SUCCESS, ANSWER_CREATE_FAILURE],
    task: () =>
      Progressions.createAnswer(progressionId, {
        content: nextContent,
        answers
      }),
    meta: {progressionId}
  });

  return dispatch(action);
};
