import test from 'ava';
import nock from 'nock';
import {postSandboxProgression} from '../post-progression';
import type {ProgressionFromAPI} from '..';

const testingSlideRef = '__testingSlideRef';
const skillRef = '_skill-ref';

const result: ProgressionFromAPI = {
  _id: 'sandbox',
  content: {
    ref: skillRef,
    type: 'skill'
  },
  engine: {
    ref: 'review',
    version: '1'
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
      slideId: testingSlideRef,
      skillRef
    })
    .reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should create a sandbox progression with success', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const progression = await postSandboxProgression(testingSlideRef, skillRef, token);
  t.deepEqual(result, progression);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() =>
    postSandboxProgression(testingSlideRef, skillRef, badToken)
  );

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
