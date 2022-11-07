import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';
import {JWT, Skill} from '../types/common';
import {toJSON} from './tools/fetch-responses';

export const fetchSkill = async (skillRef: string, token: string): Promise<Skill | void> => {
  const {host}: JWT = decode(token);
  const response = await crossFetch(`${host}/api/v2/skills?conditions={"ref":"${skillRef}"}`, {
    headers: {authorization: token}
  });
  const skills = await toJSON<Skill[]>(response);
  return skills[0];
};
