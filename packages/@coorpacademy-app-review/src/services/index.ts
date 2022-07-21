import {Services} from '../types/common';
import {fetchSkills} from './fetch-skills';
import {postProgression} from './post-progression';
import {fetchSlide} from './fetch-slide';

export const getServices = (): Services => ({
  fetchSkills,
  fetchSlide,
  postProgression
});
