import type {Dispatch} from 'redux';

export const SHOW_REVISING_BUTTON = '@@button/SHOW_REVISING_BUTTON' as const;

export type ShowRevisingButtonAction = {
  type: typeof SHOW_REVISING_BUTTON;
};

export const showRevisingButton = (dispatch: Dispatch): ShowRevisingButtonAction => {
  return dispatch({
    type: SHOW_REVISING_BUTTON
  });
};
