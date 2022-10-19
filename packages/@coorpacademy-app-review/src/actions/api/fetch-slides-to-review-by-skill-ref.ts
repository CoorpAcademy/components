import buildTask from '@coorpacademy/redux-task';
import type {Dispatch} from 'redux';
import type {StoreState} from '../../reducers';
import type {Options, ProgressionState, SlideIdFromAPI, SlideContent} from '../../types/common';

export const SLIDES_TO_REVIEW_FETCH_REQUEST = '@@slidesToReview/FETCH_REQUEST' as const;
export const SLIDES_TO_REVIEW_FETCH_SUCCESS = '@@slidesToReview/FETCH_SUCCESS' as const;
export const SLIDES_TO_REVIEW_FETCH_FAILURE = '@@slidesToReview/FETCH_FAILURE' as const;

export type ReceivedSlidesToReviewBySkillRef = {
  type: typeof SLIDES_TO_REVIEW_FETCH_SUCCESS;
  payload: SlideIdFromAPI[];
};

export const fetchSlidesToReviewBySkillRef = (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): ReceivedSlidesToReviewBySkillRef => {
  const action = buildTask({
    types: [
      SLIDES_TO_REVIEW_FETCH_REQUEST,
      SLIDES_TO_REVIEW_FETCH_SUCCESS,
      SLIDES_TO_REVIEW_FETCH_FAILURE
    ],
    task: () => {
      const state = getState();
      const token = state.data.token;
      const progression = state.data.progression as unknown as ProgressionState;
      const content = progression.content as SlideContent;
      const skillRef = content.ref;
      return services.fetchSlidesToReviewBySkillRef(token, skillRef);
    }
  });
  return dispatch(action);
};
