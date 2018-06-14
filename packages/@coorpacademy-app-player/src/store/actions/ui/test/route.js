import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {UI_SELECT_ROUTE, selectRoute} from '../route';

test(
  'should dispatch navigation action',
  macro,
  set('ui.current.progressionId', 'foo')({}),
  t => ({}),
  selectRoute('clue'),
  [
    {
      type: UI_SELECT_ROUTE,
      meta: {progressionId: 'foo'},
      payload: 'clue'
    }
  ],
  0
);

test(
  'should toggle route',
  macro,
  pipe(set('ui.current.progressionId', 'foo'), set('ui.route.foo', 'clue'))({}),
  t => ({}),
  selectRoute('clue'),
  [
    {
      type: UI_SELECT_ROUTE,
      meta: {progressionId: 'foo'},
      payload: 'clue'
    }
  ],
  0
);
