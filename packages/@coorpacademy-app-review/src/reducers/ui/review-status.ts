import {ReviewStatusState} from '../../types/common';
import {UpdateReviewStatus, UPDATE_REVIEW_STATUS} from '../../actions/ui/review-status';

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
