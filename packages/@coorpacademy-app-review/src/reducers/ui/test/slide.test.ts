import test from 'ava';
import reducer, {initialState} from '../slide';
import {EDIT_BASIC} from '../../../actions/ui/answers';
import {PostAnswerRequestAction} from '../../../actions/api/post-answer';
import {CORRECTION_FETCH_SUCCESS} from '../../../actions/api/fetch-correction';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';

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

test('should set animateCorrectionPopin to false and set animationType if NEXT_SLIDE is received', t => {
  const state = reducer(undefined, {
    type: NEXT_SLIDE,
    payload: {
      currentSlideRef: freeTextSlide.universalRef,
      nextSlideRef: qcmGraphicSlide.universalRef,
      animationType: 'unstack'
    }
  });
  t.truthy(state);
  t.false(state.animateCorrectionPopin);
  t.truthy(state.animationType);
});
