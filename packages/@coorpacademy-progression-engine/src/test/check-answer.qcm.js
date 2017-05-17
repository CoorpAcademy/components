// // @flow
import test from 'ava';
import checkAnswer from '../check-answer';
import {type QCMQuestion, type AcceptedAnswers} from '../types';

const options = Object.freeze({});

function createQuestion(answers: AcceptedAnswers): QCMQuestion {
  return {
    type: 'qcm',
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

  t.true(checkAnswer(options, question, ['answer1', 'answer3']));
  t.true(checkAnswer(options, question, ['answer2', 'answer4']));
  t.true(checkAnswer(options, question, ['answer1', 'answer4']));
});

test('should return true even when the given answer does not have the same case as the accepted answers', t => {
  const question = createQuestion([['answer2']]);

  t.true(checkAnswer(options, question, ['ANSWER2']));
});

test('should return true when the given answer is in the accepted answers but values are in a different order', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  t.true(checkAnswer(options, question, ['answer3', 'answer1']));
  t.true(checkAnswer(options, question, ['answer4', 'answer2']));
  t.true(checkAnswer(options, question, ['answer4', 'answer1']));
});

test('should return false when the given answer is not in the accepted answers', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  t.false(checkAnswer(options, question, ['answer2', 'answer3']));
});

test("should return false when the given answer isn't but resembles the accepted answers", t => {
  const question = createQuestion([['answer2']]);

  t.false(checkAnswer(options, question, ['answe2r']));
});
