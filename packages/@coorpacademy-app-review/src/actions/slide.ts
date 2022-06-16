import {Slide, UpdateSlidesOnNextPayload, UpdateSlidesOnValidationPayload} from '../types/slides';

// -----------------------------------------------------------------------------

export const STORE_FIRST_SLIDE = '@@slide/STORE_FIRST_SLIDE';
export const VALIDATE_SLIDE = '@@slide/VALIDATE_SLIDE';
export const UPDATE_SLIDES_ON_VALIDATION = '@@slide/UPDATE_SLIDES_ON_VALIDATION';
export const UPDATE_SLIDES_ON_NEXT = '@@slide/UPDATE_SLIDES_ON_NEXT';

// -----------------------------------------------------------------------------

export type StoreFirstSlide = {
  type: typeof STORE_FIRST_SLIDE;
  payload: Slide;
};

export type ValidateSlide = {
  type: typeof VALIDATE_SLIDE;
};

export type UpdateSlidesOnValidation = {
  type: typeof UPDATE_SLIDES_ON_VALIDATION;
  payload: UpdateSlidesOnValidationPayload;
};

export type UpdateSlidesOnNext = {
  type: typeof UPDATE_SLIDES_ON_NEXT;
  payload: UpdateSlidesOnNextPayload;
};

export type SlidesAction = StoreFirstSlide | UpdateSlidesOnValidation | UpdateSlidesOnNext;

// -----------------------------------------------------------------------------

export const storeFirstSlide = (slide: Slide): StoreFirstSlide => ({
  type: STORE_FIRST_SLIDE,
  payload: slide
});

export const validateSlide = (): ValidateSlide => ({
  type: VALIDATE_SLIDE
});

export const updateSlidesOnValidation = (
  payload: UpdateSlidesOnValidationPayload
): UpdateSlidesOnValidation => ({
  type: UPDATE_SLIDES_ON_VALIDATION,
  payload
});

export const updateSlidesOnNext = (payload: UpdateSlidesOnNextPayload): UpdateSlidesOnNext => ({
  type: UPDATE_SLIDES_ON_NEXT,
  payload
});
