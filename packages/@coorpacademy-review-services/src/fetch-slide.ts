import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, SlideFromAPI} from './types/services-types';
import {toJSON} from './tools/fetch-responses';

export const fetchSlide = async (slideRef: string, token: string): Promise<SlideFromAPI | void> => {
  const {host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v1/slides/${slideRef}/parentContentTitle`, {
    headers: {authorization: token}
  });

  return toJSON<SlideFromAPI>(response);
};
