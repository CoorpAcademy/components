import test from 'ava';
import {CLOSE_POPIN, OPEN_POPIN} from '../../../actions/ui/quit-popin';
import reducer from '../quit-popin';

test('should have showQuitPopin intial value to false', t => {
  const state = reducer(undefined, {
    type: '@@ui/CLOSE_POPIN'
  });
  t.is(state, false);
});

test('should set showQuitPopin to true if OPEN_POPIN is received', t => {
  const state = reducer(false, {
    type: OPEN_POPIN
  });
  t.is(state, true);
});

test('should set showQuitPopin to false if CLOSE_POPIN is received', t => {
  const state = reducer(true, {
    type: CLOSE_POPIN
  });
  t.is(state, false);
});
