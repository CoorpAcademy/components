// @flow

import type {Action, Config, State} from '../types';

export default function remainingLifeRequests(config: Config): (number, Action, State) => number {
  return (count: number = config.remainingLifeRequests, action: Action, state: State): number => {
    switch (action.type) {
      case 'extraLifeAccepted': {
        return count > 0 ? count - 1 : count;
      }
      default:
        return count;
    }
  };
}
