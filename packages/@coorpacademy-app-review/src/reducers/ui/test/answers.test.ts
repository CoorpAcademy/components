import test from 'ava';
import reducer from '../answers';
import {EditAnswerAction, ANSWER_EDIT} from '../../../actions/ui/answers';

test('should have inital value', t => {
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
