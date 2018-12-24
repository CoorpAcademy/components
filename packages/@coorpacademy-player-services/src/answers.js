// @flow strict

import assign from 'lodash/fp/assign';
import includes from 'lodash/fp/includes';
import {checkAnswerCorrectness, getConfigForProgression} from '@coorpacademy/progression-engine';

import type {Answer} from '@coorpacademy/progression-engine';
import type {Fixtures} from './definitions';
import type {Correction, Fixtures} from './definitions';

type FindById = (
  progressionId: string,
  slideId: string,
  givenAnswers: Answer
) => Promise<Correction>;

type AnswersService = {|
  findById: FindById
|};

const findById = (fixtures: Fixtures): FindById => async (
  progressionId: string,
  slideId: string,
  givenAnswers: Answer = []
): Promise<Correction> => {
  const {findProgressionById, findSlideById, getCorrectAnswer} = fixtures;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression "${progressionId}" not found`);
  }

  const state = progression.state;

  if (!state) {
    throw new Error(`progression "${progressionId}" has no state`);
  }

  const slide = await findSlideById(slideId);

  if (!includes(slideId, state.slides)) throw new Error('Answer is not available');
  const config = getConfigForProgression(progression);
  const correctAnswer = await getCorrectAnswer(slideId);
  const question = assign(slide.question, {
    answers: [correctAnswer]
  });

  const {corrections} = checkAnswerCorrectness(config, question, givenAnswers);

  return {
    correctAnswer,
    corrections
  };
};

const Answers = (fixtures: Fixtures): AnswersService => ({
  findById: findById(fixtures)
});

export type {AnswersService};
export default Answers;
