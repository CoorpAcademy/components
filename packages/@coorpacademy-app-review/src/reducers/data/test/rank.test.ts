import test from 'ava';
import reducer from '../rank';
import {
  RankAction,
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_START_FAILURE,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS,
  RANK_FETCH_END_FAILURE
} from '../../../actions/api/fetch-rank';

test('should have initial value', t => {
  const state = reducer(undefined, {} as RankAction);
  t.deepEqual(state, {});
});

test("should set the start value to null if the value doesn't exist of FETCH_START_REQUEST action", t => {
  const state = reducer({}, {type: RANK_FETCH_START_REQUEST});
  t.deepEqual(state, {
    start: null
  });
});

test('should do nothing if a start value already exists of FETCH_START_REQUEST action', t => {
  const state = reducer({start: 93}, {type: RANK_FETCH_START_REQUEST});
  t.deepEqual(state, {
    start: 93
  });
});

test('should set the start value of FETCH_START_SUCCESS action', t => {
  const state = reducer({}, {type: RANK_FETCH_START_SUCCESS, payload: {rank: 93}});
  t.deepEqual(state, {
    start: 93
  });
});

test('should unset the start value if the value is null of FETCH_START_FAILURE action', t => {
  const state = reducer({start: null}, {type: RANK_FETCH_START_FAILURE});
  t.deepEqual(state, {});
});

test('should do nothing if the start value already exists of FETCH_START_FAILURE action', t => {
  const state = reducer({start: 93}, {type: RANK_FETCH_START_FAILURE});
  t.deepEqual(state, {start: 93});
});

test("should set the end value to null if the value doesn't exist of FETCH_END_REQUEST action", t => {
  const state = reducer({}, {type: RANK_FETCH_END_REQUEST});
  t.deepEqual(state, {
    end: null
  });
});

test('should do nothing if an end value already exists of FETCH_END_REQUEST action', t => {
  const state = reducer({end: 94}, {type: RANK_FETCH_END_REQUEST});
  t.deepEqual(state, {
    end: 94
  });
});

test('should set the end value of FETCH_END_SUCCESS action', t => {
  const state = reducer({}, {type: RANK_FETCH_END_SUCCESS, payload: {rank: 94}});
  t.deepEqual(state, {
    end: 94
  });
});

test('should unset the end value if the value is null of FETCH_END_FAILURE action', t => {
  const state = reducer({end: null}, {type: RANK_FETCH_END_FAILURE});
  t.deepEqual(state, {});
});

test('should do nothing if the end value already exists of FETCH_END_FAILURE action', t => {
  const state = reducer({end: 94}, {type: RANK_FETCH_END_FAILURE});
  t.deepEqual(state, {end: 94});
});
