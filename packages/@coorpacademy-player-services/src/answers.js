// @flow strict

import {assign, includes} from 'lodash/fp';
import {checkAnswerCorrectness, getConfigForProgression} from '@coorpacademy/progression-engine';

import type {Answer} from '@coorpacademy/progression-engine';
import type {CorrectionAPI, DataLayer} from './definitions';

type FindById = (
  progressionId: string,
  slideId: string,
  givenAnswers: Answer
) => Promise<CorrectionAPI>;

type AnswersService = {|
  findById: FindById
|};

const findById =
  (dataLayer: DataLayer): FindById =>
  async (
    progressionId: string,
    slideId: string,
    givenAnswers: Answer = []
  ): Promise<CorrectionAPI> => {
    const {findProgressionById, findSlideById, getCorrectAnswer} = dataLayer;
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

const Answers = (dataLayer: DataLayer): AnswersService => ({
  findById: findById(dataLayer)
});

export type {FindById, AnswersService};
export default Answers;
