import test from 'ava';
import reducer from '../answers';
import {EditAnswerAction, ANSWER_EDIT} from '../../../actions/ui/answers';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmDragSlide} from '../../../views/slides/test/fixtures/qcm-drag';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../../views/slides/test/fixtures/template';

test('should have initial value', t => {
  const state = reducer(undefined, {} as EditAnswerAction);
  t.deepEqual(state, []);
});

test('should set the value of EDIT_BASIC action', t => {
  const state = reducer([], {
    type: ANSWER_EDIT.basic,
    meta: {slideRef: freeTextSlide.universalRef},
    payload: ['value']
  });
  t.deepEqual(state, ['value']);
});

test('should set the value of EDIT_QCM action', t => {
  const state = reducer([], {
    type: ANSWER_EDIT.qcm,
    meta: {slideRef: qcmSlide.universalRef},
    payload: ['value1', 'value2']
  });
  t.deepEqual(state, ['value1', 'value2']);
});

test('should set the value of EDIT_QCM_GRAPHIC action', t => {
  const state = reducer([], {
    type: ANSWER_EDIT.qcmGraphic,
    meta: {slideRef: qcmGraphicSlide.universalRef},
    payload: ['True', 'False']
  });
  t.deepEqual(state, ['True', 'False']);
});

test('should set the value of EDIT_QCM_DRAG action', t => {
  const state = reducer([], {
    type: ANSWER_EDIT.qcmDrag,
    meta: {slideRef: qcmDragSlide.universalRef},
    payload: ['value1', 'value2']
  });
  t.deepEqual(state, ['value1', 'value2']);
});

test('should set the value of EDIT_SLIDER action', t => {
  const state = reducer([], {
    type: ANSWER_EDIT.slider,
    meta: {slideRef: sliderSlide.universalRef},
    payload: ['5']
  });
  t.deepEqual(state, ['5']);
});

test('should set the value of EDIT_TEMPLATE action', t => {
  const state = reducer([], {
    type: ANSWER_EDIT.template,
    meta: {slideRef: templateSlide.universalRef},
    payload: ['value1', 'value2']
  });
  t.deepEqual(state, ['value1', 'value2']);
});
