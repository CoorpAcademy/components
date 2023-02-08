import test from 'ava';
import type {Services, Skill} from '@coorpacademy/review-services';
import {SKILL_REF_FOR_DEFAULT_SLIDES} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import {initialState} from '../../../test/fixtures';
import {
  fetchSkill,
  SKILL_FETCH_FAILURE,
  SKILL_FETCH_REQUEST,
  SKILL_FETCH_SUCCESS
} from '../fetch-skill';

export const fetchSkillResponse: Skill = {
  ref: SKILL_REF_FOR_DEFAULT_SLIDES,
  name: 'Digital Awareness'
};

test('should dispatch FETCH_SKILL_SUCCESS when fetch skill is call with the correct skill', async t => {
  t.plan(4);
  const services: {fetchSkill: Services['fetchSkill']} = {
    fetchSkill: (skillRef, token) => {
      t.is(token, '1234');
      t.is(skillRef, SKILL_REF_FOR_DEFAULT_SLIDES);
      return Promise.resolve(fetchSkillResponse);
    }
  };

  const expectedActions = [
    {type: SKILL_FETCH_REQUEST},
    {type: SKILL_FETCH_SUCCESS, payload: fetchSkillResponse}
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchSkill(SKILL_REF_FOR_DEFAULT_SLIDES));
});

test('should dispatch FETCH_SKILL_FAILURE when fetch skill failed', async t => {
  t.plan(4);
  const services: {fetchSkill: Services['fetchSkill']} = {
    fetchSkill: (skillRef, token) => {
      t.is(token, '1234');
      t.is(skillRef, '123');
      return Promise.reject(new Error('Fetch skill action failed'));
    }
  };

  const expectedActions = [
    {type: SKILL_FETCH_REQUEST},
    {type: SKILL_FETCH_FAILURE, payload: new Error('Fetch skill action failed'), error: true}
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);
  await dispatch(fetchSkill('123'));
});
