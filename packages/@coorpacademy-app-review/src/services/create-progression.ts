import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {ProgressionFromAPI} from '../actions/data/progression';
import {JWT} from '../types/common';
import {toJSON} from './tools/fetch-responses';
import mockCreateProgression from './create-progression.mock';

// -----------------------------------------------------------------------------

type CreateProgression = (skillRef: string, token: string) => Promise<ProgressionFromAPI>;
type CreateProgressionFnBuilder = (fetch: typeof crossFetch) => CreateProgression;
type DefaultCreateProgressionBuilder = () => CreateProgression;

// -----------------------------------------------------------------------------

const createProgression: CreateProgressionFnBuilder = fetch => async (skillRef, token) => {
  const {host}: JWT = decode(token);
  const response = await fetch(`${host}/api/v2/progressions`, {
    headers: {authorization: token},
    body: JSON.stringify({
      content: {
        ref: skillRef,
        type: 'slide'
      },
      engine: {
        ref: 'review',
        version: '1'
      }
    })
  });

  return toJSON<ProgressionFromAPI>(response);
};

// -----------------------------------------------------------------------------

const buildCreateProgressionFn: DefaultCreateProgressionBuilder = () => {
  if (process.env.SERVICES !== 'mocks') {
    return createProgression(crossFetch);
  }

  return createProgression(mockCreateProgression);
};

// -----------------------------------------------------------------------------

export {createProgression};
export default buildCreateProgressionFn();
