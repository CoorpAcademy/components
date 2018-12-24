// @flow strict

import type {Answer} from '@coorpacademy/progression-engine';
import type {Correction} from '../models';

type FindById = (
  progressionId: string,
  slideId: string,
  givenAnswers: Answer
) => Promise<Correction>;

type AnswersService = {|
  findById: FindById
|};

export type {FindById, AnswersService};
