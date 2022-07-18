import {Services} from '../types/common';
import {fetchSkills} from './fetch-skills';
import {postProgression} from './post-progression';

export const getServices = (): Services => ({
  fetchSkills,
  postProgression
});
