import test from 'ava';
import {Services} from '../../../types/common';
import {
  fetchSkills,
  SKILLS_FETCH_FAILURE,
  SKILLS_FETCH_REQUEST,
  SKILLS_FETCH_SUCCESS
} from '../fetch-skills';
import {services as mockedServices} from '../../../test/util/services.mock';
import {StoreState} from '../../../reducers';
import {createTestStore} from './create-test-store';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234'
  },
  ui: {
    currentSlideRef: '',
    navigation: [],
    answers: []
  }
};

test('should dispatch SKILLS_FETCH_SUCCESS actions when fetchSkills return a list of skills', async t => {
  const services: Services = {
    ...mockedServices,
    fetchSkills: token => {
      t.is(token, '1234');
      return Promise.resolve([]);
    }
  };

  const expectedActions = [
    {type: SKILLS_FETCH_REQUEST},
    {
      type: SKILLS_FETCH_SUCCESS,
      payload: []
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchSkills('1234'));
});

test('should dispatch SKILLS_FETCH_FAILURE action when fetchSkills fails', async t => {
  const services: Services = {
    ...mockedServices,
    fetchSkills: token => {
      t.is(token, '1234');
      return Promise.reject(new Error('unexpected'));
    }
  };

  const expectedActions = [
    {type: SKILLS_FETCH_REQUEST},
    {
      type: SKILLS_FETCH_FAILURE,
      payload: new Error('unexpected'),
      error: true
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchSkills('1234'));
});
