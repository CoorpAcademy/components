// @flow
import {
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife
} from './compute-next-step';
import checkAnswer from './check-answer';
import checkAnswerCorrectness from './check-answer-correctness';
import createState from './create-state';
import createProgression from './create-progression';
import {getConfig, getConfigForProgression} from './config';
import ERRORS from './errors';

import type {
  CHAPTER,
  LEVEL,
  SLIDE,
  NODE,
  FAILURE,
  SUCCESS,
  Action,
  Answer,
  AvailableContent,
  Choice,
  Config,
  Content,
  ContentInfo,
  ContentType,
  ContentSlide,
  Engine,
  EngineConfig,
  Engines,
  GenericContent,
  Lesson,
  Media,
  MediaType,
  Meta,
  PartialCorrection,
  Progression,
  ProgressionId,
  Question,
  QCMQuestion,
  QCMGraphicQuestion,
  SliderQuestion,
  QCMDragQuestion,
  BasicQuestion,
  TemplateQuestion,
  QuestionType,
  ResourceContent,
  ResourceMimeType,
  Slide,
  Source,
  State,
  Url
} from './types';

import type {Instruction, ChapterRule} from './rule-engine/types';

export type {
  CHAPTER,
  LEVEL,
  SLIDE,
  NODE,
  FAILURE,
  SUCCESS,
  Action,
  Answer,
  AvailableContent,
  ChapterRule,
  Choice,
  Config,
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
  Media,
  MediaType,
  Meta,
  PartialCorrection,
  Progression,
  ProgressionId,
  Question,
  QCMQuestion,
  QCMGraphicQuestion,
  SliderQuestion,
  QCMDragQuestion,
  BasicQuestion,
  TemplateQuestion,
  QuestionType,
  ResourceContent,
  ResourceMimeType,
  Slide,
  Source,
  State,
  Url
};

export {
  checkAnswer,
  checkAnswerCorrectness,
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  createState,
  createProgression,
  getConfig,
  getConfigForProgression,
  ERRORS
};
