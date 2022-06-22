import {Skills} from '../types/skills';

export const RECEIVED_SKILLS = '@@api/RECEIVED_SKILLS';

export type ReceivedSkills = {
  type: '@@api/RECEIVED_SKILLS';
  payload: Skills;
};

export const receivedSkills = (skills: Skills): ReceivedSkills => ({
  type: RECEIVED_SKILLS,
  payload: skills
});
