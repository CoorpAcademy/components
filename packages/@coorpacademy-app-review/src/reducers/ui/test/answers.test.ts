import test from 'ava';
import reducer from '../answers';
import {EditAnswerAction, ANSWER_EDIT} from '../../../actions/ui/answers';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmDragSlide} from '../../../views/slides/test/fixtures/qcm-drag';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../../views/slides/test/fixtures/template';

test('should have initial value', t => {
  const state = reducer(undefined, {} as EditAnswerAction);
  t.deepEqual(state, {});
});

test('should set the value of EDIT_BASIC action', t => {
  const state = reducer(
    {},
    {
      type: ANSWER_EDIT.basic,
      meta: {slideRef: freeTextSlide.universalRef},
      payload: ['value']
    }
  );
  t.deepEqual(state, {[freeTextSlide.universalRef]: ['value']});
});

test('should set the value of EDIT_QCM action', t => {
  const state = reducer(
    {},
    {
      type: ANSWER_EDIT.qcm,
      meta: {slideRef: qcmSlide.universalRef},
      payload: ['value1', 'value2']
    }
  );
  t.deepEqual(state, {[qcmSlide.universalRef]: ['value1', 'value2']});
});

test('should set the value of EDIT_QCM_GRAPHIC action', t => {
  const state = reducer(
    {},
    {
      type: ANSWER_EDIT.qcmGraphic,
      meta: {slideRef: qcmGraphicSlide.universalRef},
      payload: ['True', 'False']
    }
  );
  t.deepEqual(state, {[qcmGraphicSlide.universalRef]: ['True', 'False']});
});

test('should set the value of EDIT_QCM_DRAG action', t => {
  const state = reducer(
    {},
    {
      type: ANSWER_EDIT.qcmDrag,
      meta: {slideRef: qcmDragSlide.universalRef},
      payload: ['value1', 'value2']
    }
  );
  t.deepEqual(state, {[qcmDragSlide.universalRef]: ['value1', 'value2']});
});

test('should set the value of EDIT_SLIDER action', t => {
  const state = reducer(
    {},
    {
      type: ANSWER_EDIT.slider,
      meta: {slideRef: sliderSlide.universalRef},
      payload: ['5']
    }
  );
  t.deepEqual(state, {[sliderSlide.universalRef]: ['5']});
});

test('should set the value of EDIT_TEMPLATE action', t => {
  const state = reducer(
    {},
    {
      type: ANSWER_EDIT.template,
      meta: {slideRef: templateSlide.universalRef},
      payload: ['value1', 'value2']
    }
  );
  t.deepEqual(state, {[templateSlide.universalRef]: ['value1', 'value2']});
});

test('should set the next slide ref with an empty array if NEXT_SLIDE action is received', t => {
  const state = reducer(
    {'1234': ['Answer'], '5678': ['Other Answer']},
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
  t.deepEqual(state, {'1234': ['Answer'], '5678': []});
});

test('should set the initial value when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer(
    {
      sli_VJYjJnJhg: ['Benchmark'],
      sli_VkSQroQnx: ['Faux'],
      sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
      sli_VkAzsCLKb: ['7'],
      'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
    },
    {type: POST_PROGRESSION_REQUEST}
  );
  t.deepEqual(state, {});
});
