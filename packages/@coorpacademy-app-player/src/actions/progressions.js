export const PROGRESSION_FETCH_REQUEST = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE = '@@progression/FETCH_FAILURE';

export const fetchProgression = id => async (dispatch, getState, {services}) => {
  const {Progressions} = services;

  await dispatch({
    type: PROGRESSION_FETCH_REQUEST,
    meta: {id}
  });

  try {
    const progression = await Progressions.findById(id);
    return dispatch({
      type: PROGRESSION_FETCH_SUCCESS,
      meta: {id},
      payload: progression
    });
  } catch (err) {
    return dispatch({
      type: PROGRESSION_FETCH_FAILURE,
      meta: {id},
      error: true,
      payload: err
    });
  }
};

export const ANSWER_CREATE_REQUEST = '@@answer/CREATE_REQUEST';
export const ANSWER_CREATE_SUCCESS = '@@answer/CREATE_SUCCESS';
export const ANSWER_CREATE_FAILURE = '@@answer/CREATE_FAILURE';

export const createAnswer = (id, body) => async (dispatch, getState, {services}) => {
  const {Progressions} = services;

  await dispatch({
    type: ANSWER_CREATE_REQUEST,
    meta: {id}
  });

  try {
    const progression = await Progressions.createAnswer(id, body);
    return dispatch({
      type: ANSWER_CREATE_SUCCESS,
      meta: {id},
      payload: progression
    });
  } catch (err) {
    return dispatch({
      type: ANSWER_CREATE_FAILURE,
      meta: {id},
      error: true,
      payload: err
    });
  }
};
