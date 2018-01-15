import assign from 'lodash/fp/assign';
import find from 'lodash/fp/find';
import head from 'lodash/fp/head';
import includes from 'lodash/fp/includes';
import reduce from 'lodash/fp/reduce';
import pipe from 'lodash/fp/pipe';
import values from 'lodash/fp/values';
import {checkAnswerCorrectness} from '@coorpacademy/progression-engine';
import slidesData from './slides.data';
import * as ProgressionsService from './progressions';

const answerStore = pipe(
  values,
  reduce(
    (clueMap, slide) => clueMap.set(slide._id, head(slide.question.content.answers)),
    new Map()
  )
)(slidesData);

// eslint-disable-next-line import/prefer-default-export
export const findById = async (progressionId, slideId, givenAnswers = []) => {
  const progression = await ProgressionsService.findById(progressionId);
  const {engine} = progression;
  const slide = pipe(values, find({_id: slideId}))(slidesData);

  if (!includes(slideId, progression.state.slides)) throw new Error('Answer is not available');
  const correctAnswer = answerStore.get(slideId);
  const question = assign(slide.question, {
    answers: [correctAnswer]
  });

  const {corrections} = checkAnswerCorrectness(engine, question, givenAnswers);

  return {
    correctAnswer,
    corrections
  };
};
