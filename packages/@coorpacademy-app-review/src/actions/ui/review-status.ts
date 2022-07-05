// -----------------------------------------------------------------------------

export const UPDATE_REVIEW_STATUS = '@@review-status/UPDATE_REVIEW_STATUS';

// -----------------------------------------------------------------------------

export type FinishedStatus = 'finished';

export type UpdateReviewStatus = {
  type: typeof UPDATE_REVIEW_STATUS;
  payload: FinishedStatus;
};

// -----------------------------------------------------------------------------

export const updateReviewStatus = (payload: FinishedStatus): UpdateReviewStatus => ({
  type: UPDATE_REVIEW_STATUS,
  payload
});
