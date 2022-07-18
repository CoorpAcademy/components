import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT} from '../types/common';
import {Skills} from '../types/skills';
import {toJSON} from './tools/fetch-responses';

// -----------------------------------------------------------------------------

type FetchSkills = (token: string) => Promise<Skills>;
type CreateFetchSkills = (fetch: typeof crossFetch) => FetchSkills;

// -----------------------------------------------------------------------------

export const fetchSkills: CreateFetchSkills = fetch => async token => {
  const {user: userId, host}: JWT = decode(token);
  const response = await fetch(`${host}/api/v2/skills/review/user/${userId}`, {
    headers: {authorization: token}
  });

  return toJSON<Skills>(response);
};
