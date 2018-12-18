// @flow

import buildTask from '@coorpacademy/redux-task';
import type {Content} from '@coorpacademy/progression-engine';
import type {Dispatch, GetState, CommentsActions} from '../../types';

export const SEND_POST_COMMENT_REQUEST: string = '@@comment/SEND_POST_REQUEST';
export const SEND_POST_COMMENT_SUCCESS: string = '@@comment/SEND_POST_SUCCESS';
export const SEND_POST_COMMENT_FAILURE: string = '@@comment/SEND_POST_FAILURE';

export const postComment = (progressionId: string, content: Content, message: ?string) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}
): Dispatch => {
  const {Comments} = services;

  const action: CommentsActions = buildTask({
    types: [SEND_POST_COMMENT_REQUEST, SEND_POST_COMMENT_SUCCESS, SEND_POST_COMMENT_FAILURE],
    task: () => Comments.post(content, message),
    meta: {progressionId}
  });

  return dispatch(action);
};
