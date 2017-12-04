// @flow

import update from 'lodash/fp/update';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import isEqual from 'lodash/fp/isEqual';

import type {Action, AnswerAction, Config, State} from './types';

function validate(config: Config): (State, Action) => void {
  return (state: State, action: Action) => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        if (!isEqual(state.nextContent, answerAction.payload.content)) {
          throw new Error(
            'The content of the progression state does not match the content of the given answer'
          );
        }
        break;
      }
    }
  };
}

export default function combineReducers(
  fnMap: Array<{key: string, fn: Function}> // eslint-disable-line flowtype/no-weak-types
): Config => (State, Action) => State {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = map(({fn, key}) => {
    return (config: Config, action: Action) => (state: State): State => {
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
