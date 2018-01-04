// @flow

import type {Action, AnswerAction, Config, IsCorrect} from '../types';

export default function isCorrect(config: Config): (IsCorrect, Action) => IsCorrect {
  return (state: IsCorrect = true, action: Action): IsCorrect => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        return answerAction.payload.isCorrect;
      }
      default:
        return state;
    }
  };
}
