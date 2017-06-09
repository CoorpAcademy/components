import buildTask from '../../utils/redux-task';

export const ANSWER_FETCH_REQUEST = '@@answer/CREATE_REQUEST';
export const ANSWER_FETCH_SUCCESS = '@@answer/CREATE_SUCCESS';
export const ANSWER_FETCH_FAILURE = '@@answer/CREATE_FAILURE';

export const fetchAnswer = (progressionId, slideId) => (dispatch, getState, {services}) => {
  const {Answers} = services;

  const action = buildTask({
    types: [ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS, ANSWER_FETCH_FAILURE],
    task: () => Answers.findById(progressionId, slideId),
    meta: {progressionId, slideId}
  });

  return dispatch(action);
};
