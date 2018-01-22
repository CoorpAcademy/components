// @flow

import type {Action, Config, State} from '../types';

export default function lives(config: Config): (number, Action, State) => number {
  return (amount: number = config.lives, action: Action, state: State): number => {
    if (state.livesDisabled) {
      return amount;
    }
    switch (action.type) {
      case 'answer':
        return !action.payload.instructions && action.payload.isCorrect === false
          ? amount - 1
          : amount;
      case 'extraLifeAccepted':
        return !action.payload.instructions && state.remainingLifeRequests > 0
          ? amount + 1
          : amount;
      default:
        return amount;
    }
  };
}
