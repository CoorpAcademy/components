import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {CorrectionFromAPI, JWT} from './types/services-types';
import {toJSON} from './tools/fetch-responses';
import {buildURL} from './tools';

export const fetchCorrection =
  (locale: string | void) =>
  async (
    slideRef: string,
    token: string,
    progressionId: string,
    answer: string[]
  ): Promise<CorrectionFromAPI | void> => {
    const {host}: JWT = decode(token);
    const url = buildURL(
      `${host}/api/v2/progressions/${progressionId}/answers/${slideRef}`,
      locale
    );
    const response = await crossFetch(url, {
      method: 'post',
      headers: {authorization: token},
      body: JSON.stringify({
        answer
      })
    });

    return toJSON<CorrectionFromAPI>(response);
  };
