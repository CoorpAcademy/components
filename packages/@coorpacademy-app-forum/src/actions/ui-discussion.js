export const UI_UPDATE_DISCUSSION_TEXTAREA = '@@ui-discussion/UPDATE_TEXTAREA';
export const UI_RESET_DISCUSSION_TEXTAREA = '@@ui-discussion/RESET_TEXTAREA';

export const updateDiscussionTextareaAction = value => ({
  type: UI_UPDATE_DISCUSSION_TEXTAREA,
  payload: {
    value
  }
});

export const resetDiscussionTextareaAction = value => ({
  type: UI_RESET_DISCUSSION_TEXTAREA,
  payload: {}
});
