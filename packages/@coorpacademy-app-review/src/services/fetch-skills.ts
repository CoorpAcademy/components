import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';
import {Fetch, toJSON} from './tools/fetch-responses';

import {JWT} from '../types/common';
import {Skills} from '../types/skills';

// -----------------------------------------------------------------------------

const fetchSkills = (fetch: Fetch) => async (token, userId): Promise<Skills> => {
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
