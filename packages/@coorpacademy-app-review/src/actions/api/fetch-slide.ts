import type {Action, Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import {Options, SlideFromAPI, StoreState} from '../../types/common';

export const SLIDE_FETCH_REQUEST = '@@slides/FETCH_REQUEST' as const;
export const SLIDE_FETCH_SUCCESS = '@@slides/FETCH_SUCCESS' as const;
export const SLIDE_FETCH_FAILURE = '@@slides/FETCH_FAILURE' as const;

export type ReceivedSlide = {
  type: typeof SLIDE_FETCH_SUCCESS;
  payload: SlideFromAPI;
};

export const fetchSlide = (slideRef: string, token: string): Action =>
  buildTask({
    types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
    task: (dispatch: Dispatch, getState: () => StoreState, {services}: Options) =>
      services.fetchSlide(slideRef, token)
  });
