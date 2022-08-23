import test from 'ava';
import reducer from '../answers';
import {EditAction, ANSWER_EDIT} from '../../../actions/ui/answers';

test('should have inital value', t => {
  const state = reducer(undefined, {} as EditAction);
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

test('should set the value of EDIT_QCM_Graphic action', t => {
  const state = reducer([], {type: ANSWER_EDIT.qcmGraphic, payload: ['True', 'False']});
  t.deepEqual(state, ['True', 'False']);
});
