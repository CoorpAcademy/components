// @flow strict

import includes from 'lodash/fp/includes';
import type {Clue, Fixtures} from './definitions';

type FindById = (progressionId: string, slideId: string) => Promise<Clue>;
type CluesService = {|
  findById: FindById
|};

const findById = (fixtures: Fixtures): FindById => async (
  progressionId,
  slideId
): Promise<Clue> => {
  const {findProgressionById, getClue} = fixtures;
  const progression = await findProgressionById(progressionId);

  if (!progression) {
    throw new Error(`progression "${progressionId}" not found`);
  }

  const state = progression.state;

  if (!state) {
    throw new Error(`progression "${progressionId}" has no state`);
  }

  if (!includes(slideId, state.requestedClues)) throw new Error('Clue is not available');

  return getClue(slideId);
};

const createCluesService = (fixtures: Fixtures): CluesService => ({
  findById: findById(fixtures)
});

export type {CluesService};
export default createCluesService;
