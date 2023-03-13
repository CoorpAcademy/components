import test from 'ava';
import nock from 'nock';
import type {SandboxProgressionFromAPI} from '../types/services-types';
import {postSandboxProgression} from '../post-progression';

const testingSlideRef = '__testingSlideRef';
const result: SandboxProgressionFromAPI = {
  _id: 'sandbox',
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
      ref: testingSlideRef
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
    .post('/api/v2/progressions/sandbox', {
      engineRef: 'review',
      slideId: testingSlideRef
    })
    .reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should create a sandbox progression with success', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const progression = await postSandboxProgression(testingSlideRef, token);
  t.deepEqual(result, progression);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => postSandboxProgression(testingSlideRef, badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
