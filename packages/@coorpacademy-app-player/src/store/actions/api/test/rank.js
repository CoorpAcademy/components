import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  fetchStartRank,
  fetchEndRank,
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_START_FAILURE,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS,
  RANK_FETCH_END_FAILURE
} from '../rank';

test(
  'should fetch start rank',
  macro,
  {},
  t => ({
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    }
  }),
  fetchStartRank(),
  [
    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1
    }
  ],
  1
);

test(
  'should fetch end rank',
  macro,
  {},
  t => ({
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    }
  }),
  fetchEndRank(),
  [
    {
      type: RANK_FETCH_END_REQUEST
    },
    {
      type: RANK_FETCH_END_SUCCESS,
      payload: 1
    }
  ],
  1
);

test(
  'should prevent request if start is already fetched',
  macro,
  set('data.rank.start', 1, {}),
  t => ({
    LeaderBoard: {
      getRank: () => {
        t.fail();
      }
    }
  }),
  fetchStartRank(),
  [
    {
      type: RANK_FETCH_START_REQUEST
    }
  ],
  0
);

test(
  'should return error if start request failed',
  macro,
  {},
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        throw new Error('some error');
      }
    }
  }),
  fetchStartRank(),
  [
    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_FAILURE,
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);

test(
  'should return error if end request failed',
  macro,
  {},
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        throw new Error('some error');
      }
    }
  }),
  fetchEndRank(),
  [
    {
      type: RANK_FETCH_END_REQUEST
    },
    {
      type: RANK_FETCH_END_FAILURE,
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);
