export const STORE_LAMBDA_REVIEW_URL = '@@data/lambdaReviewURL/STORE_LAMBDA_REVIEW_URL';

export type StoreLambdaReviewURL = {
  type: typeof STORE_LAMBDA_REVIEW_URL;
  payload: string;
};

export const storeLambdaReviewURL = (lambdaReviewURL: string): StoreLambdaReviewURL => ({
  type: STORE_LAMBDA_REVIEW_URL,
  payload: lambdaReviewURL
});
