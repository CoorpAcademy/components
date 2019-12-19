// @flow strict

import type {DataLayer, VideoProvider, VideoTrack} from './definitions';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;
type FindTracksById = (videoId: string) => Promise<Array<VideoTrack>>;

type VideosService = {|
  findUriById: FindUriById,
  findTracksById: FindTracksById
|};

const findUriById = (dataLayer: DataLayer): FindUriById => async (
  id: string,
  provider: VideoProvider
): Promise<string> => {
  const {findVideoUriById} = dataLayer;
  const uri = await findVideoUriById(id, provider);

  return uri;
};

const findTracksById = (dataLayer: DataLayer): FindTracksById => async (
  videoId: string
): Promise<Array<VideoTrack>> => {
  const {findVideoTracksById} = dataLayer;
  const tracks = await findVideoTracksById(videoId);
  return tracks;
};

const createVideosService = (dataLayer: DataLayer): VideosService => ({
  findUriById: findUriById(dataLayer),
  findTracksById: findTracksById(dataLayer)
});

export type {VideosService};
export default createVideosService;
