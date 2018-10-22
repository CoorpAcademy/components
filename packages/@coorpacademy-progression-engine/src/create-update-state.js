// @flow

import reduce from 'lodash/fp/reduce';
import isEmpty from 'lodash/fp/isEmpty';
import type {Action, State, Config} from './types';
import type {UpdateStateLearner} from './update-state-learner';

type ReduceAction = Config => (State, Action) => State;

export default (reduceAction: ReduceAction): UpdateStateLearner => {
  return (config: Config, state: State, actions: Array<Action>): State => {
    if (isEmpty(actions)) {
      return reduce(reduceAction(config), state, [{type: 'init'}]);
    }
    return reduce(reduceAction(config), state, actions);
  };
};
