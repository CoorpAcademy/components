import {Slide as SlideFromAPI} from '../../types/slides';

// -----------------------------------------------------------------------------

export const STORE_FIRST_SLIDE = '@@slide/STORE_FIRST_SLIDE';
export const UPDATE_SLIDES_ON_VALIDATION = '@@slide/UPDATE_SLIDES_ON_VALIDATION';
export const UPDATE_SLIDES_ON_NEXT = '@@slide/UPDATE_SLIDES_ON_NEXT';
export const VALIDATE_SLIDE = '@@slide/VALIDATE';
export const FETCH_NEXT_CONTENT = '@@slide/FETCH_NEXT_CONTENT';

// -----------------------------------------------------------------------------

type SlideUIAnimations = 'unstack' | 'restack';

export type Slide = SlideFromAPI & {
  hidden?: boolean;
  position: number;
  animationType?: SlideUIAnimations;
  validationResult?: boolean;
  endReview?: boolean;
  nextSlide?: Omit<Slide, 'endReview' | 'hidden' | 'position' | 'nextSlide'>;
};

export type ValidationPayload = {
  slideNumber: number;
  newSlideContent: Slide;
  numberOfFinishedSlides: number;
  nextSlide: Slide;
};

export type OnNextPayload = Omit<ValidationPayload, 'nextSlide'>;

export type FetchNextPayload = {
  answer: string[];
  content: {
    ref: string;
    type: string;
  };
};

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
  payload: OnNextPayload;
};

export type ValidateSlide = {
  type: typeof VALIDATE_SLIDE;
};

// TODO
export type FetchNextContent = {
  type: typeof FETCH_NEXT_CONTENT;
  payload: FetchNextPayload;
};

export type SlidesAction = StoreFirstSlide | UpdateSlidesOnValidation | UpdateSlidesOnNext;

// -----------------------------------------------------------------------------

export const storeFirstSlide = (slide: SlideFromAPI): StoreFirstSlide => ({
  type: STORE_FIRST_SLIDE,
  payload: slide
});

export const updateSlidesOnValidation = (payload: ValidationPayload): UpdateSlidesOnValidation => ({
  type: UPDATE_SLIDES_ON_VALIDATION,
  payload
});

export const updateSlidesOnNext = (payload: OnNextPayload): UpdateSlidesOnNext => ({
  type: UPDATE_SLIDES_ON_NEXT,
  payload
});

export const validateSlide = (): ValidateSlide => ({
  type: VALIDATE_SLIDE
});
