// @flow strict

import type {VideoProvider} from '../../definitions';
import videosData from './data/videos';

// eslint-disable-next-line import/prefer-default-export
export const findUriById = (id: string, provider: VideoProvider): Promise<string> =>
  Promise.resolve(videosData.url);
