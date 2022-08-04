import type {AnyAction} from 'redux';
import type {ThunkAction, ThunkDispatch} from 'redux-thunk';
import buildTask from '@coorpacademy/redux-task';
import includes from 'lodash/fp/includes';
import get from 'lodash/fp/get';
import size from 'lodash/fp/size';
import isEmpty from 'lodash/fp/isEmpty';
import type {StoreState} from '../../reducers';
import type {Options, ProgressionFromAPI, SlideFromAPI} from '../../types/common';
// SLIDE_FETCH_SUCCESS is @ data/slides because of a cyclic import error
import {SLIDE_FETCH_SUCCESS} from '../data/slides';
import {setFirstSlide, updateSlidesOnValidation} from '../ui/slides';

export {ReceivedSlide, SLIDE_FETCH_SUCCESS} from '../data/slides';

export const SLIDE_FETCH_REQUEST = '@@slides/FETCH_REQUEST' as const;
export const SLIDE_FETCH_FAILURE = '@@slides/FETCH_FAILURE' as const;

export type FetchSlideAction = ThunkAction<Promise<SlideFromAPI>, StoreState, Options, AnyAction>;
type Dispatch = ThunkDispatch<StoreState, Options, AnyAction>;

export const fetchSlide = (
  progressionFromAPI: ProgressionFromAPI,
  token: string
): FetchSlideAction =>
  buildTask({
    types: [SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE],
    task: (dispatch: Dispatch, getState: () => StoreState, {services}: Options) => {
      const {ref: slideRef} = get('state.nextContent', progressionFromAPI);
      return services.fetchSlide(slideRef, token).then((slideFromAPI: SlideFromAPI | void) => {
        if (!slideFromAPI) throw new Error('Slide not found');
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
        return slideFromAPI;
      });
    }
  });
