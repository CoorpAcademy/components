import test from 'ava';
import type {Services} from '@coorpacademy/review-services';
import {services as mockedServices} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import type {StoreState} from '../../../reducers';
import {
  fetchSkill,
  SKILL_FETCH_FAILURE,
  SKILL_FETCH_REQUEST,
  SKILL_FETCH_SUCCESS
} from '../fetch-skill';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234',
    corrections: {},
    rank: {start: Number.NaN, end: Number.NaN},
    currentSkill: null
  },
  ui: {
    showCongrats: false,
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch FETCH_SKILL_SUCCESS when fetch skill is call with the correct skill', async t => {
  t.plan(4);
  const services: Services = {
    ...mockedServices,
    fetchSkill: (skillRef, token) => {
      t.is(token, '1234');
      t.is(skillRef, 'skill_NyxtYFYir');
      return Promise.resolve({ref: 'skill_NyxtYFYir', name: 'Digital Awareness'});
    }
  };

  const expectedActions = [
    {type: SKILL_FETCH_REQUEST},
    {type: SKILL_FETCH_SUCCESS, payload: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}}
  ];
  const {dispatch} = createTestStore(t, initialState, {services}, expectedActions);

  await dispatch(fetchSkill('skill_NyxtYFYir'));
});

test('should dispatch FETCH_SKILL_FAILURE when fetch skill failed', async t => {
  t.plan(4);
  const services: Services = {
    ...mockedServices,
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

  const {dispatch} = createTestStore(t, initialState, {services}, expectedActions);
  await dispatch(fetchSkill('123'));
});
