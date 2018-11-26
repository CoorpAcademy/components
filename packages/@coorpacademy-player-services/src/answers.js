import assign from 'lodash/fp/assign';
import includes from 'lodash/fp/includes';
import {checkAnswerCorrectness, getConfigForProgression} from '@coorpacademy/progression-engine';

// eslint-disable-next-line import/prefer-default-export
export const findById = fixtures => async (progressionId, slideId, givenAnswers = []) => {
  const {findProgressionById, findSlideById, getCorrectAnswer} = fixtures;
  const slide = await findSlideById(slideId);
  const progression = await findProgressionById(progressionId);

  if (!includes(slideId, progression.state.slides)) throw new Error('Answer is not available');
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
