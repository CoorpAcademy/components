import test from 'ava';
import reducer from '../token';
import {StoreToken, STORE_TOKEN} from '../../../actions/data/token';

test('should have inital value', t => {
  const state = reducer(undefined, {} as StoreToken);
  t.is(state, null);
});

test('should set the value of STORE_TOKEN action', t => {
  const state = reducer(null, {type: STORE_TOKEN, payload: 'token'});
  t.is(state, 'token');
});
