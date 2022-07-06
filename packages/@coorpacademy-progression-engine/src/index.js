// @flow
import {
  computeNextStepAfterAnswer,
  computeNextStepAfterAnswerForReview,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife
} from './compute-next-step';
import checkAnswer from './check-answer';
import checkAnswerCorrectness from './check-answer-correctness';
import createState from './create-state';
import createProgression from './create-progression';
import getFastSlideExitNode from './compute-fast-slide-next-content';
import {getConfig, getConfigForProgression} from './config';
import ERRORS from './errors';

import type {
  CHAPTER,
  DISCIPLINE,
  LEVEL,
  SLIDE,
  NODE,
  FAILURE,
  SUCCESS,
  Action,
  Answer,
  AnswerRecord,
  AvailableContent,
  Choice,
  Config,
  Context,
  Content,
  ContentInfo,
  ContentType,
  ContentSlide,
  Engine,
  EngineConfig,
  Engines,
  GenericContent,
  Lesson,
  LessonType,
  Media,
  MediaType,
  Meta,
  PartialCorrection,
  Progression,
  ProgressionId,
  Question,
  QuestionCommon,
  QuestionType,
  QCMQuestion,
  QCMGraphicQuestion,
  SliderQuestion,
  QCMDragQuestion,
  BasicQuestion,
  TemplateQuestion,
  ResourceContent,
  VideoMimeType,
  ResourceMimeType,
  Slide,
  Source,
  State,
  Step,
  Url,
  Variables,
  ViewedResource
} from './types';

import type {Instruction, ChapterRule} from './rule-engine/types';

export type {
  CHAPTER,
  DISCIPLINE,
  LEVEL,
  SLIDE,
  NODE,
  FAILURE,
  SUCCESS,
  Action,
  Answer,
  AnswerRecord,
  AvailableContent,
  ChapterRule,
  Choice,
  Config,
  Context,
  Content,
  ContentInfo,
  ContentType,
  ContentSlide,
  Engine,
  EngineConfig,
  Engines,
  GenericContent,
  Instruction,
  Lesson,
  LessonType,
  Media,
  MediaType,
  Meta,
  PartialCorrection,
  Progression,
  ProgressionId,
  Question,
  QuestionCommon,
  QuestionType,
  QCMGraphicQuestion,
  QCMQuestion,
  SliderQuestion,
  QCMDragQuestion,
  BasicQuestion,
  TemplateQuestion,
  ResourceContent,
  VideoMimeType,
  ResourceMimeType,
  Slide,
  Source,
  State,
  Step,
  Url,
  Variables,
  ViewedResource
};

export {
  checkAnswer,
  checkAnswerCorrectness,
  computeNextStepAfterAnswer,
  computeNextStepAfterAnswerForReview,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  getFastSlideExitNode,
  createState,
  createProgression,
  getConfig,
  getConfigForProgression,
  ERRORS
};
