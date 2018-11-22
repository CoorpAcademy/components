import test from 'ava';
import reducer from '../rank';
import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_START_FAILURE,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS,
  RANK_FETCH_END_FAILURE
} from '../../../actions/api/rank';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {});

test(
  "should set start to null if doesn't exist on request",
  macro,
  reducer,
  {},
  {
    type: RANK_FETCH_START_REQUEST
  },
  {start: null}
);

test(
  'should do nothing if start already exists on request',
  macro,
  reducer,
  {start: 10},
  {
    type: RANK_FETCH_START_REQUEST
  },
  {start: 10}
);

test(
  'should set start on success',
  macro,
  reducer,
  {},
  {
    type: RANK_FETCH_START_SUCCESS,
    payload: 4
  },
  {start: 4}
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {start: null},
  {
    type: RANK_FETCH_START_FAILURE,
    error: true,
    payload: {}
  },
  {}
);

test(
  'should do nothing on failure if start already exists',
  macro,
  reducer,
  {start: 10},
  {
    type: RANK_FETCH_START_FAILURE,
    error: true,
    payload: {}
  },
  {start: 10}
);

test(
  "should set end to null if doesn't exist on request",
  macro,
  reducer,
  {},
  {
    type: RANK_FETCH_END_REQUEST
  },
  {end: null}
);

test(
  'should do nothing if end already exists on request',
  macro,
  reducer,
  {end: 10},
  {
    type: RANK_FETCH_END_REQUEST
  },
  {end: 10}
);

test(
  'should set end on success',
  macro,
  reducer,
  {},
  {
    type: RANK_FETCH_END_SUCCESS,
    payload: 4
  },
  {end: 4}
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {end: null},
  {
    type: RANK_FETCH_END_FAILURE,
    error: true,
    payload: {}
  },
  {}
);

test(
  'should do nothing on failure if end already exists',
  macro,
  reducer,
  {end: 10},
  {
    type: RANK_FETCH_END_FAILURE,
    error: true,
    payload: {}
  },
  {end: 10}
);
