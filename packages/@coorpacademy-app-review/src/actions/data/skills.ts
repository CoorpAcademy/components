import {Skills} from '../../types/skills';

export const RECEIVED_SKILLS = '@@data/skills/RECEIVED_SKILLS';
export const ERROR_FETCHING_SKILLS = '@@data/skills/ERROR_FETCHING_SKILLS';



export type ErrorFetchingSkills = {
  type: '@@data/skills/ERROR_FETCHING_SKILLS';
  payload: Error;
};

export const receivedSkills = (skills: Skills): ReceivedSkills => ({
  type: RECEIVED_SKILLS,
  payload: skills
});

export const errorFetchingSkills = (error: Error): ErrorFetchingSkills => ({
  type: ERROR_FETCHING_SKILLS,
  payload: error
});
