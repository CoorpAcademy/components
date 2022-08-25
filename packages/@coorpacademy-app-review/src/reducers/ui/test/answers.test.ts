import test from 'ava';
import reducer from '../answers';
import {EditAnswerAction, ANSWER_EDIT} from '../../../actions/ui/answers';

test('should have initial value', t => {
  const state = reducer(undefined, {} as EditAnswerAction);
  t.deepEqual(state, []);
});

test('should set the value of EDIT_BASIC action', t => {
  const state = reducer([], {type: ANSWER_EDIT.basic, payload: ['value']});
  t.deepEqual(state, ['value']);
});

test('should set the value of EDIT_QCM action', t => {
  const state = reducer([], {type: ANSWER_EDIT.qcm, payload: ['value1', 'value2']});
  t.deepEqual(state, ['value1', 'value2']);
});

test('should set the value of EDIT_QCM_GRAPHIC action', t => {
  const state = reducer([], {type: ANSWER_EDIT.qcmGraphic, payload: ['True', 'False']});
  t.deepEqual(state, ['True', 'False']);
});

test('should set the value of EDIT_QCM_DRAG action', t => {
  const state = reducer([], {type: ANSWER_EDIT.qcmDrag, payload: ['value1', 'value2']});
  t.deepEqual(state, ['value1', 'value2']);
});

test('should set the value of EDIT_SLIDER action', t => {
  const state = reducer([], {type: ANSWER_EDIT.slider, payload: ['5']});
  t.deepEqual(state, ['5']);
});

test('should set the value of EDIT_TEMPLATE action', t => {
  const state = reducer([], {type: ANSWER_EDIT.template, payload: ['value1', 'value2']});
  t.deepEqual(state, ['value1', 'value2']);
});
