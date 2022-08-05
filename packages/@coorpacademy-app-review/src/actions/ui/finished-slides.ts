// Stores only successful slides

import {SlideIndexes} from '../../common';

export type FinishedSlide = {slideIndex: SlideIndexes; value: true};

// -----------------------------------------------------------------------------

export const UPDATE_FINISHED_SLIDES = '@@finished-slides/UPDATE_FINISHED_SLIDES';

// -----------------------------------------------------------------------------

export type UpdateFinishedSlides = {
  type: typeof UPDATE_FINISHED_SLIDES;
  payload: FinishedSlide;
};

// -----------------------------------------------------------------------------

export const updateFinishedSlides = (payload: FinishedSlide): UpdateFinishedSlides => ({
  type: UPDATE_FINISHED_SLIDES,
  payload
});
