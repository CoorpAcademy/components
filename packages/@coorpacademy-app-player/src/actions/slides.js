export const SLIDE_FETCH_REQUEST = '@@slide/FETCH_REQUEST';
export const SLIDE_FETCH_SUCCESS = '@@slide/FETCH_SUCCESS';
export const SLIDE_FETCH_FAILURE = '@@slide/FETCH_FAILURE';

export const fetchSlide = id => async (dispatch, getState, {services}) => {
  const {Slides} = services;

  await dispatch({
    type: SLIDE_FETCH_REQUEST,
    meta: {id}
  });

  try {
    const slide = await Slides.findById(id);
    return dispatch({
      type: SLIDE_FETCH_SUCCESS,
      meta: {id},
      payload: slide
    });
  } catch (err) {
    return dispatch({
      type: SLIDE_FETCH_FAILURE,
      meta: {id},
      error: true,
      payload: err
    });
  }
};
