import buildTask from '@coorpacademy/redux-task';

export const ANSWER_FETCH_REQUEST = '@@answer/FETCH_REQUEST';
export const ANSWER_FETCH_SUCCESS = '@@answer/FETCH_SUCCESS';
export const ANSWER_FETCH_FAILURE = '@@answer/FETCH_FAILURE';

export const fetchAnswer = (progressionId, slideId, givenAnswers) => (
  dispatch,
  getState,
  {services}
) => {
  const {Answers} = services;

  const action = buildTask({
    types: [ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS, ANSWER_FETCH_FAILURE],
    task: () => Answers.findById(progressionId, slideId, givenAnswers),
    meta: {progressionId, slideId}
  });
  return dispatch(action);
};
