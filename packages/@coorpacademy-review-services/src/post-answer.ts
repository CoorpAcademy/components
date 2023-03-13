import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {JWT, ProgressionFromAPI} from './types/services-types';
import {toJSON} from './tools/fetch-responses';
import {buildURL} from './tools';

export const postAnswer =
  (locale: string | void) =>
  async (
    progression: ProgressionFromAPI,
    token: string,
    answer: string[]
  ): Promise<ProgressionFromAPI> => {
    const progressionId = progression._id;
    const slideRef = progression.state.nextContent.ref;
    const {host}: JWT = decode(token);
    const url = buildURL(`${host}/api/v2/progressions/${progressionId}/answers`, locale);
    const response = await crossFetch(url, {
      method: 'post',
      headers: {authorization: token, 'content-type': 'application/json'},
      body: JSON.stringify({
        content: {
          ref: slideRef,
          type: 'slide'
        },
        answer
      })
    });

    return toJSON<ProgressionFromAPI>(response);
  };
