import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT} from '../types/common';
import {Skills} from '../types/skills';
import {toJSON} from './tools/fetch-responses';

// -----------------------------------------------------------------------------

export type FetchSkills = (
  fetch: typeof crossFetch
) => (token: string, userId: string) => Promise<Skills>;

const fetchSkills: FetchSkills = fetch => async (token, userId) => {
  const jwt: JWT = decode(token);
  const response = await fetch(`${jwt.host}/api/v2/skills/review/user/${userId}`, {
    headers: {authorization: token}
  });

  const skills = (await toJSON(response)) as Skills;
  return skills;
};

// -----------------------------------------------------------------------------

export {fetchSkills};
export default fetchSkills(crossFetch);
