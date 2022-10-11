import {StoreLambdaReviewURL, STORE_LAMBDA_REVIEW_URL} from '../../actions/data/lambda-review-url';

export type LambdaReviewURLState = string;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: LambdaReviewURLState = '',
  action: StoreLambdaReviewURL
): LambdaReviewURLState => {
  switch (action.type) {
    case STORE_LAMBDA_REVIEW_URL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
