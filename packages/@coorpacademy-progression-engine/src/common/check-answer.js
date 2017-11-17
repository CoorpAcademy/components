// @flow
import checkAnswerCorrectness from './check-answer-correctness';
import type {Question, Answer, Engine} from './types';

export default function checkAnswer(
  engine: Engine,
  question: Question,
  givenAnswer: Answer
): boolean {
  return checkAnswerCorrectness(engine, question, givenAnswer).isCorrect;
}
