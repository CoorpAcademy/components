export const UI_EDIT_COMMENT = '@@ui/EDIT_COMMENT';
export const editComment = text => {
  return {
    type: UI_EDIT_COMMENT,
    payload: {text}
  };
};
