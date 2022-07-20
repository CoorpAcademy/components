import {UpdateReviewStatus, UPDATE_REVIEW_STATUS} from '../../actions/ui/review-status';

export type ReviewStatusState = 'finished' | 'ongoing';

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ReviewStatusState = 'ongoing',
  action: UpdateReviewStatus
): ReviewStatusState => {
  switch (action.type) {
    case UPDATE_REVIEW_STATUS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
