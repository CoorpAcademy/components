import test from 'ava';
import reducer from '../navigation';
import {NavigateToAction, NAVIGATE_BACK, NAVIGATE_TO} from '../../../actions/ui/navigation';

test('should have initial value', t => {
  const state = reducer(undefined, {} as NavigateToAction);
  t.deepEqual(state, []);
});

test('should set the value of NAVIGATE_TO and NAVIGATE_BACK action', t => {
  const state = reducer([], {type: NAVIGATE_TO, payload: 'loader'});
  t.deepEqual(state, ['loader']);

  const updatedState = reducer(state, {type: NAVIGATE_TO, payload: 'slides'});
  t.deepEqual(updatedState, ['loader', 'slides']);

  const _updatedState = reducer(updatedState, {type: NAVIGATE_BACK});
  t.deepEqual(_updatedState, ['loader']);
});
