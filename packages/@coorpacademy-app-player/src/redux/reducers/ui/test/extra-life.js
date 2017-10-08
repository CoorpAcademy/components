import test from 'ava';
import reducer from '../extra-life';
import {UI_REVIVAL_PENDING} from '../../../actions/ui/extra-life';
import {PROGRESSION_EXTRALIFEACCEPTED_REQUEST} from '../../../actions/api/progressions';
import macro from '../../test/helpers/macro';

test(
  'should initialize acceptRevivalPending to false',
  macro,
  reducer,
  undefined,
  {},
  {acceptRevivalPending: false}
);

test(
  'should set acceptRevivalPending to true when revival action is sent',
  macro,
  reducer,
  {
    acceptRevivalPending: false
  },
  {
    type: UI_REVIVAL_PENDING
  },
  {
    acceptRevivalPending: true
  }
);

test(
  'should reset acceptRevivalPending to false when extra-life is accepted',
  macro,
  reducer,
  {
    acceptRevivalPending: true
  },
  {
    type: PROGRESSION_EXTRALIFEACCEPTED_REQUEST
  },
  {
    acceptRevivalPending: false
  }
);
