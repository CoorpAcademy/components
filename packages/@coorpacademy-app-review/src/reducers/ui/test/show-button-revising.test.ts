import test from 'ava';
import {
  SHOW_BUTTON_REVISING,
  ShowButtonRevisingAction
} from '../../../actions/ui/show-button-revising';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';
import reducer from '../show-button-revising';

test('should have initial value', t => {
  const state = reducer(undefined, {} as ShowButtonRevisingAction);
  t.is(state, false);
});

test('should set state to true when received action is SHOW_BUTTON_REVISING', t => {
  const state = reducer(undefined, {
    type: SHOW_BUTTON_REVISING
  });
  t.is(state, true);
});

test('should set state to false when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer(true, {type: POST_PROGRESSION_REQUEST});
  t.is(state, false);
});
