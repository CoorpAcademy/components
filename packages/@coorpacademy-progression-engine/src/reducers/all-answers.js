// @flow

import concat from 'lodash/fp/concat';
import get from 'lodash/fp/get';
import type {Action, AnswerAction, AnswerRecord, Config} from '../types';

export default function allAnswers(
  config: Config
): (Array<AnswerRecord>, Action) => Array<AnswerRecord> {
  return (answers: Array<AnswerRecord>, action: Action): Array<AnswerRecord> => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
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
