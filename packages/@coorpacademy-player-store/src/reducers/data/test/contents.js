import test from 'ava';
import reducer from '../contents';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_FETCH_FAILURE,
  CONTENT_INFO_FETCH_SUCCESS
} from '../../../actions/api/contents';
import {PROGRESSION_FETCH_BESTOF_SUCCESS} from '../../../actions/api/progressions';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {});

test(
  'should set entities to null on request',
  macro,
  reducer,
  {},
  {
    type: CONTENT_FETCH_REQUEST,
    meta: {type: 'foo', ref: 'bar'}
  },
  {foo: {entities: {bar: null}}}
);

test(
  "should set entities to null if doesn't exist on request",
  macro,
  reducer,
  {},
  {
    type: CONTENT_FETCH_REQUEST,
    meta: {type: 'foo', ref: 'bar'}
  },
  {foo: {entities: {bar: null}}}
);

test(
  'should do nothing if entity already exists on request',
  macro,
  reducer,
  {foo: {entities: {bar: 'baz'}}},
  {
    type: CONTENT_FETCH_REQUEST,
    meta: {type: 'foo', ref: 'bar'}
  },
  {foo: {entities: {bar: 'baz'}}}
);

test(
  'should set entities on success',
  macro,
  reducer,
  {},
  {
    type: CONTENT_FETCH_SUCCESS,
    meta: {type: 'foo', ref: 'bar'},
    payload: 'baz'
  },
  {foo: {entities: {bar: 'baz'}}}
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {foo: {entities: {bar: null}}},
  {
    type: CONTENT_FETCH_FAILURE,
    meta: {type: 'foo', ref: 'bar'},
    error: true,
    payload: {}
  },
  {foo: {entities: {}}}
);

test(
  'should do nothing is entity already exists on failure',
  macro,
  reducer,
  {foo: {entities: {bar: 'baz'}}},
  {
    type: CONTENT_FETCH_FAILURE,
    meta: {type: 'foo', ref: 'bar'},
    error: true,
    payload: {}
  },
  {foo: {entities: {bar: 'baz'}}}
);

test(
  'should set bestScore',
  macro,
  reducer,
  {foo: {entities: {bar: {bestScore: null}}}},
  {
    type: PROGRESSION_FETCH_BESTOF_SUCCESS,
    meta: {type: 'foo', ref: 'bar'},
    payload: {stars: 12}
  },
  {foo: {entities: {bar: {bestScore: 12}}}}
);

test(
  'should set content-info',
  macro,
  reducer,
  {foo: {entities: {bar: {info: null}}}},
  {
    type: CONTENT_INFO_FETCH_SUCCESS,
    meta: {type: 'foo', ref: 'bar'},
    payload: {foo: 'bar'}
  },
  {foo: {entities: {bar: {info: {foo: 'bar'}}}}}
);
