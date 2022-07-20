import test from 'ava';
import nock from 'nock';
import {Skill} from '../../types/common';
import {fetchSkills} from '../fetch-skills';
import {token} from '../tools/fetch.mocks';

const result: Skill[] = [
  {
    slidesToReview: 1,
    name: 'skill-test',
    custom: false,
    skillRef: '_skill-ref'
  }
];

test.before(() => {
  nock('http://localhost:3000')
    .get('/api/v2/skills/review/user/592d830b240b923f00bffba6')
    .reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch skills with success', async t => {
  const skills = await fetchSkills(token);
  t.deepEqual(result, skills);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => fetchSkills(badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
