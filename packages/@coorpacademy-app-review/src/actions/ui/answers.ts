import {Dispatch} from 'redux';
import {flatten, get, includes, pull} from 'lodash/fp';
import type {StoreState} from '../../reducers';

export const ANSWER_EDIT = {
  qcm: '@@answer/EDIT_QCM',
  qcmGraphic: '@@answer/EDIT_QCM_GRAPHIC',
  qcmDrag: '@@answer/EDIT_QCM_DRAG',
  template: '@@answer/EDIT_TEMPLATE',
  basic: '@@answer/EDIT_BASIC',
  slider: '@@answer/EDIT_SLIDER'
};

export type EditAction = {
  type: string;
  payload: string[];
};

const newState = (userAnswers: string[], questionType: string, newValue: string): string[] => {
  switch (questionType) {
    case 'qcm':
    case 'qcmGraphic': {
      return includes(newValue, userAnswers)
        ? pull(newValue, userAnswers)
        : flatten([newValue, ...userAnswers]);
    }
    case 'basic':
      return [newValue];
    default:
      return [];
  }
};

export const editAnswer =
  (answer: string) =>
  (dispatch: Dispatch, getState: () => StoreState): EditAction => {
    const state = getState();
    const currentSlideRef = get(['ui', 'currentSlideRef'])(state);
    const userAnswers = get(['ui', 'answers'])(state);
    const slide = get(['data', 'slides', currentSlideRef])(state);
    const questionType = get(['question', 'type'])(slide);
    const type = get(questionType, ANSWER_EDIT);

    return dispatch({
      type,
      payload: newState(userAnswers, questionType, answer)
    });
  };
