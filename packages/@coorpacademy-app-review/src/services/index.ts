import {Services} from '../types/common';
import {fetchCorrection} from './fetch-correction';
import {fetchSkills} from './fetch-skills';
import {fetchSlide} from './fetch-slide';
import {postAnswer} from './post-answer';
import {postProgression} from './post-progression';

export const getServices = (): Services => ({
  fetchCorrection,
  fetchSkills,
  fetchSlide,
  postAnswer,
  postProgression
});
