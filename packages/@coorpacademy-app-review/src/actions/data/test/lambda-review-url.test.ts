import test from 'ava';
import {createTestStore} from '../../test/create-test-store';
import {services} from '../../../test/util/services.mock';
import {StoreState} from '../../../reducers';
import {storeLambdaReviewURL, STORE_LAMBDA_REVIEW_URL} from '../lambda-review-url';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234',
    corrections: {},
    rank: {start: Number.NaN, end: Number.NaN}
  },
  ui: {
    showCongrats: false,
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    showQuitPopin: false
  }
};

test('should dispatch STORE_LAMBDA_REVIEW_URL action when storeLambdaReviewURL is called', async t => {
  const expectedActions = [{type: STORE_LAMBDA_REVIEW_URL, payload: 'http://localhost:7006'}];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);
  await dispatch(storeLambdaReviewURL('http://localhost:7006'));
});
