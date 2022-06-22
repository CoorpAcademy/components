import test from 'ava';
import {Skills} from '../types/skills';
import {fetchSkills} from './fetch-skills';
import {okJSONResponse, token} from './tools/fetch.mocks';

test('should fetch a demo course', async t => {
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
