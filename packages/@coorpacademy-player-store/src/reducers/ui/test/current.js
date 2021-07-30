import test from 'ava';
import reducer from '../current';
import {UI_PROGRESSION_ACTION_TYPES} from '../../../actions/ui/progressions';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {progressionId: null});

test(
  'should set current progression',
  macro,
  reducer,
  undefined,
  {
    type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
    payload: {
      id: 'foo'
    }
  },
  {
    progressionId: 'foo'
  }
);
