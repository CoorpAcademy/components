import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import applyInstructions from '../apply-instructions';
import {stateForFirstSlide, stateForSecondSlide} from './fixtures/states';

test('should return new state from first slide with instructions to set initial attributes', t => {
  const instructions = [
    {value: 0, type: 'set', field: 'A'},
    {value: 3, type: 'set', field: 'lives'},
    {value: 0, type: 'set', field: 'stars'},
    {value: false, type: 'set', field: 'reverse'}
  ];

  const expectedState = pipe(
    set('lives', 3),
    set('stars', 0),
    set('variables.A', 0),
    set('variables.reverse', false)
  )(stateForFirstSlide);

  const state = applyInstructions(instructions)(stateForFirstSlide);

  t.deepEqual(expectedState, state);
});

test('should return new state from in progress state with instructions to update attributes', t => {
  const instructions = [
    {value: 1, type: 'add', field: 'A'},
    {value: 4, type: 'add', field: 'stars'}
  ];

  const expectedState = pipe(set('stars', 8), set('variables.A', 1))(stateForSecondSlide);

  const state = applyInstructions(instructions)(stateForSecondSlide);

  t.deepEqual(expectedState, state);
});
