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
  assertIncorrect(t, engine, question, ['sauZZZZZt', 'parachute'], [false, true]);
  assertIncorrect(t, engine, question, ['saut', 'parachutZZZe'], [true, false]);
});

test('should use the maxTypos value from the question if available', t => {
  const questionWithTypos0 = createQuestion([['parachute']], ['text'], 0);
  const questionWithTypos3 = createQuestion([['parachute']], ['text'], 3);

  assertCorrect(t, engine, questionWithTypos0, ['parachute']);
  assertIncorrect(t, engine, questionWithTypos0, ['parachutZe'], [false]);

  assertCorrect(t, engine, questionWithTypos3, ['parachute']);
  assertCorrect(t, engine, questionWithTypos3, ['parachut']);
  assertCorrect(t, engine, questionWithTypos3, ['parachu']);
  assertCorrect(t, engine, questionWithTypos3, ['parach']);
  assertIncorrect(t, engine, questionWithTypos3, ['parac'], [false]);
});

test('allowed answers should be made case insensitive', t => {
  const question = createQuestion([['fooBAR', 'PARACHUTE']], ['text', 'text']);

  assertCorrect(t, engine, question, ['fooBAR', 'PARACHUTE']);
  assertCorrect(t, engine, question, ['foobar', 'parachute']);
  assertCorrect(t, engine, question, ['FOOBAR', 'PARACHUTE']);
  assertCorrect(t, engine, question, ['ZZZZZfooBAR', 'ZZZZZPARACHUTE']);
  assertCorrect(t, engine, question, ['ZZZZZfoobar', 'ZZZZZparachute']);
  assertCorrect(t, engine, question, ['ZZZZZFOOBAR', 'ZZZZZPARACHUTE']);
});

test('should allow additional characters on the sides of text inputs', t => {
  const question = createQuestion([['parachute']], ['text']);

  assertCorrect(t, engine, question, ['parachute']);
  assertCorrect(t, engine, question, ['parachuteZZZZZ']);
  assertCorrect(t, engine, question, ['ZZZZZparachute']);
  assertCorrect(t, engine, question, ['ZZZZZparachuteZZZZZ']);
  assertCorrect(t, engine, question, ['PARACHUTEZZZZ']);
  assertIncorrect(t, engine, question, ['parachuteZZZZZZ'], [false]);
  assertIncorrect(t, engine, question, ['ZZZZZZparachute'], [false]);
  assertIncorrect(t, engine, question, ['ZZZZZZparachuteZZZZZZ'], [false]);
});

test('should not allow typos or additional characters for select inputs', t => {
  const question = createQuestion([['parachute']], ['select']);

  assertCorrect(t, engine, question, ['parachute']);
  assertCorrect(t, engine, question, ['parachUTe']);
  assertCorrect(t, engine, question, ['PARACHUTE']);
  assertIncorrect(t, engine, question, ['parachOte'], [false]);
  assertIncorrect(t, engine, question, ['parachuteZ'], [false]);
  assertIncorrect(t, engine, question, ['Zparachute'], [false]);
});
