// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';

type FindById = (slideId: string) => Promise<Slide>;

type SlidesService = {|
  findById: FindById
|};

export type {FindById, SlidesService};
