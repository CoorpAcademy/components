// @flow strict

import {includes} from 'lodash/fp';
import type {ClueAPI, DataLayer} from './definitions';

type FindById = (progressionId: string, slideId: string) => Promise<ClueAPI | void>;
type CluesService = {|
  findById: FindById
|};

const findById = (dataLayer: DataLayer): FindById => async (
  progressionId,
  slideId
): Promise<ClueAPI | void> => {
  const {findProgressionById, getClue} = dataLayer;
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

const createCluesService = (dataLayer: DataLayer): CluesService => ({
  findById: findById(dataLayer)
});

export type {CluesService};
export default createCluesService;
