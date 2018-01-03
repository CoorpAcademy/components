// @flow
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import type {Instruction, Variables} from './types';

type FlattenVariables = {[string]: string | boolean | number};

const apply = (variables: FlattenVariables, instruction: Instruction): FlattenVariables => {
  const {type, value, field} = instruction;

  switch (type) {
    case 'set':
      return set(field, value, variables);
    case 'add':
      return update(field, v => v + value, variables);
    default:
      return variables;
  }
};

const updateVariables = (instructions: Array<Instruction>) => (fromState: Variables): Variables => {
  const {lives, stars, ...variables} = reduce(
    apply,
    {
      lives: fromState.lives,
      stars: fromState.stars,
      ...fromState.variables
    },
    instructions
  );

  return {lives, stars, variables};
};

export default updateVariables;
