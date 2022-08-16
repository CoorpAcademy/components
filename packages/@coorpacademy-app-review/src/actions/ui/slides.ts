import {SlideFromAPI} from '../../types/common';
import {AnswerUI} from '../../types/slides';

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

export const SET_FIRST_SLIDE = '@@slide/SET_FIRST_SLIDE' as const;
export type SetFirstSlide = {
  type: typeof SET_FIRST_SLIDE;
  payload: SlideFromAPI;
};
export const setFirstSlide = (payload: SlideFromAPI): SetFirstSlide => ({
  type: SET_FIRST_SLIDE,
  payload
});

export const VALIDATE_SLIDE = '@@slide/VALIDATE';
export type ValidateSlide = {
  type: typeof VALIDATE_SLIDE;
};
export const validateSlide = (): ValidateSlide => ({
  type: VALIDATE_SLIDE
});

export type UISlidesAction = SetFirstSlide;
