import type crossFetch from 'cross-fetch';
import {toResponse} from '../src/services/tools/fetch.mocks';
import skills from './mocks/skills';

const mockedFetch: typeof crossFetch = url => {
  switch (url) {
    default:
      return toResponse(200, 'OK', JSON.stringify(skills));
  }
};

export default mockedFetch;
