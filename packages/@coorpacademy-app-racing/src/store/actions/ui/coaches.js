import buildTask from '@coorpacademy/redux-task';
import {getProgressionContent} from '../../utils/state-extract';

export const START_CHAT_REQUEST = '@@ui/START_CHAT_REQUEST';
export const START_CHAT_SUCCESS = '@@ui/START_CHAT_SUCCESS';
export const START_CHAT_FAILURE = '@@ui/START_CHAT_FAILURE';

export const startChat = () => (dispatch, getState, {services}) => {
  const {Coach} = services;
  const {ref: contentRef} = getProgressionContent(getState());

  const action = buildTask({
    types: [START_CHAT_REQUEST, START_CHAT_SUCCESS, START_CHAT_FAILURE],
    task: () => Coach.startChat(),
    meta: {contentRef}
  });

  return dispatch(action);
};

export const UI_UPDATE_COACHES = '@@ui/UPDATE_COACHES';

export const updateCoaches = chatState => dispatch => {
  return dispatch({
    type: UI_UPDATE_COACHES,
    payload: chatState
  });
};
