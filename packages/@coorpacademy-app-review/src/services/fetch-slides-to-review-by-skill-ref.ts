import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, SlideIdFromAPI} from '../types/common';
import {toJSON} from './tools/fetch-responses';

export const fetchSlidesToReviewBySkillRef = async (
  url: string,
  token: string,
  skillRef: string
): Promise<SlideIdFromAPI[]> => {
  const {user: userId}: JWT = decode(token);
  const response = await crossFetch(
    `${url}/api/v1/review/users/${userId}/skills/${skillRef}/slide?limit=5&offset=0`
  );

  return toJSON<SlideIdFromAPI[]>(response);
};
