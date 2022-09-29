import test from 'ava';
import reducer, {initialState} from '../slide';
import {EDIT_BASIC} from '../../../actions/ui/answers';
import {PostAnswerRequestAction, POST_ANSWER_REQUEST} from '../../../actions/api/post-answer';
import {CORRECTION_FETCH_SUCCESS} from '../../../actions/api/fetch-correction';
import {SLIDE_FETCH_REQUEST} from '../../../actions/api/fetch-slide';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';

test('should set validateButton, animateCorrectionPopin and showCorrectionPopin to false if SLIDE_FETCH_REQUEST is received', t => {
  const state = reducer(undefined, {
    type: SLIDE_FETCH_REQUEST,
    meta: {slideRef: '1234'}
  });
  t.truthy(state);
  t.deepEqual(state, {
    '1234': {validateButton: false, animateCorrectionPopin: false, showCorrectionPopin: false}
  });
});

test('should set validateButton to false if no answers are found when an EditAnswerAction is received', t => {
  const state = reducer(undefined, {type: EDIT_BASIC, meta: {slideRef: '1234'}, payload: ['']});
  t.truthy(state);
  t.deepEqual(state, {'1234': {validateButton: false}});
});

test('should set validateButton to true if answers are found when an EditAnswerAction is received', t => {
  const state = reducer(undefined, {
    type: EDIT_BASIC,
    meta: {slideRef: '1234'},
    payload: ['answer']
  });
  t.truthy(state);
  t.deepEqual(state, {'1234': {validateButton: true}});
});

test('should set validateButton to false if POST_ANSWER_REQUEST is received', t => {
  const state = reducer(undefined, {
    type: POST_ANSWER_REQUEST,
    meta: {slideRef: '1234'}
  });
  t.truthy(state);
  t.deepEqual(state, {'1234': {validateButton: false}});
});

test('should set animateCorrectionPopin to true if CORRECTION_FETCH_SUCCESS is received', t => {
  const state = reducer(undefined, {
    type: CORRECTION_FETCH_SUCCESS,
    payload: undefined,
    meta: {slideRef: '1234'}
  });
  t.truthy(state);
  t.deepEqual(state, {'1234': {animateCorrectionPopin: true, showCorrectionPopin: true}});
});

test('should set animateCorrectionPopin to false and animationType to unstack or restack if NEXT_SLIDE is received', t => {
  const state = reducer(
    {
      '1234': {
        validateButton: false,
        animateCorrectionPopin: true,
        showCorrectionPopin: true
      }
    },
    {
      type: NEXT_SLIDE,
      payload: {
        currentSlideRef: '1234',
        nextSlideRef: '5678',
        animationType: 'unstack',
        newCurrentSlidePosition: 0
      }
    }
  );
  t.truthy(state);
  t.deepEqual(state, {
    '1234': {
      validateButton: false,
      animateCorrectionPopin: false,
      showCorrectionPopin: true,
      animationType: 'unstack'
    }
  });
});

test('should return state directly when there is no corresponding action handler + have an initial state', t => {
  const state = reducer(undefined, {type: 'NOPE'} as unknown as PostAnswerRequestAction);
  t.deepEqual(state, initialState);
});
