import test from 'ava';
import nock from 'nock';
import type {ProgressionFromAPI} from '../../types/common';
import {postAnswer} from '../post-answer';

const progressionId = '123456789123';
const skillRef = '_skill-ref';
const answer = ['Lister vos tâches pour vous libérer l’esprit', 'Vous isoler dans un lieu calme'];

const result: ProgressionFromAPI = {
  _id: '123456123456',
  state: {
    allAnswers: [
      {
        slideRef: 'sli_NkvrWPFF2',
        isCorrect: true,
        answer
      }
    ],
    isCorrect: true,
    nextContent: {
      type: 'slide',
      ref: 'sli_NJ3m5KtWh'
    },
    pendingSlides: [],
    slides: ['sli_NkvrWPFF2'],
    step: {
      current: 2
    },
    stars: 4
  }
};

test.before(() => {
  const moocApi = nock('http://localhost:3000');
  moocApi.post(`/api/v2/progressions/${progressionId}/answers`).reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should post the answers successfully', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const progression = await postAnswer(skillRef, token, progressionId, answer);
  t.deepEqual(result, progression);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => postAnswer(skillRef, badToken, progressionId, answer));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
