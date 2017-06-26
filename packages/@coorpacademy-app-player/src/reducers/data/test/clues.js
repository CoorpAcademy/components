import test from 'ava';
import reducer from '../clues';
import {
  CLUE_FETCH_REQUEST,
  CLUE_FETCH_SUCCESS,
  CLUE_FETCH_FAILURE
} from '../../../actions/api/clues';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

test(
  'should set entity to null on request',
  macro,
  reducer,
  {},
  {
    type: CLUE_FETCH_REQUEST,
    meta: {progressionId: 'foo', slideId: 'bar'}
  },
  {entities: {foo: {bar: null}}}
);

test(
  "should set entity to null if doesn't exist on request",
  macro,
  reducer,
  {},
  {
    type: CLUE_FETCH_REQUEST,
    meta: {progressionId: 'foo', slideId: 'bar'}
  },
  {entities: {foo: {bar: null}}}
);

test(
  'should do nothing if entity already exists on request',
  macro,
  reducer,
  {entities: {foo: {bar: 'foo'}}},
  {
    type: CLUE_FETCH_REQUEST,
    meta: {progressionId: 'foo', slideId: 'bar'}
  },
  {entities: {foo: {bar: 'foo'}}}
);

test(
  'should set <entity></entity> on success',
  macro,
  reducer,
  {},
  {
    type: CLUE_FETCH_SUCCESS,
    meta: {progressionId: 'foo', slideId: 'bar'},
    payload: 'foo'
  },
  {entities: {foo: {bar: 'foo'}}}
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {entities: {foo: {bar: null}}},
  {
    type: CLUE_FETCH_FAILURE,
    meta: {progressionId: 'foo', slideId: 'bar'},
    error: true,
    payload: {}
  },
  {entities: {foo: {}}}
);

test(
  'should do nothing on failure if entity already exists',
  macro,
  reducer,
  {entities: {foo: {bar: 'foo'}}},
  {
    type: CLUE_FETCH_FAILURE,
    meta: {progressionId: 'foo', slideId: 'bar'},
    error: true,
    payload: {}
  },
  {entities: {foo: {bar: 'foo'}}}
);
