import test from 'ava';

import reducer from '../videos';
import {
  VIDEOS_FETCH_URI_REQUEST,
  VIDEOS_FETCH_URI_SUCCESS,
  VIDEOS_FETCH_URI_FAILURE
} from '../../../actions/api/videos';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

test(
  'should set entities to null on request',
  macro,
  reducer,
  {},
  {
    type: VIDEOS_FETCH_URI_REQUEST,
    meta: {id: 'foo', provider: 'foobar'}
  },
  {entities: {foo: {url: null}}}
);

test(
  'should do nothing if entity already exists on request',
  macro,
  reducer,
  {entities: {foo: {url: 'https://foo.bar/baz.mp4'}}},
  {
    type: VIDEOS_FETCH_URI_REQUEST,
    meta: {id: 'foo', provider: 'foobar'}
  },
  {entities: {foo: {url: 'https://foo.bar/baz.mp4'}}}
);

test(
  'should set entities on success',
  macro,
  reducer,
  {},
  {
    type: VIDEOS_FETCH_URI_SUCCESS,
    meta: {id: 'foo', provider: 'foobar'},
    payload: 'https://foo.bar/baz.mp4'
  },
  {entities: {foo: {url: 'https://foo.bar/baz.mp4'}}}
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {entities: {foo: {url: null}}},
  {
    type: VIDEOS_FETCH_URI_FAILURE,
    meta: {id: 'foo', provider: 'foobar'},
    error: true,
    payload: ''
  },
  {
    entities: {
      foo: {}
    }
  }
);

test(
  'should do nothing is entity already exists on failure',
  macro,
  reducer,
  {entities: {foo: {url: 'https://foo.bar/baz.mp4'}}},
  {
    type: VIDEOS_FETCH_URI_FAILURE,
    meta: {id: 'foo', provider: 'foobar'},
    error: true,
    payload: ''
  },
  {entities: {foo: {url: 'https://foo.bar/baz.mp4'}}}
);
