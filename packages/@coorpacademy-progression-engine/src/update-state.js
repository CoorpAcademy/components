// @flow
import reduce from 'lodash/fp/reduce';
import type {Action, State} from './types';

function reduceAction(state: State, action: Action): State {
  const {type} = action;

  switch (type) {
    case 'answer':
      return state;
    default:
      return state;
  }
}

const updateState: (state: State, actions: Array<Action>) => State = reduce(reduceAction);

export default updateState;
