// -----------------------------------------------------------------------------

export const VALIDATE_SLIDE = '@@api/VALIDATE_SLIDE';

// -----------------------------------------------------------------------------

export type ValidateSlide = {
  type: typeof VALIDATE_SLIDE;
};

// -----------------------------------------------------------------------------

export const validateSlide = (): ValidateSlide => ({
  type: VALIDATE_SLIDE
});
