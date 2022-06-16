import {UpdateFinishedSlidesPayload} from '../types/finished-slides';

// -----------------------------------------------------------------------------

export const UPDATE_FINISHED_SLIDES = '@@slide/UPDATE_FINISHED_SLIDES';

// -----------------------------------------------------------------------------

export type UpdateFinishedSlides = {
  type: typeof UPDATE_FINISHED_SLIDES;
  payload: UpdateFinishedSlidesPayload;
};

// -----------------------------------------------------------------------------

export const updateFinishedSlides = (
  payload: UpdateFinishedSlidesPayload
): UpdateFinishedSlides => ({
  type: UPDATE_FINISHED_SLIDES,
  payload
});
