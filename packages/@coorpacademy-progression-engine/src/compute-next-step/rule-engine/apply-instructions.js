// @flow
import assign from 'lodash/fp/assign';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import update from 'lodash/fp/update';
import type {State} from '../../types';
import type {Instruction, Variables} from './types';

const apply = (target: Variables, instruction: Instruction): Variables => {
  const {type, value, field} = instruction;
  switch (type) {
    case 'set':
      return set(field, value, target);
    case 'add':
      return update(field, v => v + value, target);
    default:
      return target;
  }
};

const updateState = (instructions: Array<Instruction>) => (state: State): State => {
  const {lives, stars, ...variables} = reduce(
    apply,
    {
      lives: state.lives,
      stars: state.stars,
      ...state.variables
    },
    instructions
  );

  return assign(state, {lives, stars, variables});
};

export default updateState;
