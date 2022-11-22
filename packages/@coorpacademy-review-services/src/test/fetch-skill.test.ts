import test from 'ava';
import nock from 'nock';
import {Skill} from '../types/services-types';
import {fetchSkill} from '../fetch-skill';

const results: Skill[] = [
  {
    ref: 'skill_NyxtYFYir',
    name: 'Digital Awareness'
  }
];
test.before(() => {
  nock('http://localhost:3000')
    .get('/api/v2/skills')
    .query({conditions: `{"ref":"skill_NyxtYFYir"}`})
    .reply(200, results);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch the skill with success', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const skill = await fetchSkill('skill_NyxtYFYir', token);
  t.deepEqual(results[0], skill);
});
