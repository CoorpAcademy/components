// @flow
import test from 'ava';
import {getConfig} from '../config';
import type {AcceptedAnswers, Config, QCMQuestion} from '../types';
import {
  assertCorrect,
  assertIncorrect,
  assertIncorrectEmptyAnswer
} from './helpers/assert-check-answer-correctness';

const config: Config = getConfig({ref: 'microlearning', version: 'latest'});

function createQuestion(answers: AcceptedAnswers): QCMQuestion {
  return {
    type: 'qcm',
    content: {
      choices: [],
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

  assertCorrect(t, config, question, ['answer1', 'answer3']);
  assertCorrect(t, config, question, ['answer2', 'answer4']);
  assertCorrect(t, config, question, ['answer1', 'answer4']);
});

test('should return false when the given answer does not have the same case as the accepted answers', t => {
  const question = createQuestion([['answer2']]);

  assertIncorrect(t, config, question, ['ANSWER2'], [false]);
});

test('should return true when the given answer is in the accepted answers but values are in a different order', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  assertCorrect(t, config, question, ['answer3', 'answer1']);
  assertCorrect(t, config, question, ['answer4', 'answer2']);
  assertCorrect(t, config, question, ['answer4', 'answer1']);
});

test('should return false when the given answer is not in the accepted answers', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  assertIncorrect(t, config, question, ['answer2', 'answer1'], [false, true]);
  assertIncorrect(t, config, question, ['answer1', 'answer2'], [true, false]);
  assertIncorrect(t, config, question, ['answer3', 'answer4'], [true, false]);
  assertIncorrect(t, config, question, ['answer5', 'answer4'], [false, true]);
});

test('should return false when the given answer has more elements that the accepted answers', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  assertIncorrect(t, config, question, ['answer1', 'answer3', 'answer2'], [true, true, false]);
  assertIncorrect(t, config, question, ['answer1', 'answer5', 'answer3'], [true, false, true]);
});

test('should return false when the given answer has less elements that the accepted answers', t => {
  const question = createQuestion([
    ['answer1', 'answer3'],
    ['answer2', 'answer4'],
    ['answer1', 'answer4']
  ]);

  assertIncorrect(t, config, question, ['answer1'], [true]);
  assertIncorrect(t, config, question, ['answer2'], [true]);
  assertIncorrect(t, config, question, ['answer5'], [false]);
  assertIncorrect(t, config, question, [], []);
});

test("should return false when the given answer isn't the same but resembles the accepted answers", t => {
  const question = createQuestion([['answer2']]);

  assertIncorrect(t, config, question, ['answe2r'], [false]);
});

test('should return false when there are no correct answers', t => {
  const question = createQuestion([]);

  assertIncorrectEmptyAnswer(t, config, question, []);
  assertIncorrectEmptyAnswer(t, config, question, ['foo']);
});

test('should trim the given and accepted answers before comparing', t => {
  const question = createQuestion([['  answer1', '  answer3   ']]);

  assertCorrect(t, config, question, ['answer1', 'answer3']);
  assertCorrect(t, config, question, ['answer1   ', '  answer3']);
  assertIncorrect(t, config, question, ['answer2', 'answer3'], [false, true]);
});
