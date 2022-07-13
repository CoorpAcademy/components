import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT} from '../types/common';
import {Skills} from '../types/skills';
import {toJSON} from './tools/fetch-responses';

// -----------------------------------------------------------------------------

export type FetchSkills = (token: string) => Promise<Skills>;
type CreateFetchSkills = (fetch: typeof crossFetch) => FetchSkills;

// -----------------------------------------------------------------------------

const fetchSkills: CreateFetchSkills = fetch => async token => {
  const {user: userId, host}: JWT = decode(token);
  const response = await fetch(`${host}/api/v2/skills/review/user/${userId}`, {
    headers: {authorization: token}
  });

  return toJSON<Skills>(response);
};

// -----------------------------------------------------------------------------

export default fetchSkills;
