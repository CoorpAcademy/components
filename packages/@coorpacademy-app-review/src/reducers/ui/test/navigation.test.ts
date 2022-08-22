import test from 'ava';
import reducer from '../navigation';
import {NavigateTo, NAVIGATE_TO, NAVIGATE_BACK} from '../../../actions/ui/navigation';

test('should have inital value', t => {
  const state = reducer(undefined, {} as NavigateTo);
  t.deepEqual(state, []);
});

test('should set the value of NAVIGATE_TO and NAVIGATE_BACK action', t => {
  const state = reducer([], {type: NAVIGATE_TO, payload: 'loader'});
  t.deepEqual(state, ['loader']);

  const updatedState = reducer(state, {type: NAVIGATE_TO, payload: 'skills'});
  t.deepEqual(updatedState, ['loader', 'skills']);

  const _updatedState = reducer(updatedState, {type: NAVIGATE_BACK});
  t.deepEqual(_updatedState, ['loader']);
});
