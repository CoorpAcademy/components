import test from 'ava';
import nock from 'nock';
import {CorrectionFromAPI} from '../../types/common';
import {fetchCorrection} from '../fetch-correction';

const progressionId = '123456789123';
const slideRef = 'sli_123546';
const answer = ['Lister vos tâches pour vous libérer l’esprit', '15 jours à Bora Bora'];

const correction: CorrectionFromAPI = {
  correctAnswer: ['Faux'],
  corrections: [
    {
      answer: answer[0],
      isCorrect: false
    },
    {
      answer: answer[1],
      isCorrect: true
    }
  ]
};

test.before(() => {
  nock('http://localhost:3000')
    .post(
      `/api/v2/progressions/${progressionId}/answers/${slideRef}`,
      JSON.stringify({
        answer
      })
    )
    .reply(200, correction);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch the correction of the slide for the specified progression successfully', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const response = await fetchCorrection(slideRef, token, progressionId, answer);
  t.deepEqual(correction, response);
});

test('should reject if a bad token is passed', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() =>
    fetchCorrection(slideRef, badToken, progressionId, answer)
  );

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
