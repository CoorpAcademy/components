// @flow

import isEmpty from 'lodash/fp/isEmpty';
import update from 'lodash/fp/update';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import validate from './reducers/validate';
import users from './reducers/racing/users';
import teams from './reducers/racing/teams';
import type {Action, Config, RacingState} from './types';
// import combineReducers from './combine-reducers';

function combineReducers(
  fnMap: Array<{key?: string, fn: Function}> // eslint-disable-line flowtype/no-weak-types
): Config => (RacingState, Action) => RacingState {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = map(({fn, key}) => {
    return (config: Config, action: Action) => (state: RacingState): RacingState => {
      if (!key) return fn(config)(state, action);
      const newState = update(key, value => fn(config)(value, action, state), state);
      return (newState: RacingState);
    };
  }, fnMap);

  return (config: Config): ((RacingState, Action) => RacingState) => {
    return (state: RacingState, action: Action): RacingState => {
      validate(config)(state, action);
      return pipe(...map(fn => fn(config, action), fns))(state);
    };
  };
}

type ReduceAction = Config => (RacingState, Action) => RacingState;
export type UpdateStateRacing = (Config, RacingState, Array<Action>) => RacingState;

const createUpdateState = (reduceAction: ReduceAction): UpdateStateRacing => {
  return (config: Config, state: RacingState, actions: Array<Action>): RacingState => {
    if (isEmpty(actions)) {
      throw(new Error('racing progression must have at least one action: racing-setup'));
    }
    return reduce(reduceAction(config), state, actions);
  };
}

const reduceAction = combineReducers([{key: 'users', fn: users}, {key: 'teams', fn: teams}]);
const updateStateRacing: UpdateStateRacing = createUpdateState(reduceAction);
export default updateStateRacing;
