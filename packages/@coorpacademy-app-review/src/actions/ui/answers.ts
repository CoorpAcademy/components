import {Dispatch} from 'redux';
import {get} from 'lodash/fp';
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

export const editAnswer =
  (answer: string | string[]) =>
  (dispatch: Dispatch, getState: () => StoreState): EditAction => {
    console.log('hello', answer);
    const state = getState();
    const currentSlideRef = state.ui.currentSlideRef;
    const slide = get(currentSlideRef, state.data.slides);
    const type = ANSWER_EDIT[slide.question.type];
    const payload = type === '@@answer/EDIT_BASIC' ? [answer] : answer;

    return dispatch({
      type,
      payload
    });
  };
