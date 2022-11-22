import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, Rank} from './types/services-types';
import {toJSON} from './tools/fetch-responses';

export const fetchRank = async (token: string): Promise<Rank> => {
  const {user: userId, host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v1/leaderboard/rank/${userId}?group=ALL`, {
    headers: {authorization: token}
  });

  return toJSON<Rank>(response);
};
