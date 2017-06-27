import head from 'lodash/fp/head';
import reduce from 'lodash/fp/reduce';
import includes from 'lodash/fp/includes';
import {checkAnswerCorrectness} from '@coorpacademy/progression-engine';
import slidesData from './slides.data';
import * as SlidesService from './slides';
import * as ProgressionsService from './progressions';

const answerStore = reduce(
  (clueMap, slide) => clueMap.set(slide._id, head(slide.question.content.answers)),
  new Map(),
  slidesData
);

// eslint-disable-next-line import/prefer-default-export
export const findById = async (progressionId, slideId, givenAnswers = []) => {
  const [progression, slide] = await Promise.all([
    ProgressionsService.findById(progressionId),
    SlidesService.findById(slideId)
  ]);

  if (!includes(slideId, progression.state.slides)) throw new Error('Answers are not available');

  const {corrections} = checkAnswerCorrectness(progression.engine, slide.question, givenAnswers);

  return {
    correctAnswer: answerStore.get(slideId),
    corrections
  };
};
