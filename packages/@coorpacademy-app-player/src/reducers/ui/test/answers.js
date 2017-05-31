import test from 'ava';
import reducer from '../answers';
import {ANSWER_EDIT} from '../../../actions/ui/answers';
import {ANSWER_CREATE_SUCCESS} from '../../../actions/api/answers';

test('should edit the answer', t => {
  const action = {
    type: ANSWER_EDIT.qcm,
    meta: {
      progressionId: 'foo'
    },
    payload: 'bar'
  };

  t.deepEqual(reducer({}, action), {foo: 'bar'});
});

test('should reset the answer', t => {
  const action = {
    type: ANSWER_CREATE_SUCCESS,
    meta: {
      progressionId: 'foo'
    }
  };

  t.deepEqual(reducer({foo: 'foo'}, action), {});
});
