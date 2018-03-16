import test from 'ava';
import reducer from '../configs';
import {ENGINE_CONFIG_FETCH_SUCCESS} from '../../../actions/api/progressions';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {});

test(
  'should set entities on success',
  macro,
  reducer,
  {},
  {
    type: ENGINE_CONFIG_FETCH_SUCCESS,
    meta: {engine: {ref: 'foo', version: 'bar'}},
    payload: {baz: 'qux'}
  },
  {entities: {'foo@bar': {baz: 'qux'}}}
);
