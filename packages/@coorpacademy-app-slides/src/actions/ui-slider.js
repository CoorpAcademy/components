export const UI_UPDATE_TITLE = '@@ui-slider/UPDATE_TITLE';

export const updateDiscussionTextareaAction = dispatch => value => {
  return dispatch({
    type: UI_UPDATE_TITLE,
    payload: {
      value
    }
  });
};
