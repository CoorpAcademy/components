import type {Dispatch} from 'redux';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import isEmpty from 'lodash/fp/isEmpty';
import type {SlideFromAPI} from '@coorpacademy/review-services';
import type {ThunkOptions} from '../../types/common';
import type {StoreState} from '../../reducers';
import {setCurrentSlide} from '../ui/slides';
import {fetchPropsVideo} from './fetch-video-props';

export const SLIDE_FETCH_REQUEST = '@@slides/FETCH_REQUEST' as const;
export const SLIDE_FETCH_SUCCESS = '@@slides/FETCH_SUCCESS' as const;
export const SLIDE_FETCH_FAILURE = '@@slides/FETCH_FAILURE' as const;

export type FetchSlide = {
  type: typeof SLIDE_FETCH_REQUEST;
  meta: {slideRef: string};
};

export type ReceivedSlide = {
  type: typeof SLIDE_FETCH_SUCCESS;
  payload: SlideFromAPI;
  meta: {slideRef: string};
};

export const fetchSlide =
  (slideRef: string) =>
  async (
    dispatch: Dispatch,
    getState: () => StoreState,
    {services}: ThunkOptions
  ): Promise<void> => {
    const action = buildTask({
      types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
      bailout: (state: StoreState): boolean => {
        return has(`data.slide.${slideRef}`, state);
      },
      task: () => {
        const state = getState();
        const token = get(['data', 'token'], state);
        return services.fetchSlide(slideRef, token);
      },
      meta: {slideRef}
    });
    const response = await dispatch(action);

    if (response.type === SLIDE_FETCH_SUCCESS) {
      const slideFromAPI = response.payload as SlideFromAPI;
      const state = getState();
      const slides = get('data.progression.state.slides', state);
      await dispatch(fetchPropsVideo(slideFromAPI));
      if (isEmpty(slides)) {
        dispatch(setCurrentSlide(slideFromAPI));
      }
    }
  };
