import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import find from 'lodash/fp/find';
import isNull from 'lodash/fp/isNull';
import pipe from 'lodash/fp/pipe';
import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import {getSlide, getProgressionContent} from '../../utils/state-extract';
import {createAnswer} from '../api/progressions';
import {fetchAnswer} from '../api/answers';
import {fetchSlideChapter} from '../api/contents';
import {progressionUpdated, selectProgression} from './progressions';
import {toggleAccordion} from './corrections';

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

  const {viewedResources = [], isCorrect = false} = progressionState;

  const state = getState();
  const progressionContent = getProgressionContent(state);
  const slide = getSlide(slideId)(state);
  const lessons = get('lessons', slide);
  const viewedResourcesForContent = pipe(find(progressionContent), getOr([], 'resources'))(
    viewedResources
  );

  if (payload.state.nextContent.type === 'slide') {
    await dispatch(fetchSlideChapter(get('nextContent.ref', progressionState)));
  }

  if (isNull(isCorrect)) return dispatch(selectProgression(progressionId));

  if (isCorrect) {
    await dispatch(toggleAccordion(2));
  } else {
    const hasViewedAllLessons =
      viewedResourcesForContent.length > 0 && viewedResourcesForContent.length === lessons.length;

    !hasViewedAllLessons || get('state.nextContent.ref', payload) === 'extraLife'
      ? await dispatch(toggleAccordion(0))
      : await dispatch(toggleAccordion(1));
  }

  await dispatch(progressionUpdated(progressionId));
  return dispatch(fetchAnswer(progressionId, slideId, body.answer));
};
