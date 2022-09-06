import test from 'ava';
import reducer, {initialState} from '../slide';
import {EDIT_BASIC} from '../../../actions/ui/answers';
import {PostAnswerRequestAction} from '../../../actions/api/post-answer';
import {CORRECTION_FETCH_SUCCESS} from '../../../actions/api/fetch-correction';

test('should use initial state if no answers are found when an EditAnswerAction is received', t => {
  const state = reducer(undefined, {type: EDIT_BASIC, payload: ['']});
  t.truthy(state);
  t.false(state.validateButton);
  t.falsy(state.animateCorrectionPopin);
});

test('should set animateCorrectionPopin to true if CORRECTION_FETCH_SUCCESS is received', t => {
  const state = reducer(undefined, {
    type: CORRECTION_FETCH_SUCCESS,
    payload: undefined,
    meta: {slideRef: '1234'}
  });
  t.truthy(state);
  t.false(state.validateButton);
  t.true(state.animateCorrectionPopin);
});

test('should return state directly when there is no corresponding action handler + have an initial state', t => {
  const state = reducer(undefined, {type: 'NOPE'} as unknown as PostAnswerRequestAction);
  t.deepEqual(state, initialState);
});
