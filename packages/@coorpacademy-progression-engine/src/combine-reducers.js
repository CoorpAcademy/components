// @flow

import update from 'lodash/fp/update';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import validate from './reducers/validate';
import type {Action, Config, State} from './types';

export default function combineReducers(
  fnMap: Array<{key?: string, fn: Function}> // eslint-disable-line flowtype/no-weak-types
): Config => (State, Action) => State {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = map(({fn, key}) => {
    return (config: Config, action: Action) => (state: State): State => {
      if (!key) return fn(config)(state, action);
      const newState = update(key, value => fn(config)(value, action, state), state);
      return (newState: State);
    };
  }, fnMap);

  return (config: Config): ((State, Action) => State) => {
    return (state: State, action: Action): State => {
      validate(config)(state, action);
      return pipe(...map(fn => fn(config, action), fns))(state);
    };
  };
}
