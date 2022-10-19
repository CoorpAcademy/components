import test from 'ava';
import drop from 'lodash/fp/drop';
import {fetchSlidesToReviewBySkillRefResponse} from '../../../test/util/services.mock';
import {
  SLIDES_TO_REVIEW_FETCH_SUCCESS,
  type ReceivedSlidesToReviewBySkillRef
} from '../../../actions/api/fetch-slides-to-review-by-skill-ref';
import reducer from '../show-button-continue-revising';

test('should have initial value', t => {
  const state = reducer(undefined, {} as ReceivedSlidesToReviewBySkillRef);
  t.is(state, false);
});

test('should set state to true when received action is SLIDES_TO_REVIEW_FETCH_SUCCESS and the payload contains 5 slides in the array', t => {
  const state = reducer(undefined, {
    type: SLIDES_TO_REVIEW_FETCH_SUCCESS,
    payload: fetchSlidesToReviewBySkillRefResponse
  });
  t.is(state, true);
});

test('should set state to false when received action is SLIDES_TO_REVIEW_FETCH_SUCCESS and the payload contains less than 5 slides in the array', t => {
  const state = reducer(undefined, {
    type: SLIDES_TO_REVIEW_FETCH_SUCCESS,
    payload: drop(1, fetchSlidesToReviewBySkillRefResponse)
  });
  t.is(state, false);
});
