import {UpdateReviewStatus, UPDATE_REVIEW_STATUS} from '../actions/review-status';

// -----------------------------------------------------------------------------

export type State = 'finished' | 'ongoing';
export const initialState: State = 'ongoing';

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
