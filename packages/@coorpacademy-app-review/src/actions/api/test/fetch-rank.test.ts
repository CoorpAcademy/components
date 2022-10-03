import test from 'ava';
import type {Services} from '../../../types/common';
import type {StoreState} from '../../../reducers';
import {
  fetchStartRank,
  fetchEndRank,
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_START_FAILURE,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS,
  RANK_FETCH_END_FAILURE
} from '../fetch-rank';
import {services as mockedServices} from '../../../test/util/services.mock';
import {createTestStore} from '../../test/create-test-store';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234',
    corrections: {},
    rank: {}
  },
  ui: {
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    showQuitPopin: false
  }
};

test('should dispatch FETCH_START_SUCCESS action when fetchStartRank returns the start rank', async t => {
  t.plan(3);

  const services: Services = {
    ...mockedServices,
    fetchRank: token => {
      t.is(token, '1234');
      return Promise.resolve({rank: 93});
    }
  };
  const expectedActions = [
    {type: RANK_FETCH_START_REQUEST},
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: {rank: 93}
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);
  await dispatch(fetchStartRank);
});

test('should dispatch FETCH_START_FAILURE action when fetchStartRank fails', async t => {
  t.plan(3);

  const services: Services = {
    ...mockedServices,
    fetchRank: token => {
      t.is(token, '1234');
      return Promise.reject(new Error('unexpected'));
    }
  };

  const expectedActions = [
    {type: RANK_FETCH_START_REQUEST},
    {
      type: RANK_FETCH_START_FAILURE,
      payload: new Error('unexpected'),
      error: true
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchStartRank);
});

test('should dispatch FETCH_END_SUCCESS action when fetchEndRank returns the end rank', async t => {
  t.plan(3);

  const services: Services = {
    ...mockedServices,
    fetchRank: token => {
      t.is(token, '1234');
      return Promise.resolve({rank: 93});
    }
  };

  const expectedActions = [
    {type: RANK_FETCH_END_REQUEST},
    {
      type: RANK_FETCH_END_SUCCESS,
      payload: {rank: 93}
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchEndRank);
});

test('should dispatch FETCH_END_FAILURE action when fetchEndRank fails', async t => {
  t.plan(3);

  const services: Services = {
    ...mockedServices,
    fetchRank: token => {
      t.is(token, '1234');
      return Promise.reject(new Error('unexpected'));
    }
  };

  const expectedActions = [
    {type: RANK_FETCH_END_REQUEST},
    {
      type: RANK_FETCH_END_FAILURE,
      payload: new Error('unexpected'),
      error: true
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchEndRank);
});
