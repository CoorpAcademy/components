import test from 'ava';
import reducer, {initialState} from '../slide';
import {EDIT_BASIC} from '../../../actions/ui/answers';
import {PostAnswerRequestAction} from '../../../actions/api/post-answer';

test('should use initial state if no answers are found when an EditAnswerAction is received', t => {
  const state = reducer(undefined, {type: EDIT_BASIC, payload: ['']});
  t.truthy(state);
  t.true(state.validateButton);
});

test('should return state directly when there is no corresponding action handler + have an initial state', t => {
  const state = reducer(undefined, {type: 'NOPE'} as unknown as PostAnswerRequestAction);
  t.deepEqual(state, initialState);
});
