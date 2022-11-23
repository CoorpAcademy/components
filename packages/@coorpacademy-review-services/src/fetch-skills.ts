import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, SkillToReview} from './types/services-types';
import {toJSON} from './tools/fetch-responses';

export const fetchSkills = async (token: string): Promise<SkillToReview[]> => {
  const {user: userId, host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v2/skills/review/user/${userId}`, {
    headers: {authorization: token}
  });

  return toJSON<SkillToReview[]>(response);
};
