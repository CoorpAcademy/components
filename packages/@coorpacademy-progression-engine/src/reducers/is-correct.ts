import {Action, ActionType, AnswerAction, Config} from '../types';

export default function isCorrect(config: Config) {
  return (state: boolean | void = true, action: Action): boolean | void => {
    switch (action.type) {
      case ActionType.ANSWER: {
        const answerAction: AnswerAction = action
        return answerAction.payload.isCorrect;
      }
      default:
        return state;
    }
  };
}
