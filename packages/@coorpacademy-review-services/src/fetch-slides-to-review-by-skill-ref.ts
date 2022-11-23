import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, SlideIdFromAPI} from './types/services-types';
import {toJSON} from './tools/fetch-responses';

export const fetchSlidesToReviewBySkillRef = async (
  token: string,
  skillRef: string
): Promise<SlideIdFromAPI[]> => {
  const {user: userId, host}: JWT = decode(token);
  const response = await crossFetch(
    `${host}/api/v2/skills/${skillRef}/review/user/${userId}/slide`,
    {
      headers: {authorization: token}
    }
  );
  return toJSON<SlideIdFromAPI[]>(response);
};
