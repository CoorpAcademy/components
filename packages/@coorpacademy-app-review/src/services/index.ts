import {Services} from '../types/common';
import {fetchSkills} from './fetch-skills';
import {postProgression} from './post-progression';
import {fetchSlide} from './fetch-slide';
import {postAnswer} from './post-answer';

export const getServices = (): Services => ({
  fetchSkills,
  fetchSlide,
  postProgression,
  postAnswer
});
