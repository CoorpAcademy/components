import {Action, AnswerAction, Config} from '../types';

export default function isCorrect(config: Config) {
  return (state: boolean | null = true, action: Action): boolean | null => {
    switch (action.type) {
      case 'answer': {
        const answerAction: AnswerAction = action
        return answerAction.payload.isCorrect;
      }
      default:
        return state;
    }
  };
}
