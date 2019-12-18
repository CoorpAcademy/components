// @flow strict

import type {VideoProvider} from '../models';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;
type FindVideoSubtitleById = (id: string) => Promise<string>;

type VideosService = {|
  findUriById: FindUriById,
  findVideoSubtitleById: FindVideoSubtitleById
|};

export type {FindUriById, FindVideoSubtitleById, VideosService};
