import test from 'ava';
import reducer from '../rank';
import {
  RankAction,
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_START_FAILURE
} from '../../../actions/api/fetch-rank';

test('should have initial value', t => {
  const state = reducer(undefined, {} as RankAction);
  t.deepEqual(state, {});
});

test('should set the start value to null of FETCH_START_REQUEST action', t => {
  const state = reducer({}, {type: RANK_FETCH_START_REQUEST});
  t.deepEqual(state, {
    start: null
  });
});

test('should set the start value of FETCH_START_SUCCESS action', t => {
  const state = reducer({}, {type: RANK_FETCH_START_SUCCESS, payload: {rank: 93}});
  t.deepEqual(state, {
    start: 93
  });
});

test('should unset the start value of FETCH_START_FAILURE action', t => {
  const state = reducer({}, {type: RANK_FETCH_START_FAILURE});
  t.deepEqual(state, {});
});
