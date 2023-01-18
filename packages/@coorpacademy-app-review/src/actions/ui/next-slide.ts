import type {Dispatch} from 'redux';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import type {
  ProgressionFromAPI,
  ProgressionAnswerItem,
  SlideFromAPI
} from '@coorpacademy/review-services';
import type {StoreState} from '../../reducers';
import {fetchPropsVideo} from '../api/fetch-video-props';

export const NEXT_SLIDE = '@@slide/NEXT_SLIDE' as const;

type NextSlidePayload = {
  currentSlideRef: string;
  nextSlideRef: string;
  animationType: string;
  totalCorrectAnswers: number;
  answeredSlides: string[];
};

export type NextSlideAction = {
  type: typeof NEXT_SLIDE;
  payload: NextSlidePayload;
};

export const nextSlide = async (dispatch: Dispatch, getState: () => StoreState): Promise<void> => {
  const state = getState();
  const progression = state.data.progression as ProgressionFromAPI;
  const {isCorrect, allAnswers, slides} = progression.state;
  const correctAnswers = filter((answer: ProgressionAnswerItem) => answer.isCorrect, allAnswers);

  const payload: NextSlidePayload = {
    currentSlideRef: get(['ui', 'currentSlideRef'], state),
    nextSlideRef: get(
      ['state', 'nextContent', 'ref'],
      state.data.progression as ProgressionFromAPI
    ),
    animationType: isCorrect ? 'unstack' : 'restack',
    totalCorrectAnswers: correctAnswers.length,
    answeredSlides: slides
  };
  const action: NextSlideAction = {
    type: NEXT_SLIDE,
    payload
  };

  dispatch(action);

  const slideFromAPI = get(['data', 'slides', payload.nextSlideRef], state) as SlideFromAPI;
  await dispatch(fetchPropsVideo(slideFromAPI));
  return;
};
