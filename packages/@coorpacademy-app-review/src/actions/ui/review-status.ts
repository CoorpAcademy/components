import {UpdateReviewStatusPayload} from '../types/review-status';

// -----------------------------------------------------------------------------

export const UPDATE_REVIEW_STATUS = '@@review-status/UPDATE_REVIEW_STATUS';

// -----------------------------------------------------------------------------

export type UpdateReviewStatus = {
  type: typeof UPDATE_REVIEW_STATUS;
  payload: UpdateReviewStatusPayload;
};

// -----------------------------------------------------------------------------

export const updateReviewStatus = (payload: UpdateReviewStatusPayload): UpdateReviewStatus => ({
  type: UPDATE_REVIEW_STATUS,
  payload
});
