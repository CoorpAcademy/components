import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, SlideFromAPI} from '../types/common';
import {toJSON} from './tools/fetch-responses';

export const fetchSlide = async (slideRef: string, token: string): Promise<SlideFromAPI | void> => {
  const {host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v2/slide/${slideRef}`, {
    headers: {authorization: token}
  });

  const slide = (await toJSON(response)) as SlideFromAPI;
  return slide;
};
