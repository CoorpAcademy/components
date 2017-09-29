import test from 'ava';
import reducer from '../extra-life';
import {ANSWER_FETCH_REQUEST} from '../../../actions/api/answers';
import {UI_REVIVAL_PENDING} from '../../../actions/ui/extra-life';
import macro from '../../test/helpers/macro';

test(
  'should initialized acceptRevivalPending to false',
  macro,
  reducer,
  undefined,
  {},
  {acceptRevivalPending: false}
);

test(
  'should set current progression',
  macro,
  reducer,
  undefined,
  {
    type: UI_REVIVAL_PENDING
  },
  {
    acceptRevivalPending: true
  }
);

test(
  'should set current progression',
  macro,
  reducer,
  {
    acceptRevivalPending: true
  },
  {
    type: ANSWER_FETCH_REQUEST
  },
  {
    acceptRevivalPending: false
  }
);
