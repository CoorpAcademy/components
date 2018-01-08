// @flow

import type {Action, AnswerAction, Config, State} from '../types';

export default function lives(config: Config): (number, Action, State) => number {
  return (amount: number = config.lives, action: Action, state: State): number => {
    if (state.livesDisabled) {
      return amount;
    }
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect ? amount : amount - 1;
      }
      case 'extraLifeAccepted': {
        return state.remainingLifeRequests > 0 ? amount + 1 : amount;
      }
      default:
        return amount;
    }
  };
}
