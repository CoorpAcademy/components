import test from 'ava';
import {Skills} from '../types/skills';
import {fetchSkills} from './fetch-skills';
import {okJSONResponse, token} from './tools/fetch.mocks';

test('should fetch skills with success', async t => {
  const result: Skills = [
    {
      _id: '12341234',
      name: 'skill-test',
      custom: false,
      ref: '_skill-ref'
    }
  ];

  const mockedFetchSkills = fetchSkills(okJSONResponse(result));
  const skills = await mockedFetchSkills(token);

  t.deepEqual(result, skills);
});

test('should reject bad token', async t => {
  const badToken = 'token is not a jwt';
  const mockedFetchSkills = fetchSkills(okJSONResponse([]));

  const error = await t.throwsAsync(() => mockedFetchSkills(badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
