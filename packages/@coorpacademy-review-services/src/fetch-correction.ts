import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {CorrectionFromAPI, JWT} from './types/services-types';
import {toJSON} from './tools/fetch-responses';

export const fetchCorrection = async (
  slideRef: string,
  token: string,
  progressionId: string,
  answer: string[]
): Promise<CorrectionFromAPI | void> => {
  const {host}: JWT = decode(token);
  const response = await crossFetch(
    `${host}/api/v2/progressions/${progressionId}/answers/${slideRef}`,
    {
      method: 'post',
      headers: {authorization: token},
      body: JSON.stringify({
        answer
      })
    }
  );

  return toJSON<CorrectionFromAPI>(response);
};
