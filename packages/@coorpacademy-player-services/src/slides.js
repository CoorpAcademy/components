// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import type {DataLayer} from './definitions';

type FindSlideById = (slideId: string) => Promise<Slide>;

type SlidesService = {|
  findById: FindSlideById
|};

const findById =
  (dataLayer: DataLayer): FindSlideById =>
  async (slideId: string): Promise<Slide> => {
    const {findSlideById} = dataLayer;
    const slide = await findSlideById(slideId);
    return slide;
  };

const createSlidesService = (dataLayer: DataLayer): SlidesService => ({
  findById: findById(dataLayer)
});

export type {SlidesService};
export default createSlidesService;
