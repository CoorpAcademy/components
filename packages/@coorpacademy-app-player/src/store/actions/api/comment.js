import buildTask from '../../utils/redux-task';

export const SEND_POST_COMMENT_REQUEST = '@@comment/SEND_POST_REQUEST';
export const SEND_POST_COMMENT_SUCCESS = '@@comment/SEND_POST_SUCCESS';
export const SEND_POST_COMMENT_FAILURE = '@@comment/SEND_POST_FAILURE';

export const postComment = progressionId => (dispatch, getState, {services}) => {
  const {Comment} = services;

  const action = buildTask({
    types: [SEND_POST_COMMENT_REQUEST, SEND_POST_COMMENT_SUCCESS, SEND_POST_COMMENT_FAILURE],
    task: () => Comment.postComment(get(ui.comment.text)),
    meta: {id: progressionId}
  });

  return dispatch(action);
};
