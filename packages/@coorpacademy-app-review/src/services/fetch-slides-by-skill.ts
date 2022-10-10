import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, SlideIdFromAPI} from '../types/common';
import {toJSON} from './tools/fetch-responses';

export const fetchSlidesBySkill = async (
  url: string,
  token: string,
  skillRef: string
): Promise<SlideIdFromAPI[] | void> => {
  const {user: userId}: JWT = decode(token);
  const response = await crossFetch(
    `${url}/api/v1/review/users/${userId}/skills/${skillRef}/slide?limit=5&offset=0`,
    {
      headers: {authorization: token}
    }
  );

  return toJSON<SlideIdFromAPI[]>(response);
};
