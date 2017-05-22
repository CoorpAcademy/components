export const SLIDE_FETCH_REQUEST = '@@slide/FETCH_REQUEST';
export const SLIDE_FETCH_SUCCESS = '@@slide/FETCH_SUCCESS';
export const SLIDE_FETCH_FAILURE = '@@slide/FETCH_FAILURE';

export const fetchSlide = ref => async (dispatch, getState, {services}) => {
  const {Slides} = services;

  await dispatch({
    type: SLIDE_FETCH_REQUEST,
    meta: {ref}
  });

  try {
    const slide = await Slides.findByRef(ref);
    return dispatch({
      type: SLIDE_FETCH_SUCCESS,
      meta: {ref},
      payload: slide
    });
  } catch (err) {
    return dispatch({
      type: SLIDE_FETCH_FAILURE,
      meta: {ref},
      error: true,
      payload: err
    });
  }
};
