import test from 'ava';
import reducer from '../lambda-review-url';
import {
  type StoreLambdaReviewURL,
  STORE_LAMBDA_REVIEW_URL
} from '../../../actions/data/lambda-review-url';

test('should have initial value', t => {
  const state = reducer(undefined, {} as StoreLambdaReviewURL);
  t.is(state, '');
});

test('should set the value of STORE_LAMBDA_REVIEW_URL action', t => {
  const state = reducer('', {type: STORE_LAMBDA_REVIEW_URL, payload: 'http://localhost:7006'});
  t.is(state, 'http://localhost:7006');
});
