import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import {State, Variables, Variable} from '../types';
import {Instruction} from './types';

const apply = <T>(variables: T & Variables, instruction: Instruction): T => {
  const {type, value, field} = instruction;

  switch (type) {
    case 'set':
      return set(field, value, variables);
    case 'add':
      return update(
        field,
        (v: Variable): Variable => {
          if (typeof v === 'number' && typeof value === 'number') return v + value;

          if (typeof v === 'string' && typeof value === 'string') return v + value;
          return v;
        },
        variables
      );
    default:
      return variables;
  }
};

const updateVariables = (instructions: Instruction[]) => (fromState: State): State => {
  const {lives, stars, ...variables}: Variables = reduce(
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
