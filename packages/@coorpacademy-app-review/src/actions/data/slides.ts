import {ReceivedSlide} from '../api/fetch-slide';

export const VALIDATE_SLIDE = '@@slide/VALIDATE';

export type ValidateSlide = {
  type: typeof VALIDATE_SLIDE;
};

export type SlidesAction = ReceivedSlide | ValidateSlide;

export const validateSlide = (): ValidateSlide => ({
  type: VALIDATE_SLIDE
});
