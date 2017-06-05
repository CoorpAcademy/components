import test from 'ava';
import reducer from '../exit-nodes';
import {
  EXIT_NODE_FETCH_REQUEST,
  EXIT_NODE_FETCH_SUCCESS,
  EXIT_NODE_FETCH_FAILURE
} from '../../../actions/api/exit-nodes';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

test(
  'should set entities to null on request',
  macro,
  reducer,
  {},
  {
    type: EXIT_NODE_FETCH_REQUEST,
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
    type: EXIT_NODE_FETCH_REQUEST,
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
    type: EXIT_NODE_FETCH_REQUEST,
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
    type: EXIT_NODE_FETCH_SUCCESS,
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
    type: EXIT_NODE_FETCH_FAILURE,
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
    type: EXIT_NODE_FETCH_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: {}
  },
  {entities: {foo: 'foo'}}
);
