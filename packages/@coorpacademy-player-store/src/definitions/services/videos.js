// @flow strict

import type {VideoProvider} from '../models';

type FindUriById = (id: string, provider: VideoProvider) => Promise<string>;

type VideosService = {|
  findUriById: FindUriById
|};

export type {FindUriById, VideosService};
