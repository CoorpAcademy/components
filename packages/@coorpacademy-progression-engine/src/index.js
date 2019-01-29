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
  Choices,
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
  Meta,
  PartialCorrection,
  Progression,
  ProgressionId,
  Question,
  QuestionType,
  ResourceContent,
  ResourceMimeType,
  Slide,
  Source,
  State,
  TemplateChoice,
  Url
} from './types';

import type {Instruction, ChapterRule} from './rule-engine/types';

export type {
  CHAPTER,
  LEVEL,
  SLIDE,
  NODE,
  ERRORS,
  FAILURE,
  SUCCESS,
  Action,
  Answer,
  AvailableContent,
  ChapterRule,
  Choice,
  Choices,
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
  Meta,
  PartialCorrection,
  Progression,
  ProgressionId,
  Question,
  QuestionType,
  ResourceContent,
  ResourceMimeType,
  Slide,
  Source,
  State,
  TemplateChoice,
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
  getConfigForProgression
};
