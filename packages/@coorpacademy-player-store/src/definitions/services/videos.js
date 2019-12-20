// @flow strict

import type {VideoProvider, VideoTrack, VideoTrackType} from '../models';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;
type FindTracksById = (id: string, type?: VideoTrackType) => Promise<Array<VideoTrack>>;

type VideosService = {|
  findUriById: FindUriById,
  findTracksById: FindTracksById
|};

export type {FindUriById, FindTracksById, VideosService};
