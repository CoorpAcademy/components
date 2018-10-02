import get from 'lodash/fp/get';
import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import {
  getCurrentUserState,
  haveAllMyTeammatesAnswered,
  isLastAnswerCorrect
} from '../../utils/state-extract';
import {createAnswer} from '../api/progressions';
import {seeQuestion} from './location';
import {selectRoute} from './route';

export const TIMER_NEXT_QUESTION_ON = '@@timer/next-question/on';
export const TIMER_NEXT_QUESTION_OFF = '@@timer/next-question/off';

export const TIMER_HIGHLIGHT_ON = '@@timer/highlight/on';
export const TIMER_HIGHLIGHT_OFF = '@@timer/highlight/off';

const TRANSITION_TIME_BEFORE_NEXT_QUESTION = 3000;
const TRANSITION_TIME_SHOW_RESULT = 4000;

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

export const checkIfNextQuestionIsAvailable = async (dispatch, getState, {services}) => {
  const state = getState();
  const nextQuestion = haveAllMyTeammatesAnswered(state);

  if (nextQuestion) {
    await dispatch({type: TIMER_NEXT_QUESTION_ON});
    return new Promise(function(resolve) {
      setTimeout(async () => {
        await dispatch({type: TIMER_NEXT_QUESTION_OFF});
        await dispatch(seeQuestion);
        resolve(true);
      }, TRANSITION_TIME_BEFORE_NEXT_QUESTION);
    });
  }
};

export const validateAnswer = (progressionId, body) => async (dispatch, getState, {services}) => {
  await dispatch(createAnswer(progressionId, body.answer));
  const stateAfterCorrection = getState();
  const userState = getCurrentUserState(stateAfterCorrection);
  const team = get('team', userState);

  await dispatch({
    type: TIMER_HIGHLIGHT_ON,
    meta: {
      progressionId,
      team,
      isCorrect: isLastAnswerCorrect(stateAfterCorrection)
    }
  });
  await dispatch(selectRoute('race'));

  return new Promise(function(resolve) {
    setTimeout(async () => {
      await dispatch({type: TIMER_HIGHLIGHT_OFF});
      await dispatch(checkIfNextQuestionIsAvailable);
      resolve(true);
    }, TRANSITION_TIME_SHOW_RESULT);
  });
};
