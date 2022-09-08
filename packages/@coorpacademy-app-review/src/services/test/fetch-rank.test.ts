import test from 'ava';
import nock from 'nock';
import {Rank} from '../../types/common';
import {fetchRank} from '../fetch-rank';

const result: Rank = {
  rank: 93
};

test.before(() => {
  nock('http://localhost:3000')
    .get('/api/v1/leaderboard/rank/592d830b240b923f00bffba6?group=ALL')
    .reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch rank with success', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const rank = await fetchRank(token);
  t.deepEqual(result, rank);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => fetchRank(badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
