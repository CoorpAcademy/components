import {getProgression, getProgressionId} from '../state-extract';
import {fetchProgression} from './progressions';
import {createAnswer} from './answers';
import {fetchSlide} from './slides';

export const ANSWER_EDIT = {
  qcm: '@@answer/EDIT_QCM',
  template: '@@answer/EDIT_TEMPLATE'
};

export const editAnswer = questionType => (progressionId, answer) => ({
  type: ANSWER_EDIT[questionType],
  meta: {
    id: answer.id,
    progressionId
  },
  payload: {
    answer,
    questionType
  }
});

export const ANSWER_RESET = '@@answer/RESET';

export const resetAnswer = progressionId => ({
  type: ANSWER_RESET,
  meta: {
    progressionId
  },
  payload: {}
});

export const UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';

export const selectProgression = id => async (dispatch, getState) => {
  await dispatch({
    type: UI_SELECT_PROGRESSION,
    payload: {
      id
    }
  });

  const progressionId = getProgressionId(getState());
  const response = await dispatch(fetchProgression(progressionId));
  if (response.error) return response;

  const progression = getProgression(getState());
  await dispatch(fetchSlide(progression.content.ref));

  return dispatch(resetAnswer(progressionId));
};

export const validateAnswer = (progressionId, body) => async (dispatch, getState) => {
  const response = await dispatch(createAnswer(progressionId, body));
  if (response.error) return response;
  return dispatch(selectProgression(`${(parseInt(progressionId) + 1) % 2}`));
};
