import {Dispatch} from 'redux';

export const EDIT_BASIC = '@@answer/EDIT_BASIC' as const;
export type EditBasicAction = {
  type: typeof EDIT_BASIC;
  payload: string[];
};

export const editAnswer =
  (answer: string) =>
  (dispatch: Dispatch): EditBasicAction => {
    return dispatch({
      type: EDIT_BASIC,
      payload: [answer]
    });
  };
