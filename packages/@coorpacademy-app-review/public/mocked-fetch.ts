import type crossFetch from 'cross-fetch';
import decode from 'jwt-decode';
import {toResponse} from '../src/services/tools/fetch.mocks';
import {JWT} from '../src/types/common';
import skills from './mocks/skills';

const mockedFetch = (token: string): typeof crossFetch => {
  const {user: userId, host}: JWT = decode(token);

  return url => {
    switch (url) {
      case `${host}/api/v2/skills/review/user/${userId}`:
        return toResponse(200, 'OK', JSON.stringify(skills));
      default:
        return toResponse(200, 'OK', JSON.stringify(skills));
    }
  };
};

export default mockedFetch;
