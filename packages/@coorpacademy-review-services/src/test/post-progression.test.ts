import test from 'ava';
import nock from 'nock';
import type {ProgressionFromAPI} from '../types/services-types';
import {postProgression} from '../post-progression';

const skillRef = '_skill-ref';
const result: ProgressionFromAPI = {
  _id: '123456123456',
  content: {
    ref: '_skill-ref',
    type: 'skill'
  },
  engine: {
    ref: 'review'
  },
  state: {
    allAnswers: [],
    isCorrect: true,
    nextContent: {
      type: 'slide',
      ref: 'sli_NJ3m5KtWh'
    },
    pendingSlides: [],
    slides: [],
    step: {
      current: 1
    },
    stars: 0
  }
};

test.before(() => {
  const moocApi = nock('http://localhost:3000');
  moocApi
    .post('/api/v2/progressions', {
      content: {
        ref: '_skill-ref',
        type: 'skill'
      },
      engine: {
        ref: 'review',
        version: '1'
      }
    })
    .reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should create progression with success', async t => {
  const token = process.env.API_TEST_TOKEN || '';
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
