import test from 'ava';
import reducer, {initialState} from '../slide';
import {EDIT_BASIC} from '../../../actions/ui/answers';
import {PostAnswerRequestAction, POST_ANSWER_REQUEST} from '../../../actions/api/post-answer';
import {CORRECTION_FETCH_SUCCESS} from '../../../actions/api/fetch-correction';
import {SLIDE_FETCH_REQUEST} from '../../../actions/api/fetch-slide';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';

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
        totalCorrectAnswers: 1,
        answeredSlides: ['1234']
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

test('should return same state when nextContent is successExitNode', t => {
  const _initialState = {
    '1234': {
      validateButton: false,
      animateCorrectionPopin: true,
      showCorrectionPopin: true
    }
  };
  const state = reducer(_initialState, {
    type: NEXT_SLIDE,
    payload: {
      currentSlideRef: '1234',
      nextSlideRef: 'successExitNode',
      animationType: 'unstack',
      totalCorrectAnswers: 5,
      answeredSlides: ['1234']
    }
  });
  t.deepEqual(state, _initialState);
});

test('should set the initial value when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer(
    {
      sli_VJYjJnJhg: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        animationType: 'unstack'
      },
      sli_VkSQroQnx: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        animationType: 'unstack'
      },
      sli_N1XACJobn: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        animationType: 'unstack'
      },
      sli_VkAzsCLKb: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        animationType: 'unstack'
      },
      'sli_N13-hG3kX': {
        validateButton: false,
        animateCorrectionPopin: true,
        showCorrectionPopin: false,
        animationType: 'unstack'
      }
    },
    {type: POST_PROGRESSION_REQUEST}
  );
  t.deepEqual(state, {});
});
