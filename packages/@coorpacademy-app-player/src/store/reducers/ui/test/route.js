import test from 'ava';
import reducer from '../route';
import {UI_SELECT_ROUTE} from '../../../actions/ui/route';
import {PROGRESSION_CREATE_ANSWER_REQUEST} from '../../../actions/api/progressions';
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

test(
  'should redirect to correction page',
  macro,
  reducer,
  undefined,
  {
    type: PROGRESSION_CREATE_ANSWER_REQUEST,
    meta: {
      progressionId: 'foo'
    },
    payload: 'correction'
  },
  {
    foo: 'correction'
  }
);
