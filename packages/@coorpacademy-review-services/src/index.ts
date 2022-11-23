import type {
  Config as _Config,
  CorrectionFromAPI as CorrectionFromAPI_,
  ProgressionFromAPI as ProgressionFromAPI_,
  ProgressionState as ProgressionState_,
  ReviewContent as ReviewContent_,
  ReviewEngine as ReviewEngine_,
  Services as Services_,
  Skill as Skill_,
  SlideFromAPI as SlideFromAPI_,
  SlideIdFromAPI as SlideIdFromAPI_
} from './types/services-types';
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

export type Config = _Config;
export type CorrectionFromAPI = CorrectionFromAPI_;
export type ProgressionFromAPI = ProgressionFromAPI_;
export type ProgressionState = ProgressionState_;
export type ReviewContent = ReviewContent_;
export type ReviewEngine = ReviewEngine_;
export type Services = Services_;
export type Skill = Skill_;
export type SlideFromAPI = SlideFromAPI_;
export type SlideIdFromAPI = SlideIdFromAPI_;
