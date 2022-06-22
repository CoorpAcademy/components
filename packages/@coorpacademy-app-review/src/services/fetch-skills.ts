import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT} from '../types/common';
import {Skills} from '../types/skills';
import {toJSON} from './tools/fetch-responses';
import createMock from './fetch-skills.mock';

// -----------------------------------------------------------------------------

type FetchSkills = (token: string) => Promise<Skills>;
type CreateFetchSkills = (fetch: typeof crossFetch) => FetchSkills;
type CreateDefaultFetchSkills = () => FetchSkills;

// -----------------------------------------------------------------------------

const createFetchSkills: CreateDefaultFetchSkills = () => {
  if (process.env.SERVICES !== 'mocks') {
    return fetchSkills(crossFetch);
  }

  return fetchSkills(createMock());
};

// -----------------------------------------------------------------------------

const fetchSkills: CreateFetchSkills = fetch => async token => {
  const {user: userId, host}: JWT = decode(token);
  console.log({userId, token});
  const response = await fetch(`${host}/api/v2/skills/review/user/${userId}`, {
    headers: {authorization: token}
  });

  const skills = (await toJSON(response)) as Skills;
  return skills;
};

// -----------------------------------------------------------------------------

export {fetchSkills};
export default createFetchSkills();
