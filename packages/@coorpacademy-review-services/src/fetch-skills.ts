import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, SkillToReview} from './types/services-types';
import {toJSON} from './tools/fetch-responses';
import {buildURL} from './tools';

export const fetchSkills =
  (locale: string | void) =>
  async (token: string): Promise<SkillToReview[]> => {
    const {user: userId, host}: JWT = decode(token);
    const url = buildURL(`${host}/api/v2/skills/review/user/${userId}`, locale);
    const response = await crossFetch(url, {
      headers: {authorization: token}
    });

    return toJSON<SkillToReview[]>(response);
  };
