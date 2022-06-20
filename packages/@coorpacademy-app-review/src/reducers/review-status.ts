import {UpdateReviewStatus, UPDATE_REVIEW_STATUS} from '../actions/review-status';
import {ReviewStatus} from '../types/review-status';

// -----------------------------------------------------------------------------

export type State = ReviewStatus;
export const initialState: ReviewStatus = 'ongoing';

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: State = initialState, action: UpdateReviewStatus): State => {
  switch (action.type) {
    case UPDATE_REVIEW_STATUS: {
      return action.payload;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
