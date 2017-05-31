import {getCurrentProgression} from '../../utils/state-extract';

export const ANSWER_CREATE_REQUEST = '@@answer/CREATE_REQUEST';
export const ANSWER_CREATE_SUCCESS = '@@answer/CREATE_SUCCESS';
export const ANSWER_CREATE_FAILURE = '@@answer/CREATE_FAILURE';

export const createAnswer = (progressionId, answers) => async (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const progression = getCurrentProgression(getState());
  const nextContent = progression.state.nextContent;

  await dispatch({
    type: ANSWER_CREATE_REQUEST,
    meta: {progressionId}
  });

  try {
    const answer = await Progressions.createAnswer(progressionId, {
      content: nextContent,
      answers
    });

    return dispatch({
      type: ANSWER_CREATE_SUCCESS,
      meta: {progressionId},
      payload: answer
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
