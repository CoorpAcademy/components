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

export const SET_CURRENT_SLIDE = '@@slide/SET_CURRENT_SLIDE' as const;

export type SetCurrentSlide = {
  type: typeof SET_CURRENT_SLIDE;
  payload: SlideFromAPI;
};
export const setCurrentSlide = (payload: SlideFromAPI): SetCurrentSlide => ({
  type: SET_CURRENT_SLIDE,
  payload
});

export type UISlidesAction = SetCurrentSlide;
