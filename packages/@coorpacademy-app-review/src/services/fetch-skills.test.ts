import test from 'ava';
import {Skill} from '../types/common';
import {fetchSkills} from './fetch-skills';
import {token} from './tools/fetch.mocks';

// eslint-disable-next-line ava/no-skip-test
test.skip('should fetch skills with success', async t => {
  const result: Skill[] = [
    {
      slidesToReview: 1,
      name: 'skill-test',
      custom: false,
      skillRef: '_skill-ref'
    }
  ];

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
