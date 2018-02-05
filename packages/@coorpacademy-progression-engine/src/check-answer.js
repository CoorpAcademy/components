// @flow
import checkAnswerCorrectness from './check-answer-correctness';
import type {Question, Answer, Config} from './types';

export default function checkAnswer(
  config: Config,
  question: Question,
  givenAnswer: Answer
): boolean {
  return checkAnswerCorrectness(config, question, givenAnswer).isCorrect;
}
