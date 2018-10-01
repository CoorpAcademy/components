import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import {createAnswer} from '../api/progressions';
import {selectRoute} from './route';

export const TIMER_ME_ON = '@@timer/me/on';
export const TIMER_ME_OFF = '@@timer/me/off';

const TRANSITION_TIME_FOR_MY_ANSWER = 4000;

export const ANSWER_EDIT = {
  qcm: '@@answer/EDIT_QCM',
  qcmGraphic: '@@answer/EDIT_QCM_GRAPHIC',
  qcmDrag: '@@answer/EDIT_QCM_DRAG',
  template: '@@answer/EDIT_TEMPLATE',
  basic: '@@answer/EDIT_BASIC',
  slider: '@@answer/EDIT_SLIDER'
};

const newState = (state = [], questionType, newValue) => {
  switch (questionType) {
    case 'qcm':
    case 'qcmGraphic':
    case 'qcmDrag':
      if (!newValue.label) return state;

      if (includes(newValue.label, state)) {
        return remove(label => label === newValue.label)(state);
      } else {
        return [...state, newValue.label];
      }

    case 'basic':
    case 'slider':
      return [newValue];

    case 'template':
      return newValue;
  }
};

export const editAnswer = (state, questionType, progressionId, newValue) => {
  const type = ANSWER_EDIT[questionType];
  if (!type) {
    throw new Error('Unknown question type "bar"');
  }
  return {
    type,
    meta: {
      progressionId
    },
    payload: newState(state, questionType, newValue)
  };
};

export const validateAnswer = (progressionId, body) => async (dispatch, getState, {services}) => {
  await dispatch({type: TIMER_ME_ON});
  await dispatch(createAnswer(progressionId, body.answer));
  await dispatch({type: TIMER_ME_OFF});
  await dispatch(selectRoute('show-answer'));

  return new Promise(function(resolve) {
    setTimeout(async () => {
      await dispatch(selectRoute('race'));
      resolve(true);
    }, TRANSITION_TIME_FOR_MY_ANSWER);
  });
};
