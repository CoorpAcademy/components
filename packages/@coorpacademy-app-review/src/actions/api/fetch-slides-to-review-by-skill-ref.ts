import buildTask from '@coorpacademy/redux-task';
import get from 'lodash/fp/get';
import type {Dispatch} from 'redux';
import type {StoreState} from '../../reducers';
import type {Options, SlideIdFromAPI} from '../../types/common';

export const SLIDES_TO_REVIEW_FETCH_REQUEST = '@@slidesToReview/FETCH_REQUEST' as const;
export const SLIDES_TO_REVIEW_FETCH_SUCCESS = '@@slidesToReview/FETCH_SUCCESS' as const;
export const SLIDES_TO_REVIEW_FETCH_FAILURE = '@@slidesToReview/FETCH_FAILURE' as const;

export type ReceivedSlidesToReviewBySkillRef = {
  type: typeof SLIDES_TO_REVIEW_FETCH_SUCCESS;
  payload: SlideIdFromAPI[];
};

export const fetchSlidesToReviewBySkillRef =
  (url: string, skillRef: string) =>
  (
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
        const token = get(['data', 'token'], state);
        return services.fetchSlidesToReviewBySkillRef(url, token, skillRef);
      }
    });
    return dispatch(action);
  };
