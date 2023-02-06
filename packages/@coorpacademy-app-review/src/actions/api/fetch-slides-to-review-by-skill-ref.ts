import buildTask from '@coorpacademy/redux-task';
import difference from 'lodash/fp/difference';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import type {Dispatch} from 'redux';
import type {ProgressionFromAPI, SlideIdFromAPI} from '@coorpacademy/review-services';
import {Options} from '../../types/common';
import type {StoreState} from '../../reducers';
import {showRevisingButton} from '../ui/show-button-revising';

export const SLIDES_TO_REVIEW_FETCH_REQUEST = '@@slidesToReview/FETCH_REQUEST' as const;
export const SLIDES_TO_REVIEW_FETCH_SUCCESS = '@@slidesToReview/FETCH_SUCCESS' as const;
export const SLIDES_TO_REVIEW_FETCH_FAILURE = '@@slidesToReview/FETCH_FAILURE' as const;

export type ReceivedSlidesToReviewBySkillRef = {
  type: typeof SLIDES_TO_REVIEW_FETCH_SUCCESS;
  payload: SlideIdFromAPI[];
};

export const fetchSlidesToReviewBySkillRef = async (
  dispatch: Dispatch,
  getState: () => StoreState,
  {services}: Options
): Promise<void> => {
  const state = getState();
  const action = buildTask({
    types: [
      SLIDES_TO_REVIEW_FETCH_REQUEST,
      SLIDES_TO_REVIEW_FETCH_SUCCESS,
      SLIDES_TO_REVIEW_FETCH_FAILURE
    ],
    task: () => {
      const token = state.data.token;
      const progression = state.data.progression as ProgressionFromAPI;
      const skillRef = progression.content.ref;
      return services.fetchSlidesToReviewBySkillRef(token, skillRef, 10);
    }
  });

  const response = await dispatch(action);

  if (response.type === SLIDES_TO_REVIEW_FETCH_SUCCESS) {
    const answeredSlidesRef = get(['data', 'progression', 'state', 'slides'], state);
    const slidesToReview = map(({slideId}) => slideId, response.payload);
    if (difference(slidesToReview, answeredSlidesRef).length >= 5) {
      dispatch(showRevisingButton);
    }
  }
};
