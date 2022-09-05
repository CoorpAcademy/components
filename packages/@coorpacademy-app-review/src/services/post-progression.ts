import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, ProgressionFromAPI} from '../types/common';
import {toJSON} from './tools/fetch-responses';

export const postProgression = async (
  skillRef: string,
  token: string
): Promise<ProgressionFromAPI> => {
  const {host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v2/progressions`, {
    method: 'post',
    headers: {'content-type': 'application/json'},
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
