import {Slide} from '../types/slide';

// -----------------------------------------------------------------------------

export const STORE_SLIDE = '@@slide/STORE_SLIDE';
export const VALIDATE_SLIDE = '@@slide/VALIDATE_SLIDE';

// -----------------------------------------------------------------------------

export type StoreSlide = {
  type: '@@slide/STORE_SLIDE';
  payload: Slide;
};

export type ValidateSlide = {
  type: '@@slide/VALIDATE_SLIDE';
};

// -----------------------------------------------------------------------------

export const storeSlide = (slide: Slide): StoreSlide => ({
  type: STORE_SLIDE,
  payload: slide
});

export const validateSlide = (): ValidateSlide => ({
  type: VALIDATE_SLIDE
});
