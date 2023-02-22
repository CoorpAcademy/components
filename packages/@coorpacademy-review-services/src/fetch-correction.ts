import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {CorrectionFromAPI, JWT} from './types/services-types';
import {toJSON} from './tools/fetch-responses';

const buildURL = (url: string, locale: string | void): string => {
  if (!locale) return url;
  return `${url}?lang=${locale}`;
};

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
