import {Dispatch} from 'redux';
import {flatten, get, includes, pull} from 'lodash/fp';
import type {StoreState} from '../../reducers';

export const EDIT_QCM = '@@answer/EDIT_QCM' as const;
export const EDIT_QCM_GRAPHIC = '@@answer/EDIT_QCM_GRAPHIC' as const;
export const EDIT_QCM_DRAG = '@@answer/EDIT_QCM_DRAG' as const;
export const EDIT_TEMPLATE = '@@answer/EDIT_TEMPLATE' as const;
export const EDIT_BASIC = '@@answer/EDIT_BASIC' as const;
export const EDIT_SLIDER = '@@answer/EDIT_SLIDER' as const;

export const ANSWER_EDIT = {
  qcm: EDIT_QCM,
  qcmGraphic: EDIT_QCM_GRAPHIC,
  qcmDrag: EDIT_QCM_DRAG,
  template: EDIT_TEMPLATE,
  basic: EDIT_BASIC,
  slider: EDIT_SLIDER
} as const;

export type EditAnswerAction = {
  type:
    | typeof EDIT_QCM
    | typeof EDIT_QCM_GRAPHIC
    | typeof EDIT_QCM_DRAG
    | typeof EDIT_TEMPLATE
    | typeof EDIT_BASIC
    | typeof EDIT_SLIDER;
  payload: string[];
};

const buildAnswer = (userAnswers: string[], questionType: string, newValue: string): string[] => {
  switch (questionType) {
    case 'qcm':
    case 'qcmGraphic':
    case 'qcmDrag': {
      return includes(newValue, userAnswers)
        ? pull(newValue, userAnswers)
        : flatten([...userAnswers, newValue]);
    }
    case 'basic':
      return [newValue];
    default:
      return [];
  }
};

export const editAnswer =
  (answer: string) =>
  (dispatch: Dispatch, getState: () => StoreState): EditAnswerAction => {
    const state = getState();
    const currentSlideRef = get(['ui', 'currentSlideRef'])(state);
    const userAnswers = get(['ui', 'answers'])(state);
    const slide = get(['data', 'slides', currentSlideRef])(state);
    const questionType = get(['question', 'type'])(slide);
    const type = get(questionType, ANSWER_EDIT);

    return dispatch({
      type,
      payload: buildAnswer(userAnswers, questionType, answer)
    });
  };
