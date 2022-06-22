import test from 'ava';
import {fetchSkills} from './fetch-skills';
import {okJSONResponse} from './tools/fetch.mocks';
import {Skills} from '../types/skills';

test('should fetch a demo course', async t => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  const userId = 'user-1234';

  const result: Skills = [
    {
      _id: '12341234',
      name: 'skill-test',
      custom: false,
      ref: '_skill-ref'
    }
  ];

  const mockedFetchSkills = fetchSkills(okJSONResponse(result));
  const skills = await mockedFetchSkills(token, userId);

  t.deepEqual(result, skills);
});
