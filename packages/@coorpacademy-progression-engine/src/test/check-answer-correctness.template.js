// @flow
import assert from 'assert';
import test from 'ava';
import {type TemplateQuestion, type AcceptedAnswers} from '../types';
import {assertCorrect, assertIncorrect} from './helpers/assert-check-answer-correctness';

const engine = {
  ref: 'microlearning',
  version: 'latest'
};

function createQuestion(
  answers: AcceptedAnswers,
  choiceTypes: Array<'text' | 'select'>,
  maxTypos?: ?number
): TemplateQuestion {
  answers.forEach(answer => {
    assert.equal(
      answer.length,
      choiceTypes.length,
      'The number of answers in an allowed answer should match the number of answer inputs'
    );
  });
  return {
    type: 'template',
    content: {
      matchOrder: true,
      maxTypos,
      choices: choiceTypes.map(type => ({type})),
      answers
    }
  };
}

test('should return true when all the given answer matches a possible answer exactly', t => {
  const question = createQuestion(
    [['2', 'un'], ['deux', 'un'], ['saut', 'parachute']],
    ['text', 'text']
  );

  assertCorrect(t, engine, question, ['2', 'un']);
  assertCorrect(t, engine, question, ['deux', 'un']);
  assertCorrect(t, engine, question, ['saut', 'parachute']);
});

test('should return false when answers are correct but in an incorrect order', t => {
  const question = createQuestion(
    [['2', 'un'], ['deux', 'un'], ['saut', 'parachute']],
    ['text', 'text']
  );

  assertIncorrect(t, engine, question, ['un', '2'], [false, false]);
  assertIncorrect(t, engine, question, ['un', 'deux'], [false, false]);
  assertIncorrect(t, engine, question, ['parachute', 'saut'], [false, false]);
});

test('should return false when the given answer is partially incorrect', t => {
  const question = createQuestion(
    [['2', 'un'], ['deux', 'un'], ['saut', 'parachute']],
    ['text', 'text']
  );

  assertIncorrect(t, engine, question, ['2', 'AAAAAAA'], [true, false]);
  assertIncorrect(t, engine, question, ['deux', 'AAAAAAAA'], [true, false]);
  assertIncorrect(t, engine, question, ['saut', 'AAAAAAAA'], [true, false]);
  assertIncorrect(t, engine, question, ['AAAAAAAA', 'un'], [false, true]);
  assertIncorrect(t, engine, question, ['AAAAAAAA', 'un'], [false, true]);
  assertIncorrect(t, engine, question, ['AAAAAAAA', 'parachute'], [false, true]);
});

test('should allow typos in text inputs', t => {
  const question = createQuestion(
    [['2', 'un'], ['deux', 'un'], ['saut', 'parachute']],
    ['text', 'text']
  );

  assertCorrect(t, engine, question, ['saut', 'parachutee']);
  assertCorrect(t, engine, question, ['sauZt', 'parachute']);
  assertCorrect(t, engine, question, ['sauZZt', 'parachutee']);
  assertCorrect(t, engine, question, ['saut', 'pOrOchute']);
  assertIncorrect(t, engine, question, ['sauZZZt', 'parachute'], [false, true]);
  assertIncorrect(t, engine, question, ['saut', 'parachutZZZe'], [true, false]);
});

test.skip('should allow additional characters on the sides of text inputs', t => {
  const question = createQuestion([['saut']], ['text']);

  assertCorrect(t, engine, question, ['saut']);
  assertCorrect(t, engine, question, ['sautZZZZZ']);
  assertCorrect(t, engine, question, ['ZZZZZsaut']);
  assertCorrect(t, engine, question, ['ZZZZZsautZZZZZ']);
  assertIncorrect(t, engine, question, ['sautZZZZZZ'], [false]);
  assertIncorrect(t, engine, question, ['ZZZZZZsaut'], [false]);
  assertIncorrect(t, engine, question, ['ZZZZZZsautZZZZZZ'], [false]);
});
