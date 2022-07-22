import type {AnyAction} from 'redux';
import type {ThunkAction, ThunkDispatch} from 'redux-thunk';
import buildTask from '@coorpacademy/redux-task';
import type {StoreState} from '../../reducers';
import {Options, SlideFromAPI} from '../../types/common';

export const SLIDE_FETCH_REQUEST = '@@slides/FETCH_REQUEST' as const;
export const SLIDE_FETCH_SUCCESS = '@@slides/FETCH_SUCCESS' as const;
export const SLIDE_FETCH_FAILURE = '@@slides/FETCH_FAILURE' as const;

export interface ReceivedSlide extends AnyAction {
  type: typeof SLIDE_FETCH_SUCCESS;
  payload: SlideFromAPI;
}

export type FetchSlideAction = ThunkAction<Promise<void>, StoreState, Options, AnyAction>;
type Dispatch = ThunkDispatch<StoreState, Options, AnyAction>;

export const fetchSlide = (slideRef: string, token: string): FetchSlideAction =>
  buildTask({
    types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
    task: (dispatch: Dispatch, getState: () => StoreState, {services}: Options) =>
      services.fetchSlide(slideRef, token)
  });
