import test from 'ava';
import reducer from '../answers';
import {EditBasicAction, EDIT_BASIC} from '../../../actions/ui/answers';

test('should have inital value', t => {
  const state = reducer(undefined, {} as EditBasicAction);
  t.deepEqual(state, []);
});

test('should set the value of EDIT_BASIC action', t => {
  const state = reducer([], {type: EDIT_BASIC, payload: ['value']});
  t.deepEqual(state, ['value']);
});
