import test from 'ava';
import {pipe, set} from 'lodash/fp';

import applyInstructions from '../apply-instructions';

test('should return new variables with instructions to set initial attributes', t => {
  const instructions = [
    {value: 0, type: 'set', field: 'A'},
    {value: 3, type: 'set', field: 'lives'},
    {value: 0, type: 'set', field: 'stars'},
    {value: false, type: 'set', field: 'reverse'}
  ];

  const expectedVariables = pipe(
    set('lives', 3),
    set('stars', 0),
    set('variables.A', 0),
    set('variables.reverse', false)
  )({
    variables: {}
  });

  const variables = applyInstructions(instructions)({});

  t.deepEqual(expectedVariables, variables);
});

test('should return new variables with instructions to update attributes', t => {
  const instructions = [
    {value: 1, type: 'add', field: 'A'},
    {value: 4, type: 'add', field: 'stars'},
    {value: 'foo', type: 'add', field: 'B'},
    {value: 'baz', type: 'add', field: 'C'}
  ];

  const fromState = {
    lives: 4,
    stars: 4,
    variables: {
      A: 0,
      B: 0,
      C: 'bar',
      reverse: false
    }
  };
  const expectedVariables = pipe(
    set('stars', 8),
    set('variables.A', 1),
    set('variables.B', 0),
    set('variables.C', 'barbaz')
  )(fromState);

  const variables = applyInstructions(instructions)(fromState);

  t.deepEqual(expectedVariables, variables);
});

test('should return the same input when instructions type are not recognized', t => {
  const instructions = [
    {value: 1, type: 'foo', field: 'A'},
    {value: 4, type: 'bar', field: 'stars'}
  ];

  const fromState = {
    lives: 4,
    stars: 4,
    variables: {
      A: 0,
      reverse: false
    }
  };
  const variables = applyInstructions(instructions)(fromState);

  t.deepEqual(fromState, variables);
});
