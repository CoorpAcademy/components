import {SlideIndexes} from '../../common';
import {ProgressionFromAPI, SlideFromAPI} from '../../types/common';
import {AnswerUI} from '../../types/slides';

// -----------------------------------------------------------------------------

export const SET_FIRST_SLIDE = '@@slide/SET_FIRST_SLIDE' as const;
export const UPDATE_SLIDES_ON_VALIDATION = '@@slide/UPDATE_SLIDES_ON_VALIDATION' as const;
export const UPDATE_SLIDES_ON_NEXT = '@@slide/UPDATE_SLIDES_ON_NEXT' as const;

// -----------------------------------------------------------------------------

type SlideUIAnimations = 'unstack' | 'restack';

export type Slide = {
  questionText?: string;
  answerUI?: AnswerUI;
  hidden?: boolean;
  position: number;
  animationType?: SlideUIAnimations;
  isCorrect?: boolean;
  endReview?: boolean;
  nextContent?: Omit<Slide, 'endReview' | 'hidden' | 'position' | 'nextContent'>;
};

export type OnNextPayload = {
  slideIndex: SlideIndexes;
  newSlideContent: Slide;
  numberOfFinishedSlides: number;
};

// -----------------------------------------------------------------------------

export type SetFirstSlide = {
  type: typeof SET_FIRST_SLIDE;
  payload: SlideFromAPI;
};

export type UpdateSlidesOnValidation = {
  type: typeof UPDATE_SLIDES_ON_VALIDATION;
  payload: {
    slideFromAPI: SlideFromAPI;
    progressionFromAPI: ProgressionFromAPI;
    fetchedSlidesRefs: string[];
    numberOfFinishedSlides: number;
  };
};

export type UpdateSlidesOnNext = {
  type: typeof UPDATE_SLIDES_ON_NEXT;
  payload: OnNextPayload;
};

export type UISlidesAction = UpdateSlidesOnValidation | UpdateSlidesOnNext | SetFirstSlide;

// -----------------------------------------------------------------------------

export const setFirstSlide = (payload: SlideFromAPI): SetFirstSlide => ({
  type: SET_FIRST_SLIDE,
  payload
});

export const updateSlidesOnValidation = (
  payload: UpdateSlidesOnValidation['payload']
): UpdateSlidesOnValidation => ({
  type: UPDATE_SLIDES_ON_VALIDATION,
  payload
});

export const updateSlidesOnNext = (payload: OnNextPayload): UpdateSlidesOnNext => ({
  type: UPDATE_SLIDES_ON_NEXT,
  payload
});
