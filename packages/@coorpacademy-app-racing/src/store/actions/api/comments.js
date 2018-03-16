import buildTask from '@coorpacademy/redux-task';

export const SEND_POST_COMMENT_REQUEST = '@@comment/SEND_POST_REQUEST';
export const SEND_POST_COMMENT_SUCCESS = '@@comment/SEND_POST_SUCCESS';
export const SEND_POST_COMMENT_FAILURE = '@@comment/SEND_POST_FAILURE';

export const postComment = (progressionId, content, message) => (
  dispatch,
  getState,
  {services}
) => {
  const {Comments} = services;

  const action = buildTask({
    types: [SEND_POST_COMMENT_REQUEST, SEND_POST_COMMENT_SUCCESS, SEND_POST_COMMENT_FAILURE],
    task: () => Comments.post(content, message),
    meta: {progressionId}
  });

  return dispatch(action);
};
