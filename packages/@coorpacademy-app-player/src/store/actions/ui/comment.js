export const UI_EDIT_COMMENT = '@@ui/EDIT_COMMENT';
export const UI_POST_COMMENT = '@@ui/POST_COMMENT';

export const editComment = text => {
  return {
    type: UI_EDIT_COMMENT,
    payload: {text}
  };
};

export const postComment = text => async dispatch => {
  await dispatch({
    type: UI_POST_COMMENT,
    payload: {text}
  });
  return dispatch(postComment(text));
};
