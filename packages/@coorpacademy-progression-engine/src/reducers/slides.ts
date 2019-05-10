import concat from 'lodash/fp/concat';
import {Action, ActionType, AnswerAction, Config} from '../types';

export default function slides(config: Config) {
  return (array: Array<string> = [], action: Action): Array<string> => {
    switch (action.type) {
      case ActionType.ANSWER: {
        const answerAction: AnswerAction = action;
        return concat(array, [answerAction.payload.content.ref]);
      }
      default:
        return array;
    }
  };
}
