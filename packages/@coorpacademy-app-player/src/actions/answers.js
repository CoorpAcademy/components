export const ANSWER_CREATE_REQUEST = '@@answer/CREATE_REQUEST';
export const ANSWER_CREATE_SUCCESS = '@@answer/CREATE_SUCCESS';
export const ANSWER_CREATE_FAILURE = '@@answer/CREATE_FAILURE';

export const createAnswer = (progressionId, body) => async (dispatch, getState, {services}) => {
  const {Progressions} = services;

  await dispatch({
    type: ANSWER_CREATE_REQUEST,
    meta: {progressionId}
  });

  try {
    const progression = await Progressions.createAnswer(progressionId, body);
    return dispatch({
      type: ANSWER_CREATE_SUCCESS,
      meta: {progressionId},
      payload: progression
    });
  } catch (err) {
    return dispatch({
      type: ANSWER_CREATE_FAILURE,
      meta: {progressionId},
      error: true,
      payload: err
    });
  }
};
