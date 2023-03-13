import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, ProgressionFromAPI, SandboxProgressionFromAPI} from './types/services-types';
import {toJSON} from './tools/fetch-responses';

export const postProgression = async (
  skillRef: string,
  token: string
): Promise<ProgressionFromAPI> => {
  const {host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v2/progressions`, {
    method: 'post',
    headers: {authorization: token, 'content-type': 'application/json'},
    body: JSON.stringify({
      content: {
        ref: skillRef,
        type: 'skill'
      },
      engine: {
        ref: 'review',
        version: '1'
      }
    })
  });

  return toJSON<ProgressionFromAPI>(response);
};

export const postSandboxProgression = async (
  slideRef: string,
  token: string
): Promise<SandboxProgressionFromAPI> => {
  const {host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v2/progressions/sandbox`, {
    method: 'post',
    headers: {authorization: token, 'content-type': 'application/json'},
    body: JSON.stringify({
      engineRef: 'review',
      slideId: slideRef
    })
  });

  return toJSON<SandboxProgressionFromAPI>(response);
};
