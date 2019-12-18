// @flow strict

import type {DataLayer, VideoProvider, Track} from './definitions';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;
type FindVideoSubtitleById = (videoId: string) => Promise<Array<Track>>;

type VideosService = {|
  findUriById: FindUriById,
  findVideoSubtitleById: FindVideoSubtitleById
|};

const findUriById = (dataLayer: DataLayer): FindUriById => async (
  id: string,
  provider: VideoProvider
): Promise<string> => {
  const {findVideoUriById} = dataLayer;
  const uri = await findVideoUriById(id, provider);

  return uri;
};

const findSubtitleById = (dataLayer: DataLayer): FindVideoSubtitleById => async (
  videoId: string
): Promise<Array<Track>> => {
  const {findVideoSubtitleById} = dataLayer;
  const tracks = await findVideoSubtitleById(videoId);
  return tracks;
};

const createVideosService = (dataLayer: DataLayer): VideosService => ({
  findUriById: findUriById(dataLayer),
  findVideoSubtitleById: findSubtitleById(dataLayer)
});

export type {VideosService};
export default createVideosService;
