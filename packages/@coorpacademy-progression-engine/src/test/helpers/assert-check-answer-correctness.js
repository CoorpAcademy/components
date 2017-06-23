// @flow
import {map, pipe, zip} from 'lodash/fp';
import checkAnswerCorrectness from '../../check-answer-correctness';
import type {Question, Answer, Engine} from '../../types';

// eslint-disable-next-line flowtype/no-weak-types
function assertCorrect(t: any, engine: Engine, question: Question, givenAnswer: Answer) {
  const result = checkAnswerCorrectness(engine, question, givenAnswer);
  t.true(result.isCorrect, 'Answer should have been considered as correct');
  t.deepEqual(
    result.corrections,
    givenAnswer.map(answer => ({answer, isCorrect: true})),
    'All sub-answers should be considered correct'
  );
}

function assertIncorrect(
  t: any, // eslint-disable-line flowtype/no-weak-types
  engine: Engine,
  question: Question,
  givenAnswer: Answer,
  expectedCorrections: Array<boolean>
) {
  t.is(
    givenAnswer.length,
    expectedCorrections.length,
    'expected corrections should have the same length as givenAnswer'
  );
  const result = checkAnswerCorrectness(engine, question, givenAnswer);
  t.false(result.isCorrect, 'Answer should have been considered as incorrect');
  t.deepEqual(
    result.corrections,
    pipe(zip, map(([answer, isCorrect]) => ({answer, isCorrect})))(
      givenAnswer,
      expectedCorrections
    ),
    'Some sub-answers were not correctly marked as correct'
  );
}

export {assertCorrect, assertIncorrect};
