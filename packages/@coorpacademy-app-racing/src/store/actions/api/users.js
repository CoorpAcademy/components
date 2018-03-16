import buildTask from '@coorpacademy/redux-task';

export const USER_FETCH_ME_REQUEST = '@@user/FETCH_ME_REQUEST';
export const USER_FETCH_ME_SUCCESS = '@@user/FETCH_ME_SUCCESS';
export const USER_FETCH_ME_FAILURE = '@@user/FETCH_ME_FAILURE';

export const fetchMe = () => (
  dispatch,
  getState,
  {services}
) => {
  const {Users} = services;

  const action = buildTask({
    types: [USER_FETCH_ME_REQUEST, USER_FETCH_ME_SUCCESS, USER_FETCH_ME_FAILURE],
    task: () => Users.fetchMe()
  });
  return dispatch(action);
};
