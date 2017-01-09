export const UI_UPDATE_DISCUSSION_TEXTAREA = '@@ui-discussion/UPDATE_TEXTAREA';
export const UI_RESET_DISCUSSION_TEXTAREA = '@@ui-discussion/RESET_TEXTAREA';

export const updateDiscussionTextareaAction = dispatch => value => {
  return dispatch({
    type: UI_UPDATE_DISCUSSION_TEXTAREA,
    payload: {
      value
    }
  });
};

export const resetDiscussionTextareaAction = dispatch => value => {
  return dispatch({
    type: UI_RESET_DISCUSSION_TEXTAREA,
    payload: {}
  });
};
