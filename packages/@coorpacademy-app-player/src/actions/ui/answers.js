import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import {createAnswer} from '../api/answers';
import {selectProgression} from './progressions';

export const ANSWER_RESET = '@@answer/RESET';
export const ANSWER_EDIT = {
  qcm: '@@answer/EDIT_QCM',
  template: '@@answer/EDIT_TEMPLATE'
};

const newState = (state, questionType, newValue) => {
  switch (questionType) {
    case 'qcm':
      if (!newValue.label) return state;

      if (includes(newValue.label, state)) {
        return remove(label => label === newValue.label)(state);
      } else {
        return [...state, newValue.label];
      }

    case 'template':
      return [newValue];

    default:
      return state;
  }
};

export const editAnswer = (state, questionType, progressionId, newValue) => {
  return {
    type: ANSWER_EDIT[questionType],
    meta: {
      progressionId
    },
    payload: {
      answer: newState(state, questionType, newValue)
    }
  };
};

export const resetAnswer = progressionId => ({
  type: ANSWER_RESET,
  meta: {
    progressionId
  },
  payload: []
});

export const validateAnswer = (progressionId, body) => async (dispatch, getState) => {
  await dispatch(resetAnswer(progressionId));

  const response = await dispatch(createAnswer(progressionId, body.answers));
  if (response.error) return response;
  return dispatch(selectProgression(`${(parseInt(progressionId) + 1) % 2}`));
};
