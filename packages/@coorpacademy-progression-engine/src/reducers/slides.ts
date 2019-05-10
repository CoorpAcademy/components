import concat from 'lodash/fp/concat';
import {Action, AnswerAction, Config} from '../types';

export default function slides(config: Config) {
  return (array: Array<string> = [], action: Action): Array<string> => {
    switch (action.type) {
      case 'answer': {
        const answerAction = action as AnswerAction;
        return concat(array, [answerAction.payload.content.ref]);
      }
      default:
        return array;
    }
  };
}
