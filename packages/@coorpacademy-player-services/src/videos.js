// @flow strict

import type {DataLayer, VideoProvider} from './definitions';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;

type VideosService = {|
  findUriById: FindUriById
|};

const findUriById = (dataLayer: DataLayer): FindUriById => async (
  id: string,
  provider: VideoProvider
): Promise<string> => {
  const {findVideoUriById} = dataLayer;
  const uri = await findVideoUriById(id, provider);

  return uri;
};

const createVideosService = (dataLayer: DataLayer): VideosService => ({
  findUriById: findUriById(dataLayer)
});

export type {VideosService};
export default createVideosService;
