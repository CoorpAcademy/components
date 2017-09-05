import test from 'ava';
import createReducer from '..';

test('should include all expected sub-reducers', t => {
  const expectedFields = ['counter', 'route'].sort();
  const reducer = createReducer();
  const initialState = undefined;
  const action = {type: Math.random()};
  const state = reducer(initialState, action);
  t.deepEqual(Object.keys(state).sort(), expectedFields);
});
