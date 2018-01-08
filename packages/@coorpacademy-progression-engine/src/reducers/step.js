// @flow

import type {Action, Config, State, Step} from '../types';

export default function step(config: Config): (Step, Action, State) => Step {
  return (s: Step, action: Action, state: State): Step => {
    return {
      current: state.slides.length + 1
    };
  };
}
