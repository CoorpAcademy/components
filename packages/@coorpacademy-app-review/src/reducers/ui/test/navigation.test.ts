import test from 'ava';
import reducer from '../navigation';
import {NavigateToAction, navigateBack, navigateTo} from '../../../actions/ui/navigation';

test('should have initial value', t => {
  const state = reducer(undefined, {} as NavigateToAction);
  t.deepEqual(state, []);
});

test('should set the value of NAVIGATE_TO and NAVIGATE_BACK action', t => {
  const state = reducer([], navigateTo('loader'));
  t.deepEqual(state, ['loader']);

  const updatedState = reducer(state, navigateTo('skills'));
  t.deepEqual(updatedState, ['loader', 'skills']);

  const _updatedState = reducer(updatedState, navigateBack);
  t.deepEqual(_updatedState, ['loader']);
});
