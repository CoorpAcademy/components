import test from 'ava';
import set from 'lodash/fp/set';
import reducer from '../recommendations';
import {
  RECO_FETCH_REQUEST,
  RECO_FETCH_SUCCESS,
  RECO_FETCH_FAILURE
} from '../../../actions/api/recommendations';
import macro from '../../test/helpers/macro';

import chapterRecommendations from './fixtures/chapter-recommendations';
import levelRecommendations from './fixtures/level-recommendations';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

test(
  'should set entity to null on request',
  macro,
  reducer,
  {},
  {
    type: RECO_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: null}}
);

test(
  "should set entity to null if doesn't exist on request",
  macro,
  reducer,
  {},
  {
    type: RECO_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: null}}
);

test(
  'should do nothing if entity already exists on request',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: RECO_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: 'foo'}}
);

test(
  'should set chapter recommendations on success',
  macro,
  reducer,
  {},
  {
    type: RECO_FETCH_SUCCESS,
    meta: {id: 'foo'},
    payload: chapterRecommendations.list
  },
  {entities: {foo: chapterRecommendations.list}}
);

test(
  'should set learner recommendations on success',
  macro,
  reducer,
  {},
  {
    type: RECO_FETCH_SUCCESS,
    meta: {id: 'foo'},
    payload: levelRecommendations.list
  },
  set('entities.foo', levelRecommendations.list, {})
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {entities: {foo: null}},
  {
    type: RECO_FETCH_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: {}
  },
  {entities: {}}
);

test(
  'should do nothing on failure if entity already exists',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: RECO_FETCH_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: {}
  },
  {entities: {foo: 'foo'}}
);
