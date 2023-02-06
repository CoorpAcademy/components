import type {Dispatch} from 'redux';

export const SHOW_BUTTON_REVISING = '@@button/SHOW_BUTTON_REVISING' as const;

export type ShowButtonRevisingAction = {
  type: typeof SHOW_BUTTON_REVISING;
};

export const showButtonRevising = (dispatch: Dispatch): ShowButtonRevisingAction => {
  return dispatch({
    type: SHOW_BUTTON_REVISING
  });
};
