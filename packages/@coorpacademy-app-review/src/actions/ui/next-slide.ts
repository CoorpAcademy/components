import type {Dispatch} from 'redux';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import type {ProgressionFromAPI, ProgressionAnswerItem} from '@coorpacademy/review-services';
import {fetchEndRank} from '../api/fetch-rank';
import {fetchSlidesToReviewBySkillRef} from '../api/fetch-slides-to-review-by-skill-ref';
import type {StoreState} from '../../reducers';

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

export const nextSlide = async (
  dispatch: Dispatch,
  getState: () => StoreState
): Promise<NextSlideAction> => {
  const state = getState();
  const progression = state.data.progression as ProgressionFromAPI;
  const {isCorrect, allAnswers, slides} = progression.state;
  const correctAnswers = filter((answer: ProgressionAnswerItem) => answer.isCorrect, allAnswers);

  const nextSlideRef = get(
    ['state', 'nextContent', 'ref'],
    state.data.progression as ProgressionFromAPI
  );
  const payload: NextSlidePayload = {
    currentSlideRef: get(['ui', 'currentSlideRef'], state),
    nextSlideRef,
    animationType: isCorrect ? 'unstack' : 'restack',
    totalCorrectAnswers: correctAnswers.length,
    answeredSlides: slides
  };
  const action: NextSlideAction = {
    type: NEXT_SLIDE,
    payload
  };

  if (nextSlideRef === 'successExitNode') {
    await dispatch(fetchEndRank);
    await dispatch(fetchSlidesToReviewBySkillRef);
  }

  return dispatch(action);
};
