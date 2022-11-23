import test from 'ava';
import nock from 'nock';
import {fetchSlidesToReviewBySkillRef} from '../fetch-slides-to-review-by-skill-ref';
import {SlideIdFromAPI} from '../types/services-types';

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
  nock('http://localhost:3000')
    .get('/api/v2/skills/_skill-ref/review/user/592d830b240b923f00bffba6/slide')
    .reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch slides id with success', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const slidesId = await fetchSlidesToReviewBySkillRef(token, '_skill-ref');
  t.deepEqual(result, slidesId);
});

test('should reject if a bad token is passed', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => fetchSlidesToReviewBySkillRef(badToken, '_skill-ref'));
  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
