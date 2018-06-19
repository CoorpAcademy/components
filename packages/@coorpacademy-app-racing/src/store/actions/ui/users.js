import {fetchMe} from '../api/users';

export const UI_SELECT_USER = '@@ui/SELECT_USER';

export const selectCurrentUser = () => async (dispatch, getState) => {
  const res = await dispatch(fetchMe());

  return (
    !res.error &&
    dispatch({
      type: UI_SELECT_USER,
      payload: {
        id: res.payload._id
      }
    })
  );
};
