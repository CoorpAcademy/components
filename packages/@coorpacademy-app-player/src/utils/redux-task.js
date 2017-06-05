export default ({bailout, meta, task, types}) => async (dispatch, getState) => {
  const [REQUEST, SUCCESS, FAILURE] = types;

  const request = await dispatch({
    type: REQUEST,
    meta
  });

  if (bailout && bailout(getState())) {
    return request;
  }

  try {
    const data = await Promise.resolve(task());
    return dispatch({
      type: SUCCESS,
      meta,
      payload: data
    });
  } catch (err) {
    return dispatch({
      type: FAILURE,
      meta,
      error: true,
      payload: err
    });
  }
};
