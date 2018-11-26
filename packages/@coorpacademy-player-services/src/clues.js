import includes from 'lodash/fp/includes';

const findById = fixtures => async (progressionId, slideId) => {
  const {findProgressionById, getClue} = fixtures;
  const progression = await findProgressionById(progressionId);

  if (!includes(slideId, progression.state.requestedClues))
    throw new Error('Clue is not available');

  return getClue(slideId);
};

// eslint-disable-next-line import/prefer-default-export
export {findById};
