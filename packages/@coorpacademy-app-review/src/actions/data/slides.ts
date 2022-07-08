import {Slide as UISlide} from '../../types/slides';

// -----------------------------------------------------------------------------

export const STORE_FIRST_SLIDE = '@@slide/STORE_FIRST_SLIDE';
export const UPDATE_SLIDES_ON_VALIDATION = '@@slide/UPDATE_SLIDES_ON_VALIDATION';
export const UPDATE_SLIDES_ON_NEXT = '@@slide/UPDATE_SLIDES_ON_NEXT';
export const VALIDATE_SLIDE = '@@slide/VALIDATE';
export const FETCH_NEXT_CONTENT = '@@slide/FETCH_NEXT_CONTENT';
export const ERROR_FETCHING_SLIDE = '@@data/slide/ERROR_FETCHING_SLIDE';

// -----------------------------------------------------------------------------

type SlideUIAnimations = 'unstack' | 'restack';

export type Slide = UISlide & {
  hidden?: boolean;
  position: number;
  animationType?: SlideUIAnimations;
  isCorrect?: boolean;
  endReview?: boolean;
  nextContent?: Omit<Slide, 'endReview' | 'hidden' | 'position' | 'nextContent'>;
};

// TODO: complete or modify typing as needed on Fetch Slide ticket
export type SlideFromAPI = {
  question: {
    content: {
      choices: Record<string, unknown>[];
    };
  };
  klf: string;
  universalRef: string;
};

export type ValidationPayload = {
  slideNumber: number;
  newSlideContent: Slide;
  numberOfFinishedSlides: number;
  nextContent: Slide;
};

export type OnNextPayload = Omit<ValidationPayload, 'nextContent'>;

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

export type ErrorFetchingSlide = {
  type: typeof ERROR_FETCHING_SLIDE;
  payload: Error;
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

export const errorFetchingSlide = (error: Error): ErrorFetchingSlide => ({
  type: ERROR_FETCHING_SLIDE,
  payload: error
});
