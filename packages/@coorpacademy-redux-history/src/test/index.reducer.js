import test from 'ava';
import {createLocation, INITAL_STATE, historyReducer} from '..';

test('should have initial state', t => {
  const action = {type: 'foo'};
  const state = historyReducer(undefined, action);
  const expect = INITAL_STATE;
  t.deepEqual(state, expect);
});

test('should store payload of location action', t => {
  const location = {
    pathname: '/foo'
  };
  const action = createLocation(location);
  const state = historyReducer(undefined, action);
  const expect = location;
  t.deepEqual(state, expect);
});
