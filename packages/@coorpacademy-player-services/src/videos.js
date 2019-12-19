// @flow strict

import type {DataLayer, VideoProvider, VideoTrack} from './definitions';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;
type FindVideoTracksById = (videoId: string) => Promise<Array<VideoTrack>>;

type VideosService = {|
  findUriById: FindUriById,
  findVideoTracksById: FindVideoTracksById
|};

const findUriById = (dataLayer: DataLayer): FindUriById => async (
  id: string,
  provider: VideoProvider
): Promise<string> => {
  const {findVideoUriById} = dataLayer;
  const uri = await findVideoUriById(id, provider);

  return uri;
};

const findVideoTracksById = (dataLayer: DataLayer): FindVideoTracksById => async (
  videoId: string
): Promise<Array<VideoTrack>> => {
  const {findVideoTracksById} = dataLayer;
  const tracks = await findVideoTracksById(videoId);
  return tracks;
};

const createVideosService = (dataLayer: DataLayer): VideosService => ({
  findUriById: findUriById(dataLayer),
  findVideoTracksById: findVideoTracksById(dataLayer)
});

export type {VideosService};
export default createVideosService;
