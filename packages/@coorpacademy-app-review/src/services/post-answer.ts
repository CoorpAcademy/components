import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, ProgressionFromAPI} from '../types/common';
import {toJSON} from './tools/fetch-responses';

export const postAnswer = async (
  skillRef: string,
  token: string,
  progressionId: string,
  answer: string[]
): Promise<ProgressionFromAPI> => {
  const {host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v2/progressions/${progressionId}/answers`, {
    method: 'post',
    headers: {authorization: token},
    body: JSON.stringify({
      content: {
        ref: skillRef,
        type: 'slide'
      },
      answer
    })
  });

  return toJSON<ProgressionFromAPI>(response);
};
