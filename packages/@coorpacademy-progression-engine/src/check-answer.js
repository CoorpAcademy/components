// @flow
import checkAnswerCorrectness from './check-answer-correctness';
import type {Question, Answer, Engine, IsCorrect} from './types';

export default function checkAnswer(
  engine: Engine,
  question: Question,
  givenAnswer: Answer
): IsCorrect {
  return checkAnswerCorrectness(engine, question, givenAnswer).isCorrect;
}
