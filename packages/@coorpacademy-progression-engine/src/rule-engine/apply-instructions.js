// @flow
import {reduce, set, update} from 'lodash/fp';
import type {State, Variables, Variable} from '../types';
import type {Instruction} from './types';

const apply = <T: Variables>(variables: T, instruction: Instruction): T => {
  const {type, value, field} = instruction;

  switch (type) {
    case 'set':
      return set(field, value, variables);
    case 'add':
      return update(
        field,
        (v: Variable): Variable => {
          if (
            typeof v === typeof value &&
            (typeof v === 'number' || typeof v === 'string') &&
            (typeof value === 'number' || typeof value === 'string')
          )
            return v + value;
          return v;
        },
        variables
      );
    default:
      return variables;
  }
};

const updateVariables =
  (instructions: Array<Instruction>) =>
  (fromState: State): State => {
    const {lives, stars, ...variables} = reduce(
      apply,
      {
        lives: fromState.lives,
        stars: fromState.stars,
        ...fromState.variables
      },
      instructions
    );

    return {
      ...fromState,
      lives,
      stars,
      variables
    };
  };

export default updateVariables;
