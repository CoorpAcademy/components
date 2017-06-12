// // @flow
import test from 'ava';
import checkAnswer from '../check-answer';
import type {AcceptedAnswers, UnknownQuestion} from '../types';

const engine = {
  ref: 'microlearning',
  version: 'latest'
};

function createQuestion(answers: AcceptedAnswers): UnknownQuestion {
  return {
    type: 'unknown',
    content: {
      answers
    }
  };
}

test('should return true when the question has an unknown type', t => {
  const question = createQuestion([]);

  t.true(checkAnswer(engine, question, []));
});
