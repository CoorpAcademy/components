import buildTask from '../../utils/redux-task';
import {getSlide} from '../../utils/state-extract';

export const SLIDE_FETCH_REQUEST = '@@slide/FETCH_REQUEST';
export const SLIDE_FETCH_SUCCESS = '@@slide/FETCH_SUCCESS';
export const SLIDE_FETCH_FAILURE = '@@slide/FETCH_FAILURE';

export const fetchSlide = id => (dispatch, getState, {services}) => {
  const {Slides} = services;

  const action = buildTask({
    types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
    task: () => Slides.findById(id),
    meta: {id},
    bailout: getSlide(id)
  });

  return dispatch(action);
};
