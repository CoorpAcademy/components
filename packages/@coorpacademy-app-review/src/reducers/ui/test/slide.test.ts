import test from 'ava';
import reducer, {initialState} from '../slide';
import {setValidateButtonStatus, SetValidateButtonStatus} from '../../../actions/ui/slides';

test('should have initial value', t => {
  const state = reducer(undefined, setValidateButtonStatus(false));
  t.deepEqual(state, initialState);
});

test('should set validateButton to true', t => {
  const state = reducer(undefined, setValidateButtonStatus(true));
  t.truthy(state);
  t.true(state.validateButton);
});

test('should set validateButton to false', t => {
  const state = reducer(undefined, setValidateButtonStatus(false));
  t.truthy(state);
  t.false(state.validateButton);
});

test('should return state directly when there is no corresponding action handler', t => {
  const state = reducer(undefined, {type: 'NOPE'} as unknown as SetValidateButtonStatus);
  t.deepEqual(state, initialState);
});
