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
import set from 'lodash/fp/set';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234',
    corrections: {},
    rank: {start: Number.NaN, end: Number.NaN}
  },
  ui: {
    showCongrats: false,
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    showQuitPopin: false
  }
};

test('should dispatch FETCH_START_SUCCESS action when fetchStartRank returns the start rank', async t => {
  t.plan(4);

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

  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);
  await dispatch(fetchStartRank);

  const newState = getState();
  t.deepEqual(newState.data.rank, {start: 93, end: Number.NaN});
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
  t.plan(4);

  const services: Services = {
    ...mockedServices,
    fetchRank: token => {
      t.is(token, '1234');
      return Promise.resolve({rank: 90});
    }
  };

  const expectedActions = [
    {type: RANK_FETCH_END_REQUEST},
    {
      type: RANK_FETCH_END_SUCCESS,
      payload: {rank: 90}
    }
  ];

  const _initialState = set('data.rank.start', 93, initialState);
  const {dispatch, getState} = createTestStore(t, _initialState, services, expectedActions);

  await dispatch(fetchEndRank);
  const newState = getState();
  t.deepEqual(newState.data.rank, {start: 93, end: 90});
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
