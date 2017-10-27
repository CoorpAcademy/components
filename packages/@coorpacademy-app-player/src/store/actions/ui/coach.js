export const startChat = () => (dispatch, getState, {services}) => {
  const {Coach} = services;
  Coach.startChat();
};

export const UI_UPDATE_COACHES = '@@ui/UPDATE_COACHES';

export const updateCoaches = chatState => async dispatch => {
  await dispatch({
    type: UI_UPDATE_COACHES,
    payload: chatState
  });
};
