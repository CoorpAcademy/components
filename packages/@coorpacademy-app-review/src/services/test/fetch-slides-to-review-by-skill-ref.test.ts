import test from 'ava';
import nock from 'nock';
import {fetchSlidesToReviewBySkillRef} from '../fetch-slides-to-review-by-skill-ref';
import {SlideIdFromAPI} from '../../types/common';

const lambdaReviewURL = process.env.LAMBDA_REVIEW_URL || 'http://localhost:7006';

const result: SlideIdFromAPI[] = [
  {
    slideId: 'sli_6'
  },
  {
    slideId: 'sli_7'
  },
  {
    slideId: 'sli_8'
  },
  {
    slideId: 'sli_9'
  },
  {
    slideId: 'sli_10'
  }
];

test.before(() => {
  nock(lambdaReviewURL)
    .get('/api/v1/review/users/592d830b240b923f00bffba6/skills/_skill-ref/slide?limit=5&offset=0')
    .reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch slides id with success', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const slidesId = await fetchSlidesToReviewBySkillRef(lambdaReviewURL, token, '_skill-ref');
  t.deepEqual(result, slidesId);
});

test('should reject if a bad token is passed', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() =>
    fetchSlidesToReviewBySkillRef(lambdaReviewURL, badToken, '_skill-ref')
  );
  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
