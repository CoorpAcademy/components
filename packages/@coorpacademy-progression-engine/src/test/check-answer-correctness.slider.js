// @flow
import test from 'ava';
import type {SliderQuestion, AcceptedAnswers} from '../types';
import {assertCorrect, assertIncorrect} from './helpers/assert-check-answer-correctness';

const engine = {
  ref: 'microlearning',
  version: 'latest'
};

function createQuestion(answers: AcceptedAnswers): SliderQuestion {
  return {
    type: 'slider',
    content: {
      answers
    }
  };
}

test('should return true when the given answer is in the accepted answers', t => {
  const question = createQuestion([['100'], ['200'], ['300']]);

  assertCorrect(t, engine, question, ['100']);
  assertCorrect(t, engine, question, ['200']);
  assertCorrect(t, engine, question, ['300']);
});

test('should return false when the given answer is not in the accepted answers', t => {
  const question = createQuestion([['100'], ['200'], ['300']]);

  assertIncorrect(t, engine, question, ['400'], [false]);
  assertIncorrect(t, engine, question, ['500'], [false]);
  assertIncorrect(t, engine, question, ['600'], [false]);
  assertIncorrect(t, engine, question, ['101'], [false]);
  assertIncorrect(t, engine, question, ['002'], [false]);
  assertIncorrect(t, engine, question, ['1'], [false]);
  assertIncorrect(t, engine, question, ['2'], [false]);
  assertIncorrect(t, engine, question, ['NaN'], [false]);
  assertIncorrect(t, engine, question, ['foo'], [false]);
});
