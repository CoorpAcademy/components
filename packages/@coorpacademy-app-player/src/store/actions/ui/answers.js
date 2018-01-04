import get from 'lodash/fp/get';
import isNull from 'lodash/fp/isNull';
import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import hasSeenLesson from '../../utils/has-seen-lesson';
import {createAnswer} from '../api/progressions';
import {fetchAnswer} from '../api/answers';
import {fetchSlideChapter} from '../api/contents';
import {progressionUpdated, selectProgression} from './progressions';
import {toggleAccordion, ACCORDION_KLF, ACCORDION_TIPS, ACCORDION_LESSON} from './corrections';

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
  const createAnswerResponse = await dispatch(createAnswer(progressionId, body.answer));
  if (createAnswerResponse.error) return createAnswerResponse;

  const payload = createAnswerResponse.payload;

  const progressionState = get('state', payload);
  const slideId = get('content.ref', progressionState);
  const nextContentRef = get('nextContent.ref', progressionState);

  const {isCorrect = false} = progressionState;

  const state = getState();

  if (get('nextContent.type', progressionState) === 'slide') {
    await dispatch(fetchSlideChapter(nextContentRef));
  }

  if (isNull(isCorrect)) return dispatch(selectProgression(progressionId));

  if (isCorrect) {
    await dispatch(toggleAccordion(ACCORDION_TIPS));
  } else if (nextContentRef !== 'extraLife' && hasSeenLesson(state)) {
    await dispatch(toggleAccordion(ACCORDION_KLF));
  } else {
    await dispatch(toggleAccordion(ACCORDION_LESSON));
  }

  await dispatch(progressionUpdated(progressionId));
  return dispatch(fetchAnswer(progressionId, slideId, body.answer));
};
