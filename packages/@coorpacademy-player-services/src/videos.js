// @flow strict

import {VIDEO_TRACK_TYPE} from './definitions';
import type {DataLayer, VideoProvider, VideoTrack, VideoTrackType} from './definitions';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;
type FindTracksById = (id: string, type?: VideoTrackType) => Promise<Array<VideoTrack>>;

type VideosService = {|
  findUriById: FindUriById,
  findTracksById: FindTracksById,
|};

const findUriById =
  (dataLayer: DataLayer): FindUriById =>
  async (id: string, provider: VideoProvider): Promise<string> => {
    const {findVideoUriById} = dataLayer;
    const uri = await findVideoUriById(id, provider);

    return uri;
  };

const findTracksById =
  (dataLayer: DataLayer): FindTracksById =>
  async (id: string, type?: VideoTrackType = VIDEO_TRACK_TYPE.SRT): Promise<Array<VideoTrack>> => {
    const {findVideoTracksById} = dataLayer;
    const tracks = await findVideoTracksById(id, type);

    return tracks;
  };

const createVideosService = (dataLayer: DataLayer): VideosService => ({
  findUriById: findUriById(dataLayer),
  findTracksById: findTracksById(dataLayer),
});

export type {VideosService};
export default createVideosService;
