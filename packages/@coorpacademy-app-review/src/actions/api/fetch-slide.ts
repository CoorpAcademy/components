import type {AnyAction} from 'redux';
import type {ThunkAction, ThunkDispatch} from 'redux-thunk';
import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import type {StoreState} from '../../reducers';
import type {Options, ProgressionFromAPI, SlideFromAPI} from '../../types/common';
import {setFirstSlide} from '../ui/slides';

export const SLIDE_FETCH_REQUEST = '@@slides/FETCH_REQUEST' as const;
export const SLIDE_FETCH_SUCCESS = '@@slides/FETCH_SUCCESS' as const;
export const SLIDE_FETCH_FAILURE = '@@slides/FETCH_FAILURE' as const;

export interface ReceivedSlide extends AnyAction {
  type: typeof SLIDE_FETCH_SUCCESS;
  payload: SlideFromAPI;
}

export type FetchSlideAction = ThunkAction<Promise<SlideFromAPI>, StoreState, Options, AnyAction>;
type Dispatch = ThunkDispatch<StoreState, Options, AnyAction>;

export const fetchSlide = (
  progressionFromAPI: ProgressionFromAPI,
  token: string
): FetchSlideAction =>
  buildTask({
    types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
    bailout: (state: StoreState): boolean => {
      const {ref: slideRef} = get('state.nextContent', progressionFromAPI);
      return has(`data.slide.${slideRef}`, state);
    },
    task: (dispatch: Dispatch, getState: () => StoreState, {services}: Options) => {
      const {ref: slideRef} = get('state.nextContent', progressionFromAPI);
      return services.fetchSlide(slideRef, token).then((slideFromAPI: SlideFromAPI | void) => {
        if (!slideFromAPI) throw new Error('Slide not found');
        dispatch(setFirstSlide(slideFromAPI));
        /*
        const fetchedSlidesRefs = getState().data.slides.slideRefs;
        const numberOfFinishedSlides = size(getState().ui.finishedSlides);
        const isFirstSlide = isEmpty(getState().ui.finishedSlides);
        if (!includes(slideRef, fetchedSlidesRefs)) fetchedSlidesRefs.push(slideRef);
        isFirstSlide
          ? dispatch(setFirstSlide(slideFromAPI))
          : dispatch(
              updateSlidesOnValidation({
                slideFromAPI,
                progressionFromAPI,
                fetchedSlidesRefs,
                numberOfFinishedSlides
              })
            );
        */
        return slideFromAPI;
      });
    }
  });
