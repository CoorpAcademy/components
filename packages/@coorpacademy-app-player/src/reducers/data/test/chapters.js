import test from 'ava';
import reducer from '../chapters';
import {
  CHAPTER_FETCH_REQUEST,
  CHAPTER_FETCH_SUCCESS,
  CHAPTER_FETCH_FAILURE
} from '../../../actions/api/chapters';
import {PROGRESSION_FETCH_BESTOF_SUCCESS} from '../../../actions/api/progressions';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

test(
  'should set entities to null on request',
  macro,
  reducer,
  {},
  {
    type: CHAPTER_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: null}}
);

test(
  "should set entities to null if doesn't exist on request",
  macro,
  reducer,
  {},
  {
    type: CHAPTER_FETCH_REQUEST,
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
    type: CHAPTER_FETCH_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: 'foo'}}
);

test(
  'should set entities on success',
  macro,
  reducer,
  {},
  {
    type: CHAPTER_FETCH_SUCCESS,
    meta: {id: 'foo'},
    payload: 'foo'
  },
  {entities: {foo: 'foo'}}
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {entities: {foo: null}},
  {
    type: CHAPTER_FETCH_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: {}
  },
  {entities: {}}
);

test(
  'should do nothing is entity already exists on failure',
  macro,
  reducer,
  {entities: {foo: 'foo'}},
  {
    type: CHAPTER_FETCH_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: {}
  },
  {entities: {foo: 'foo'}}
);

test(
  'should set bestScore',
  macro,
  reducer,
  {entities: {foo: {bestScore: null}}},
  {
    type: PROGRESSION_FETCH_BESTOF_SUCCESS,
    meta: {chapterId: 'foo'},
    payload: {state: {stars: 12}}
  },
  {entities: {foo: {bestScore: 12}}}
);
