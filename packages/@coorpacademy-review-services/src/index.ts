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
  SlideMedia as SlideMedia_,
  MediaSrc as MediaSrc_,
  VideoSrc as VideoSrc_,
  VideoPropsForPlayer as VideoPropsForPlayer_,
  AudioMedia as _AudioMedia,
  ImageMedia as _ImageMedia,
  VideoMedia as _VideoMedia,
  SlideIdFromAPI as SlideIdFromAPI_,
  SkillToReview as _SkillToReview,
  BasicQuestion as _BasicQuestion,
  ChoiceFromAPI as _ChoiceFromAPI,
  QcmDragQuestion as _QcmDragQuestion,
  Question as _Question,
  QcmGraphicQuestion as _QcmGraphicQuestion,
  QcmQuestion as _QcmQuestion,
  SliderQuestion as _SliderQuestion,
  TemplateQuestion as _TemplateQuestion,
  ProgressionAnswerItem as _ProgressionAnswerItem,
  SlideContent as _SlideContent,
  Rank as _Rank,
  ChoiceItem as _ChoiceItem
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
export type MediaSrc = MediaSrc_;
export type VideoSrc = VideoSrc_;
export type VideoPropsForPlayer = VideoPropsForPlayer_;
export type SlideMedia = SlideMedia_;
export type AudioMedia = _AudioMedia;
export type ImageMedia = _ImageMedia;
export type VideoMedia = _VideoMedia;
export type SkillToReview = _SkillToReview;
export type BasicQuestion = _BasicQuestion;
export type ChoiceFromAPI = _ChoiceFromAPI;
export type QcmDragQuestion = _QcmDragQuestion;
export type Question = _Question;
export type QcmGraphicQuestion = _QcmGraphicQuestion;
export type QcmQuestion = _QcmQuestion;
export type SliderQuestion = _SliderQuestion;
export type TemplateQuestion = _TemplateQuestion;
export type ProgressionAnswerItem = _ProgressionAnswerItem;
export type SlideContent = _SlideContent;
export type Rank = _Rank;
export type ChoiceItem = _ChoiceItem;
