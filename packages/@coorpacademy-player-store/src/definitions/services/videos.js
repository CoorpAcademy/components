// @flow strict

import type {VideoProvider} from '../models';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;
type FindTracksById = (id: string) => Promise<string>;

type VideosService = {|
  findUriById: FindUriById,
  findTracksById: FindTracksById
|};

export type {FindUriById, FindTracksById, VideosService};
