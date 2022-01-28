// @flow
import assert from 'assert';
import test from 'ava';
import {getConfig} from '../config';
import type {AcceptedAnswers, Config, TemplateQuestion} from '../types';
import {
  assertCorrect,
  assertIncorrect,
  assertIncorrectEmptyAnswer
} from './helpers/assert-check-answer-correctness';

const config: Config = getConfig({ref: 'microlearning', version: 'latest'});

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
      choices: choiceTypes.map((type, index) => ({
        _id: `id-${index}`,
        label: `choice-${index}`,
        type
      })),
      answers
    }
  };
}

test('should return true when all the given answer matches a possible answer exactly', t => {
  const question = createQuestion(
    [
      ['2', 'un'],
      ['deux', 'un'],
      ['saut', 'parachute']
    ],
    ['text', 'text']
  );

  assertCorrect(t, config, question, ['2', 'un']);
  assertCorrect(t, config, question, ['deux', 'un']);
  assertCorrect(t, config, question, ['saut', 'parachute']);
});

test('should return false when answers are correct but in an incorrect order', t => {
  const question = createQuestion(
    [
      ['2', 'un'],
      ['deux', 'un'],
      ['saut', 'parachute']
    ],
    ['text', 'text']
  );

  assertIncorrect(t, config, question, ['un', '2'], [false, false]);
  assertIncorrect(t, config, question, ['un', 'deux'], [false, false]);
  assertIncorrect(t, config, question, ['parachute', 'saut'], [false, false]);
});

test('should return false when the given answer is partially incorrect', t => {
  const question = createQuestion(
    [
      ['2', 'un'],
      ['deux', 'un'],
      ['saut', 'parachute']
    ],
    ['text', 'text']
  );

  assertIncorrect(t, config, question, ['2', 'AAAAAAA'], [true, false]);
  assertIncorrect(t, config, question, ['deux', 'AAAAAAAA'], [true, false]);
  assertIncorrect(t, config, question, ['saut', 'AAAAAAAA'], [true, false]);
  assertIncorrect(t, config, question, ['AAAAAAAA', 'un'], [false, true]);
  assertIncorrect(t, config, question, ['AAAAAAAA', 'un'], [false, true]);
  assertIncorrect(t, config, question, ['AAAAAAAA', 'parachute'], [false, true]);
});

test('should allow typos in text inputs', t => {
  const question = createQuestion(
    [
      ['2', 'un'],
      ['deux', 'un'],
      ['saut', 'parachute']
    ],
    ['text', 'text']
  );

  assertCorrect(t, config, question, ['saut', 'parachutee']);
  assertCorrect(t, config, question, ['sauZt', 'parachute']);
  assertCorrect(t, config, question, ['sauZZt', 'parachutee']);
  assertCorrect(t, config, question, ['saut', 'pOrOchute']);
  assertIncorrect(t, config, question, ['sauZZZZZt', 'parachute'], [false, true]);
  assertIncorrect(t, config, question, ['saut', 'parachutZZZe'], [true, false]);
});

test('should allow and ignore blank spaces in text inputs', t => {
  const question = createQuestion(
    [
      ['2', 'un'],
      ['deux', 'un'],
      ['saut', 'parachute']
    ],
    ['text', 'text']
  );

  assertCorrect(t, config, question, ['saut  ', 'parachute']);
  assertCorrect(t, config, question, ['  saut', 'parachute']);
  assertCorrect(t, config, question, ['saut', '  parachute']);
  assertCorrect(t, config, question, ['saut', 'parachute  ']);
  assertCorrect(t, config, question, ['  saut  ', '  parachute  ']);
  assertIncorrect(t, config, question, ['  sauZZZZZt', '  parachute'], [false, true]);
  assertIncorrect(t, config, question, ['saut  ', 'parachutZZZe  '], [true, false]);
});

test('should use the maxTypos value from the question if available', t => {
  const questionWithTypos0 = createQuestion([['parachute']], ['text'], 0);
  const questionWithTypos3 = createQuestion([['parachute']], ['text'], 3);

  assertCorrect(t, config, questionWithTypos0, ['parachute']);
  assertIncorrect(t, config, questionWithTypos0, ['parachutZe'], [false]);

  assertCorrect(t, config, questionWithTypos3, ['parachute']);
  assertCorrect(t, config, questionWithTypos3, ['parachut']);
  assertCorrect(t, config, questionWithTypos3, ['parachu']);
  assertCorrect(t, config, questionWithTypos3, ['parach']);
  assertIncorrect(t, config, questionWithTypos3, ['parac'], [false]);
});

test('allowed answers should be made case insensitive', t => {
  const question = createQuestion([['fooBAR', 'PARACHUTE']], ['text', 'text']);

  assertCorrect(t, config, question, ['fooBAR', 'PARACHUTE']);
  assertCorrect(t, config, question, ['foobar', 'parachute']);
  assertCorrect(t, config, question, ['FOOBAR', 'PARACHUTE']);
  assertCorrect(t, config, question, ['ZZZZZfooBAR', 'ZZZZZPARACHUTE']);
  assertCorrect(t, config, question, ['ZZZZZfoobar', 'ZZZZZparachute']);
  assertCorrect(t, config, question, ['ZZZZZFOOBAR', 'ZZZZZPARACHUTE']);
});

test('should allow additional characters on the sides of text inputs', t => {
  const question = createQuestion([['parachute']], ['text']);

  assertCorrect(t, config, question, ['parachute']);
  assertCorrect(t, config, question, ['Parachute']);
  assertCorrect(t, config, question, ['parachuté']);
  assertCorrect(t, config, question, ['parachuteZZZZZ']);
  assertCorrect(t, config, question, ['ZZZZZparachute']);
  assertCorrect(t, config, question, ['ZZZZZparachuteZZZZZ']);
  assertCorrect(t, config, question, ['PARACHUTEZZZZ']);
  assertIncorrect(t, config, question, ['parachuteZZZZZZ'], [false]);
  assertIncorrect(t, config, question, ['ZZZZZZparachute'], [false]);
  assertIncorrect(t, config, question, ['ZZZZZZparachuteZZZZZZ'], [false]);
});

test('should not allow typos or additional characters for select inputs', t => {
  const question = createQuestion([['parachute']], ['select']);

  assertCorrect(t, config, question, ['parachute']);
  assertIncorrect(t, config, question, ['Parachute'], [false]);
  assertIncorrect(t, config, question, ['PARACHUTE'], [false]);
  assertIncorrect(t, config, question, ['parachOte'], [false]);
  assertIncorrect(t, config, question, ['parachuteZ'], [false]);
  assertIncorrect(t, config, question, ['Zparachute'], [false]);
  assertIncorrect(t, config, question, ['parachuté'], [false]);
});

test('should return false when the given answer has more elements that the accepted answers', t => {
  const question = createQuestion(
    [
      ['2', 'un'],
      ['deux', 'un'],
      ['saut', 'parachute']
    ],
    ['text', 'text']
  );

  assertIncorrect(t, config, question, ['2', 'un', 'trois'], [true, true, false]);
  assertIncorrect(t, config, question, ['deux', 'un', 'trois'], [true, true, false]);
  assertIncorrect(t, config, question, ['saut', 'parachute', 'avion'], [true, true, false]);
  assertIncorrect(
    t,
    config,
    question,
    ['saut', 'parachute', 'avion', 'pilote'],
    [true, true, false, false]
  );
});

test('should return false when the given answer has less elements that the accepted answerss', t => {
  const question = createQuestion(
    [
      ['2', 'un'],
      ['deux', 'un'],
      ['saut', 'parachute']
    ],
    ['text', 'text']
  );

  assertIncorrect(t, config, question, ['2'], [true]);
  assertIncorrect(t, config, question, ['deux'], [true]);
  assertIncorrect(t, config, question, ['saut'], [true]);
  assertIncorrect(t, config, question, [], []);
});

test('should return false when there are no correct answers', t => {
  const question = {
    type: 'template',
    content: {
      matchOrder: true,
      choices: [
        {
          _id: `1`,
          label: `choice-1`,
          type: 'text'
        },
        {
          _id: `1`,
          label: `choice-1`,
          type: 'text'
        }
      ],
      answers: []
    }
  };

  assertIncorrectEmptyAnswer(t, config, question, []);
  assertIncorrectEmptyAnswer(t, config, question, ['foo']);
  assertIncorrectEmptyAnswer(t, config, question, ['foo', 'bar']);
});
