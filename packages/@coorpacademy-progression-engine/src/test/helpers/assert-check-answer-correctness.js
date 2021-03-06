// @flow
import {map, pipe, trim, zip} from 'lodash/fp';
import checkAnswerCorrectness from '../../check-answer-correctness';
import type {Question, Answer, Config} from '../../types';

// eslint-disable-next-line flowtype/no-weak-types
export function assertCorrect(t: any, config: Config, question: Question, givenAnswer: Answer) {
  const result = checkAnswerCorrectness(config, question, givenAnswer);
  t.true(result.isCorrect, 'Answer should have been considered as correct');
  t.deepEqual(
    result.corrections,
    givenAnswer.map(answer => ({answer: trim(answer), isCorrect: true})),
    'All sub-answers should be considered correct'
  );
}

export function assertIncorrect(
  t: any, // eslint-disable-line flowtype/no-weak-types
  config: Config,
  question: Question,
  givenAnswer: Answer,
  expectedCorrections: Array<boolean>
) {
  t.is(
    givenAnswer.length,
    expectedCorrections.length,
    'Expected corrections should have the same length as givenAnswer'
  );
  const result = checkAnswerCorrectness(config, question, givenAnswer);
  t.false(result.isCorrect, 'Answer should have been considered as incorrect');
  t.deepEqual(
    result.corrections,
    pipe(
      zip(givenAnswer),
      map(([answer, isCorrect]) => ({answer: trim(answer), isCorrect}))
    )(expectedCorrections),
    'Some sub-answers were not correctly marked as correct'
  );
}

export function assertIncorrectEmptyAnswer(
  t: any, // eslint-disable-line flowtype/no-weak-types
  config: Config,
  question: Question,
  givenAnswer: Answer
) {
  t.deepEqual(checkAnswerCorrectness(config, question, givenAnswer), {
    isCorrect: false,
    corrections: []
  });
}
