// @flow strict

import includes from 'lodash/fp/includes';
import type {ClueAPI, ContentService} from './definitions';

type FindById = (progressionId: string, slideId: string) => Promise<ClueAPI | void>;
type CluesService = {|
  findById: FindById
|};

const findById = (fixtures: ContentService): FindById => async (
  progressionId,
  slideId
): Promise<ClueAPI | void> => {
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

const createCluesService = (fixtures: ContentService): CluesService => ({
  findById: findById(fixtures)
});

export type {CluesService};
export default createCluesService;
