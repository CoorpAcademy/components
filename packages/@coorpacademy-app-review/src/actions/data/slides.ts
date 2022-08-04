import {AnyAction} from 'redux';
import {SlideFromAPI} from '../../types/common';

// -----------------------------------------------------------------------------

export const VALIDATE_SLIDE = '@@slide/VALIDATE';
export const SLIDE_FETCH_SUCCESS = '@@slides/FETCH_SUCCESS' as const;

// -----------------------------------------------------------------------------

export interface ReceivedSlide extends AnyAction {
  type: typeof SLIDE_FETCH_SUCCESS;
  payload: SlideFromAPI;
}

// -----------------------------------------------------------------------------

export type ValidateSlide = {
  type: typeof VALIDATE_SLIDE;
};

export type SlidesAction = ReceivedSlide;

// -----------------------------------------------------------------------------

export const validateSlide = (): ValidateSlide => ({
  type: VALIDATE_SLIDE
});
