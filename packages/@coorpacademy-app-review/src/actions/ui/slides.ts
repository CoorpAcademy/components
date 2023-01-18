import type {Dispatch} from 'redux';
import type {SlideFromAPI} from '@coorpacademy/review-services';
import {AnswerUI} from '../../types/slides';
import {fetchPropsVideo} from '../api/fetch-video-props';

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
export const setCurrentSlide =
  (slideFromAPI: SlideFromAPI) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: SET_CURRENT_SLIDE,
      payload: slideFromAPI
    });
    await dispatch(fetchPropsVideo(slideFromAPI));
    return;
  };
