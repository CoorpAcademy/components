import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, SlideFromAPI} from './types/services-types';
import {toJSON} from './tools/fetch-responses';
import {buildURL} from './tools';

export const fetchSlide =
  (locale: string | void) =>
  async (slideRef: string, token: string): Promise<SlideFromAPI | void> => {
    const {host}: JWT = decode(token);
    const url = buildURL(`${host}/api/v1/slides/${slideRef}/parentContentTitle`, locale);
    const response = await crossFetch(url, {
      headers: {authorization: token}
    });

    return toJSON<SlideFromAPI>(response);
  };
