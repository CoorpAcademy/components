// @flow strict

import type {
  AvailableContent,
  Config,
  Content,
  ContentSlide,
  Engine,
  EngineOptions,
  Instruction,
  Progression,
  ResourceContent
} from '@coorpacademy/progression-engine';
import type {UserAnswer} from '../models';

type AcceptExtraLife = (
  progressionId: string,
  payload: {
    content: Content,
    nextContent: Content,
    instructions: Array<Instruction> | null
  }
) => Promise<Progression>;

type CreateProgression = (Engine, Content, EngineOptions) => Promise<Progression>;

type FindBestOf = (engineRef: string, contentRef: string, progressionId: string) => Progression;
type FindById = (id: string) => Promise<Progression | void>;
type GetAvailableContent = Content => Promise<AvailableContent>;
type MarkResourceAsViewed = (
  progressionId: string,
  payload: {
    resource: ResourceContent,
    content: Content
  }
) => Promise<Progression>;

type PostAnswer = (progressionId: string, payload: UserAnswer) => Promise<Progression>;
type RefuseExtraLife = (
  progressionId: string,
  payload: {
    content: Content,
    nextContent: Content
  }
) => Promise<Progression>;

type RequestClue = (
  progressionId: string,
  payload: {content: ContentSlide}
) => Promise<Progression>;

type ProgressionsService = {|
  acceptExtraLife: AcceptExtraLife,
  create: CreateProgression,
  findBestOf: FindBestOf,
  findById: FindById,
  getAvailableContent: GetAvailableContent,
  getEngineConfig: Engine => Promise<Config>,
  markResourceAsViewed: MarkResourceAsViewed,
  openAssistance: Progression => Progression,
  postAnswer: PostAnswer,
  refuseExtraLife: RefuseExtraLife,
  requestClue: RequestClue,
  save: Progression => Progression
|};

export type {
  AcceptExtraLife,
  CreateProgression,
  FindBestOf,
  FindById,
  GetAvailableContent,
  MarkResourceAsViewed,
  PostAnswer,
  RefuseExtraLife,
  RequestClue,
  ProgressionsService
};
