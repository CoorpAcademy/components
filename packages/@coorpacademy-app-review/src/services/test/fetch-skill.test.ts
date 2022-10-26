import test from 'ava';
import nock from 'nock';
import {Skill} from '../../types/common';
import {fetchSkill} from '../fetch-skill';

const result: Skill = {
  ref: 'skill_NyxtYFYir',
  name: 'Digital Awareness'
};

test.before(() => {
  nock('http://localhost:3000')
    .get('/api/v2/skills')
    .query({conditions: `{"ref":"skill_NyxtYFYir"}`})
    .reply(200, result);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch the skill with success', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const skill = await fetchSkill('skill_NyxtYFYir', token);
  t.deepEqual(result, skill);
});
