// @flow strict

import type {Answer} from '@coorpacademy/progression-engine';
import type {Correction} from '../models';

type FindCorrection = (
  progressionId: string,
  slideId: string,
  givenAnswers: Answer
) => Promise<Correction>;

type AnswersService = {|
  findById: FindCorrection
|};

export type {FindCorrection, AnswersService};
