import {Slide as SlideFromAPI} from '../../types/slides';

// -----------------------------------------------------------------------------

export const STORE_FIRST_SLIDE = '@@slide/STORE_FIRST_SLIDE';
export const UPDATE_SLIDES_ON_VALIDATION = '@@slide/UPDATE_SLIDES_ON_VALIDATION';
export const UPDATE_SLIDES_ON_NEXT = '@@slide/UPDATE_SLIDES_ON_NEXT';
export const VALIDATE_SLIDE = '@@slide/VALIDATE';

// -----------------------------------------------------------------------------

type SlideUIAnimations = 'unstack' | 'restack';

export type Slide = SlideFromAPI & {
  hidden?: boolean;
  position: number;
  animationType?: SlideUIAnimations;
  validationResult?: 'success' | 'failure';
  endReview?: boolean;
  nextSlide?: Omit<Slide, 'endReview' | 'hidden' | 'position' | 'nextSlide'>;
};

export type ValidationPayload = {
  slideNumber: number;
  newSlideContent: Slide;
  numberOfFinishedSlides: number;
  nextSlide: Slide;
};

export type NextPayload = Omit<ValidationPayload, 'nextSlide'>;

// -----------------------------------------------------------------------------

export type StoreFirstSlide = {
  type: typeof STORE_FIRST_SLIDE;
  payload: SlideFromAPI;
};

export type UpdateSlidesOnValidation = {
  type: typeof UPDATE_SLIDES_ON_VALIDATION;
  payload: ValidationPayload;
};

export type UpdateSlidesOnNext = {
  type: typeof UPDATE_SLIDES_ON_NEXT;
  payload: NextPayload;
};

export type ValidateSlide = {
  type: typeof VALIDATE_SLIDE;
};

export type SlidesAction =
  | StoreFirstSlide
  | UpdateSlidesOnValidation
  | UpdateSlidesOnNext
  | ValidateSlide;

// -----------------------------------------------------------------------------

export const storeFirstSlide = (slide: SlideFromAPI): StoreFirstSlide => ({
  type: STORE_FIRST_SLIDE,
  payload: slide
});

export const updateSlidesOnValidation = (payload: ValidationPayload): UpdateSlidesOnValidation => ({
  type: UPDATE_SLIDES_ON_VALIDATION,
  payload
});

export const updateSlidesOnNext = (payload: NextPayload): UpdateSlidesOnNext => ({
  type: UPDATE_SLIDES_ON_NEXT,
  payload
});

export const validateSlide = (): ValidateSlide => ({
  type: VALIDATE_SLIDE
});
