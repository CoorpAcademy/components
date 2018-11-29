import test from 'ava';
import set from 'lodash/fp/set';
import reducer from '../next-content';
import {
  NEXT_CONTENT_FETCH_REQUEST,
  NEXT_CONTENT_FETCH_SUCCESS,
  NEXT_CONTENT_FETCH_FAILURE
} from '../../../actions/api/next-content';
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
    type: NEXT_CONTENT_FETCH_REQUEST,
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
    type: NEXT_CONTENT_FETCH_REQUEST,
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
    type: NEXT_CONTENT_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: 'foo'}}
);

test(
  'should set next chapter on success',
  macro,
  reducer,
  {},
  {
    type: NEXT_CONTENT_FETCH_SUCCESS,
    meta: {id: 'foo'},
    payload: chapterRecommendations.nextChapter.card
  },
  {
    entities: {
      foo: chapterRecommendations.nextChapter.card
    }
  }
);

test(
  'should set next level on success',
  macro,
  reducer,
  {},
  {
    type: NEXT_CONTENT_FETCH_SUCCESS,
    meta: {id: 'foo'},
    payload: levelRecommendations.nextLevel
  },
  set('entities.foo', levelRecommendations.nextLevel, {})
);

test(
  'should unset next level when none is available',
  macro,
  reducer,
  {entities: {foo: levelRecommendations.nextLevel}},
  {
    type: NEXT_CONTENT_FETCH_SUCCESS,
    meta: {id: 'foo'},
    payload: undefined
  },
  {entities: {}}
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {entities: {foo: null}},
  {
    type: NEXT_CONTENT_FETCH_FAILURE,
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
    type: NEXT_CONTENT_FETCH_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: {}
  },
  {entities: {foo: 'foo'}}
);
