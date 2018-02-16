import test from 'ava';
import reducer from '../answers';
import {ANSWER_EDIT} from '../../../actions/ui/answers';
import {UI_SELECT_PROGRESSION} from '../../../actions/ui/progressions';
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
  {foo: {value: 'bar'}}
);

test(
  'should reset the answer',
  macro,
  reducer,
  {foo: {value: 'foo'}},
  {
    type: UI_SELECT_PROGRESSION,
    payload: {
      id: 'foo'
    }
  },
  {}
);
