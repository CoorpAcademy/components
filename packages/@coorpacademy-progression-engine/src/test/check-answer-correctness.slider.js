// @flow
import test from 'ava';
import getConfig from '../config';
import type {AcceptedAnswers, Config, SliderQuestion} from '../types';
import {assertCorrect, assertIncorrect} from './helpers/assert-check-answer-correctness';

const config: Config = getConfig({ref: 'microlearning', version: 'latest'});

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

  assertCorrect(t, config, question, ['100']);
  assertCorrect(t, config, question, ['200']);
  assertCorrect(t, config, question, ['300']);
});

test('should return false when the given answer is not in the accepted answers', t => {
  const question = createQuestion([['100'], ['200'], ['300']]);

  assertIncorrect(t, config, question, ['400'], [false]);
  assertIncorrect(t, config, question, ['500'], [false]);
  assertIncorrect(t, config, question, ['600'], [false]);
  assertIncorrect(t, config, question, ['101'], [false]);
  assertIncorrect(t, config, question, ['002'], [false]);
  assertIncorrect(t, config, question, ['1'], [false]);
  assertIncorrect(t, config, question, ['2'], [false]);
  assertIncorrect(t, config, question, ['NaN'], [false]);
  assertIncorrect(t, config, question, ['foo'], [false]);
});
