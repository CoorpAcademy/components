import test from 'ava';
import noop from 'lodash/fp/noop';
import {toggleStateOnKeyPress} from '..';

test('should not throw if ref is unavailable', t => {
  t.plan(2);
  let state = false;
  const setState = (newState: boolean) => {
    state = newState;
    t.pass();
  };
  toggleStateOnKeyPress(
    state,
    setState,
    undefined
  )({key: 'Enter', stopPropagation: noop, preventDefault: noop});

  t.pass();
});
