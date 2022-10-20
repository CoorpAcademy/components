import test from 'ava';
import reducer from '../rank';
import {
  RankAction,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_END_SUCCESS
} from '../../../actions/api/fetch-rank';
import {
  POST_PROGRESSION_REQUEST,
  POST_PROGRESSION_SUCCESS
} from '../../../actions/api/post-progression';
import {postProgressionResponse} from '../../../test/util/services.mock';

test('should have initial value', t => {
  const state = reducer(undefined, {} as RankAction);
  t.deepEqual(state, {
    start: Number.NaN,
    end: Number.NaN
  });
});

test('should set the start value of FETCH_START_SUCCESS action', t => {
  const state = reducer(
    {
      start: Number.NaN,
      end: Number.NaN
    },
    {type: RANK_FETCH_START_SUCCESS, payload: {rank: 93}}
  );
  t.deepEqual(state, {
    start: 93,
    end: Number.NaN
  });
});

test('should set the end value of FETCH_END_SUCCESS action', t => {
  const state = reducer(
    {
      start: 93,
      end: Number.NaN
    },
    {type: RANK_FETCH_END_SUCCESS, payload: {rank: 94}}
  );
  t.deepEqual(state, {
    start: 93,
    end: 94
  });
});

test('should unset the start and end value if the action is POST_PROGRESSION_SUCCESS', t => {
  const state = reducer(
    {
      start: 93,
      end: 94
    },
    {type: POST_PROGRESSION_SUCCESS, payload: postProgressionResponse}
  );
  t.deepEqual(state, {
    start: Number.NaN,
    end: Number.NaN
  });
});

test('should set the initial value when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer(
    {
      start: 93,
      end: 94
    },
    {type: POST_PROGRESSION_REQUEST}
  );
  t.deepEqual(state, {
    start: Number.NaN,
    end: Number.NaN
  });
});
