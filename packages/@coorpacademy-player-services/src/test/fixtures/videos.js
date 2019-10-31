// @flow strict

import type {VideoProvider} from '../../definitions';
import videosData from './data/videos';

export const findUriById = (id: string, provider: VideoProvider): Promise<string> =>
  Promise.resolve(videosData.url);
