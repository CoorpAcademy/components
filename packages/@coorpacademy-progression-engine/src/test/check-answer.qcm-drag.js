// @flow
import test from 'ava';
import checkAnswer from '../check-answer';
import type {QCMQuestion, AcceptedAnswers} from '../types';

const engine = {
  ref: 'microlearning',
  version: 'latest'
};

function createQuestion(answers: AcceptedAnswers): QCMQuestion {
  return {
    type: 'qcmDrag',
    content: {
      answers
    }
  };
}

test('should return true when the given answer is in the accepted answers', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  t.true(checkAnswer(engine, question, ['answer1', 'answer3']));
  t.true(checkAnswer(engine, question, ['answer2', 'answer4']));
  t.true(checkAnswer(engine, question, ['answer1', 'answer4']));
});

test('should return true even when the given answer does not have the same case as the accepted answers', t => {
  const question = createQuestion([['answer2']]);

  t.true(checkAnswer(engine, question, ['ANSWER2']));
});

test('should return false when the given answer is in the accepted answers but values but in a different order', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  t.false(checkAnswer(engine, question, ['answer3', 'answer1']));
  t.false(checkAnswer(engine, question, ['answer4', 'answer2']));
  t.false(checkAnswer(engine, question, ['answer4', 'answer1']));
});

test('should return false when the given answer is not in the accepted answers', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  t.false(checkAnswer(engine, question, ['answer2', 'answer3']));
});

test("should return false when the given answer isn't but resembles the accepted answers", t => {
  const question = createQuestion([['answer2']]);

  t.false(checkAnswer(engine, question, ['answe2r']));
});
