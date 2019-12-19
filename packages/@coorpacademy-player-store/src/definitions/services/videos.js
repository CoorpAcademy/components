// @flow strict

import type {VideoProvider} from '../models';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;
type FindVideoTracksById = (id: string) => Promise<string>;

type VideosService = {|
  findUriById: FindUriById,
  findVideoTracksById: FindVideoTracksById
|};

export type {FindUriById, FindVideoTracksById, VideosService};
