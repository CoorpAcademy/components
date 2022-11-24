import {SlideFromAPI} from '@coorpacademy/review-services/es/types/services-types';
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

export type SetCurrentSlideAction = {
  type: typeof SET_CURRENT_SLIDE;
  payload: SlideFromAPI;
};
export const setCurrentSlide = (payload: SlideFromAPI): SetCurrentSlideAction => ({
  type: SET_CURRENT_SLIDE,
  payload
});
