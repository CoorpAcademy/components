
import concat from 'lodash/fp/concat';
import get from 'lodash/fp/get';
import {Action, AnswerAction, AnswerRecord, Config, ActionType} from '../types';

const allAnswers = (config: Config) => {
  return (answers: Array<AnswerRecord> = [], action: Action): Array<AnswerRecord> => {
    switch (action.type) {
      case ActionType.ANSWER: {
        const answerAction: AnswerAction = action;
        const answer = {
          slideRef: get('payload.content.ref', answerAction),
          isCorrect: get('payload.isCorrect', answerAction),
          answer: get('payload.answer', answerAction)
        };
        return concat(answers, answer);
      }
      default:
        return answers;
    }
  };
}

export default allAnswers;
