import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, Skill} from '../types/common';
import {toJSON} from './tools/fetch-responses';

export const fetchSkills = async (token: string): Promise<Skill[]> => {
  const {user: userId, host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v2/skills/review/user/${userId}`, {
    headers: {authorization: token}
  });

  return toJSON<Skill[]>(response);
};
