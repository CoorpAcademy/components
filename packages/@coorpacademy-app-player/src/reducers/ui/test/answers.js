import test from 'ava';
import reducer from '../answers';
import {ANSWER_EDIT} from '../../../actions/ui/answers';
import {ANSWER_CREATE_SUCCESS} from '../../../actions/api/answers';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {});

test(
  'should edit the answer',
  macro,
  reducer,
  {},
  {
    type: ANSWER_EDIT.qcm,
    meta: {
      progressionId: 'foo'
    },
    payload: 'bar'
  },
  {foo: 'bar'}
);

test(
  'should reset the answer',
  macro,
  reducer,
  {foo: 'foo'},
  {
    type: ANSWER_CREATE_SUCCESS,
    meta: {
      progressionId: 'foo'
    }
  },
  {}
);
