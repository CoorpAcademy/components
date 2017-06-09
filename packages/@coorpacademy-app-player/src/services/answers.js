import includes from 'lodash/fp/includes';
import * as SlidesService from './slides';
import * as ProgressionsService from './progressions';

// eslint-disable-next-line import/prefer-default-export
export const findById = async (progressionId, slideId) => {
  const [progression, slide] = await Promise.all([
    ProgressionsService.findById(progressionId),
    SlidesService.findById(slideId)
  ]);

  if (!includes(slideId, progression.state.slides)) throw new Error('Answers are not available');

  const {answers} = slide.question.content;

  return answers;
};
