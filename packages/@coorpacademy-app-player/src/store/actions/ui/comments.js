import {postComment as post} from '../api/comments';

export const UI_EDIT_COMMENT = '@@ui/EDIT_COMMENT';
export const editComment = text => {
  return {
    type: UI_EDIT_COMMENT,
    payload: {text}
  };
};

export const UI_POST_COMMENT = '@@ui/POST_COMMENT';
export const postComment = progressionId => async dispatch => {
  await dispatch({
    type: UI_POST_COMMENT,
    payload: {}
  });
  return dispatch(post(progressionId));
};
