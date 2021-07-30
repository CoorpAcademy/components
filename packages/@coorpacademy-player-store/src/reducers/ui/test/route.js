import test from 'ava';
import reducer from '../route';
import {UI_SELECT_ROUTE} from '../../../actions/ui/route';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {});

test(
  "should set progression's route",
  macro,
  reducer,
  undefined,
  {
    type: UI_SELECT_ROUTE,
    meta: {
      progressionId: 'foo'
    },
    payload: 'clue'
  },
  {
    foo: 'clue'
  }
);

test(
  'should reset route',
  macro,
  reducer,
  {
    foo: 'clue'
  },
  {
    type: UI_SELECT_ROUTE,
    meta: {
      progressionId: 'foo'
    },
    payload: null
  },
  {
    foo: 'answer'
  }
);
