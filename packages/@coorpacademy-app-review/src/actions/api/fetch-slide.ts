import buildTask from '@coorpacademy/redux-task';
import {Options, SlideFromAPI} from '../../types/common';

export const SLIDE_FETCH_REQUEST = '@@slides/FETCH_REQUEST' as const;
export const SLIDE_FETCH_SUCCESS = '@@slides/FETCH_SUCCESS' as const;
export const SLIDE_FETCH_FAILURE = '@@slides/FETCH_FAILURE' as const;

export type ReceivedSlide = {
  type: typeof SLIDE_FETCH_SUCCESS;
  payload: SlideFromAPI;
};

export const fetchSlide = (slideRef: string, token: string) =>
  buildTask({
    types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
    task: (dispatch, getState, {services}: Options) => services.fetchSlide(slideRef, token)
  });
