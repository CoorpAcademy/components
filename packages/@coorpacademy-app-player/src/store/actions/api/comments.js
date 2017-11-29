import get from 'lodash/fp/get';
import buildTask from '../../utils/redux-task';
import {getCurrentContent} from '../../utils/state-extract';

export const SEND_POST_COMMENT_REQUEST = '@@comment/SEND_POST_REQUEST';
export const SEND_POST_COMMENT_SUCCESS = '@@comment/SEND_POST_SUCCESS';
export const SEND_POST_COMMENT_FAILURE = '@@comment/SEND_POST_FAILURE';

export const postComment = progressionId => (dispatch, getState, {services}) => {
  const {Comments} = services;
  const state = getState();
  const message = get('ui.comments.text', state);
  const content = getCurrentContent(state);

  const action = buildTask({
    types: [SEND_POST_COMMENT_REQUEST, SEND_POST_COMMENT_SUCCESS, SEND_POST_COMMENT_FAILURE],
    task: () => Comments.post(content, message),
    meta: {id: progressionId}
  });

  return dispatch(action);
};
