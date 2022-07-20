import test from 'ava';
import nock from 'nock';
import type {ProgressionFromAPI} from '../../types/common';
import {postProgression} from '../post-progression';
import {token} from '../tools/fetch.mocks';

const skillRef = '_skill-ref';
const result: ProgressionFromAPI = {
  _id: '123456123456',
  state: {
    isCorrect: true,
    step: {
      current: 1
    },
    nextContent: {
      type: 'slide',
      ref: 'sli_NJ3m5KtWh'
    },
    pendingSlides: []
  }
};

test.before(() => {
  const moocApi = nock('http://localhost:3000');
  moocApi.post('/api/v2/progressions').reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should create progression with success', async t => {
  const progression = await postProgression(skillRef, token);
  t.deepEqual(result, progression);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => postProgression(skillRef, badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
