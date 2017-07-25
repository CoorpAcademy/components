import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import {createAnswer} from '../api/progressions';
import {fetchAnswer} from '../api/answers';
import {toggleAccordion} from './corrections';

export const ANSWER_EDIT = {
  qcm: '@@answer/EDIT_QCM',
  qcmGraphic: '@@answer/EDIT_QCM_GRAPHIC',
  template: '@@answer/EDIT_TEMPLATE',
  basic: '@@answer/EDIT_BASIC'
};

const newState = (state = [], questionType, newValue) => {
  switch (questionType) {
    case 'qcm':
    case 'qcmGraphic':
      if (!newValue.label) return state;

      if (includes(newValue.label, state)) {
        return remove(label => label === newValue.label)(state);
      } else {
        return [...state, newValue.label];
      }

    case 'basic':
      return [newValue];

    case 'template':
      return newValue;

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
    payload: newState(state, questionType, newValue)
  };
};

export const validateAnswer = (progressionId, body) => async (dispatch, getState, {services}) => {
  const createAnswerResponse = await dispatch(createAnswer(progressionId, body.answers));
  if (createAnswerResponse.error) return createAnswerResponse;

  const progressionState = createAnswerResponse.payload.state;
  const slideId = progressionState.content.ref;

  const {viewedResources = [], isCorrect = false} = progressionState;
  if (isCorrect) {
    await dispatch(toggleAccordion(2));
  } else {
    isEmpty(viewedResources)
      ? await dispatch(toggleAccordion(0))
      : await dispatch(toggleAccordion(1));
  }

  return dispatch(fetchAnswer(progressionId, slideId, body.answers));
};
