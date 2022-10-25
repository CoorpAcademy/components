import {Services} from '../types/common';
import {fetchCorrection} from './fetch-correction';
import {fetchRank} from './fetch-rank';
import {fetchSkills} from './fetch-skills';
import {fetchSlide} from './fetch-slide';
import {fetchSlidesToReviewBySkillRef} from './fetch-slides-to-review-by-skill-ref';
import {postAnswer} from './post-answer';
import {postProgression} from './post-progression';
import {fetchSkill} from './fetch-skill';

export const getServices = (): Services => ({
  fetchCorrection,
  fetchRank,
  fetchSkill,
  fetchSkills,
  fetchSlide,
  fetchSlidesToReviewBySkillRef,
  postAnswer,
  postProgression
});
