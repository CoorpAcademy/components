import concat from 'lodash/fp/concat';
import {Action, AnswerAction, Config} from '../types';

export default function slides(config: Config) {
  return (array: string[] = [], action: Action): string[] => {
    switch (action.type) {
      case 'answer': {
        const answerAction: AnswerAction = action;
        return concat(array, [answerAction.payload.content.ref]);
      }
      default:
        return array;
    }
  };
}
