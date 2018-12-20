// @flow strict

import type {
  AvailableContent,
  Config,
  Content as _Content,
  ContentSlide,
  Engine,
  EngineOptions,
  Instruction,
  Progression,
  ResourceContent
} from '@coorpacademy/progression-engine';

import type {Fixtures, UserAnswer} from './definitions';

import * as AnalyticsService from './analytics';
import AnswersService from './answers';
import CluesService from './clues';
import * as CoachService from './coach';
import * as CommentsService from './comments';
import ContentService from './content';
import ExitNodesService from './exit-nodes';
import * as LeaderBoardService from './leaderboard';
import * as LocationService from './location';
import createProgressionsService from './progressions';
import RecommendationsService from './recommendations';
import SlidesService from './slides';

type ProgressionsService = {
  acceptExtraLife: (
    progressionId: string,
    payload: {
      content: _Content,
      nextContent: _Content,
      instructions: Array<Instruction> | null
    }
  ) => Promise<Progression>,
  create: (engine: Engine, content: _Content, engineOptions: EngineOptions) => Promise<Progression>,
  findBestOf: (engineRef: string, contentRef: string, progressionId: string) => Progression,
  findById: (id: string) => Promise<Progression | void>,
  getAvailableContent: (content: _Content) => Promise<AvailableContent>,
  getEngineConfig: (engine: Engine) => Promise<Config>,
  markResourceAsViewed: (
    progressionId: string,
    payload: {
      resource: ResourceContent,
      content: _Content
    }
  ) => Promise<Progression>,
  openAssistance: (progression: Progression) => Progression,
  postAnswer: (progressionId: string, payload: UserAnswer) => Promise<Progression>,
  refuseExtraLife: (
    progressionId: string,
    payload: {
      content: _Content,
      nextContent: _Content
    }
  ) => Promise<Progression>,
  requestClue: (progressionId: string, payload: {content: ContentSlide}) => Promise<Progression>,
  save: Progression => Progression
};

export type {ProgressionsService};

export const Analytics = AnalyticsService;
export const Answers = AnswersService;
export const Clues = CluesService;
export const Coach = CoachService;
export const Comments = CommentsService;
export const Content = ContentService;
export const ExitNodes = ExitNodesService;
export const LeaderBoard = LeaderBoardService;
export const Location = LocationService; // eslint-disable-line no-shadow
export const Logger = console; // eslint-disable-line no-console
export const Progressions: Fixtures => ProgressionsService = createProgressionsService;
export const Recommendations = RecommendationsService;
export const Slides = SlidesService;
