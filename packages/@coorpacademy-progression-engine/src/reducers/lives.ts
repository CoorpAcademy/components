import {Action, ActionType, Config, State} from '../types';

export default function lives(config: Config) {
  return (amount: number = config.lives, action: Action, state: State): number => {
    if (state.livesDisabled) {
      return amount;
    }
    switch (action.type) {
      case ActionType.ANSWER:
        return !action.payload.instructions && action.payload.isCorrect === false
          ? amount - 1
          : amount;
      case ActionType.EXTRA_LIFE_ACCEPTED:
        return !action.payload.instructions && state.remainingLifeRequests > 0
          ? amount + 1
          : amount;
      default:
        return amount;
    }
  };
}
