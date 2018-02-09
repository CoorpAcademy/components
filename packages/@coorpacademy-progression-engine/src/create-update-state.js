// @flow

import reduce from 'lodash/fp/reduce';
import isEmpty from 'lodash/fp/isEmpty';
import type {Action, Config, State} from './types';

type ReduceAction = Config => (State, Action) => State;
type UpdateStateFunction = (Config, State, Array<Action>) => State;

export default function createUpdateState(reduceAction: ReduceAction): UpdateStateFunction {
  return (config: Config, state: State, actions: Array<Action>): State => {
    if (isEmpty(actions)) {
      return reduce(reduceAction(config), state, [{type: 'init'}]);
    }
    return reduce(reduceAction(config), state, actions);
  };
}
