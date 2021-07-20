// @flow
import type {Action, State, Config} from '../types';
import updateVariables from '../rule-engine/apply-instructions';

const variables =
  (config: Config) =>
  (_state: State, action: Action): State => {
    const state: State = _state.variables ? _state : {..._state, variables: {}};
    switch (action.type) {
      case 'answer':
      case 'move': {
        const {instructions} = action.payload;
        if (!instructions) return state;
        return updateVariables(instructions)(state);
      }
      default: {
        return state;
      }
    }
  };

export default variables;
