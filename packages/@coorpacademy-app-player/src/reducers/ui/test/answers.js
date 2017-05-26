import test from 'ava';
import reducer from '../answers';
import {ANSWER_EDIT, ANSWER_RESET} from '../../../actions/ui/answers';

test('should edit the answer', t => {
  const action = {
    type: ANSWER_EDIT.qcm,
    payload: {
      answer: 'foo'
    }
  };

  t.deepEqual(reducer({}, action), 'foo');
});

test('should reset the answer', t => {
  const action = {
    type: ANSWER_RESET,
    payload: 'foo'
  };

  t.deepEqual(reducer({}, action), 'foo');
});
