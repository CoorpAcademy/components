import buildTask from '../../utils/redux-task';
import {getProgression} from '../../utils/state-extract';

export const PROGRESSION_FETCH_REQUEST = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE = '@@progression/FETCH_FAILURE';

export const fetchProgression = id => (dispatch, getState, {services}) => {
  const {Progressions} = services;

  const action = buildTask({
    types: [PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_FAILURE],
    task: () => Progressions.findById(id),
    meta: {id},
    bailout: getProgression(id)
  });

  return dispatch(action);
};

export const PROGRESSION_CREATE_ANSWER_REQUEST = '@@progression/CREATE_ANSWER_REQUEST';
export const PROGRESSION_CREATE_ANSWER_SUCCESS = '@@progression/CREATE_ANSWER_SUCCESS';
export const PROGRESSION_CREATE_ANSWER_FAILURE = '@@progression/CREATE_ANSWER_FAILURE';

export const createAnswer = (progressionId, answers) => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const progression = getProgression(progressionId)(getState());
  const nextContent = progression.state.nextContent;

  const action = buildTask({
    types: [
      PROGRESSION_CREATE_ANSWER_REQUEST,
      PROGRESSION_CREATE_ANSWER_SUCCESS,
      PROGRESSION_CREATE_ANSWER_FAILURE
    ],
    task: () =>
      Progressions.createAnswer(progressionId, {
        content: nextContent,
        answers
      }),
    meta: {progressionId}
  });

  return dispatch(action);
};
