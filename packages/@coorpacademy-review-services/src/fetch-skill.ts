import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';
import {JWT, Skill} from './types/services-types';
import {toJSON} from './tools/fetch-responses';
import {buildURL} from './tools';

export const fetchSkill =
  (locale?: string) =>
  async (skillRef: string, token: string): Promise<Skill> => {
    const {host}: JWT = decode(token);
    const url = buildURL(`${host}/api/v2/skills`, locale, {
      conditions: JSON.stringify({ref: skillRef})
    });
    const response = await crossFetch(url, {
      headers: {authorization: token}
    });
    const skills = await toJSON<Skill[]>(response);
    return skills[0];
  };
