// @flow

import type {Instruction, ChapterRule} from './rule-engine/types';

export type User = {
  id: string
};

export type Team = Array<User>;
export type Teams = Array<Team>;

export type Step = {
  current: number
};

export type Answer = Array<string>;

export type GenericContent = {
  ref: string,
  type: string,
  version?: string
};

export type ResourceContent = {
  ref: string,
  type: 'video' | 'pdf',
  version?: string
};

export type Content = GenericContent | ResourceContent;

export type ViewedResource = {
  type: $PropertyType<Content, 'type'>,
  ref: string,
  resources: Array<string>
};

export type AnswerRecord = {
  slideRef: string,
  answer: Answer,
  isCorrect: ?boolean
};

export type Variable = string | boolean | number;
export type Variables = {[string]: Variable};

export type GenericState = {
  content?: Content,
  nextContent?: Content,
  lives: number,
  livesDisabled?: boolean,
  isCorrect: ?boolean,
  slides: Array<string>,
  requestedClues: Array<string>,
  viewedResources: Array<ViewedResource>,
  stars: number,
  step: Step,
  remainingLifeRequests: number,
  hasViewedAResourceAtThisStep: boolean,
  allAnswers: Array<AnswerRecord>,
  variables: Variables
};

export type Tower = Array<'placed' | 'removed'>;

export type RacingTeam = {
  players: Array<string>,
  tower: Tower
};

export type RacingTeams = {
  [teamId: string]: RacingTeam
};

export type RacingUser = {
  id: string,
  isCorrect: ?boolean,
  questionNum: number,
  content?: Content,
  nextContent?: Content,
  slides: Array<string>,
  allAnswers: Array<AnswerRecord>,
  team: number
};

export type RacingUsers = {
  [userId: string]: RacingUser
};

export type RacingState = {
  goal: number,
  teams: RacingTeams,
  users: RacingUsers
};

export type State = {
  nextContent: Content,
  content?: Content,
  users?: void
} & GenericState;

export type AnyState = RacingState | State;

export type AskClueAction = {
  type: 'clue',
  payload: {
    content: Content
  }
};

export type ContentResourceViewedAction = {
  type: 'resource',
  payload: {
    resource: ResourceContent,
    content: Content
  }
};

export type AnswerAction = {
  type: 'answer',
  authors: Array<string>,
  payload: {
    content: Content,
    nextContent: Content,
    answer: Answer,
    isCorrect: ?boolean,
    godMode: ?boolean,
    instructions: Array<Instruction> | null
  }
};

export type InitAction = {
  type: 'init'
};

export type MoveAction = {
  type: 'move',
  payload: {
    nextContent: Content,
    instructions: Array<Instruction> | null
  }
};

export type RacingSetupAction = {
  type: 'racing-setup',
  authors: Array<string>,
  payload: {
    users: RacingUsers,
    teams: RacingTeams
  }
};

export type ExtraLifeAcceptedAction = {
  type: 'extraLifeAccepted',
  payload: {
    content: Content,
    nextContent: Content,
    instructions: Array<Instruction> | null
  }
};

export type ExtraLifeRefusedAction = {
  type: 'extraLifeRefused',
  payload: {
    content: Content,
    nextContent: Content
  }
};

export type Action =
  | InitAction
  | RacingSetupAction
  | MoveAction
  | AnswerAction
  | AskClueAction
  | ExtraLifeAcceptedAction
  | ExtraLifeRefusedAction
  | ContentResourceViewedAction
  | (MoveAction & {
      authors?: Array<string> | void
    });

export type Engine = {
  ref: string,
  version: string
};

export type Config = {
  version: string,
  livesDisabled: boolean,
  lives: number,
  maxTypos: number,
  slidesToComplete: number,
  answerBoundaryLimit: number,
  starsPerAskingClue: number,
  starsPerCorrectAnswer: number,
  starsPerResourceViewed: number,
  remainingLifeRequests: number
};

export type EngineOptions = {
  livesDisabled?: boolean,
  lives?: number
};

export type Progression = {
  content: Content,
  engine: Engine,
  engineOptions: EngineOptions,
  actions: Array<Action>
};

export type PartialCorrection = {
  answer: string | void,
  isCorrect: ?boolean
};

export type AnswerCorrection = {
  isCorrect: boolean,
  corrections: Array<PartialCorrection>
};

export type AcceptedAnswers = Array<Answer>;

export type QCMQuestion = {
  type: 'qcm',
  content: {
    answers: AcceptedAnswers
  }
};

export type QCMGraphicQuestion = {
  type: 'qcmGraphic',
  content: {
    answers: AcceptedAnswers
  }
};

export type SliderQuestion = {
  type: 'slider',
  content: {
    answers: AcceptedAnswers
  }
};

export type QCMDragQuestion = {
  type: 'qcmDrag',
  content: {
    matchOrder: boolean,
    answers: AcceptedAnswers
  }
};

export type BasicQuestion = {
  type: 'basic',
  content: {
    maxTypos?: ?number,
    answers: AcceptedAnswers
  }
};

type TemplateChoice = {
  type: 'text' | 'select'
};

export type TemplateQuestion = {
  type: 'template',
  content: {
    matchOrder: boolean,
    maxTypos?: ?number,
    choices: Array<TemplateChoice>,
    answers: AcceptedAnswers
  }
};

export type Question =
  | QCMQuestion
  | QCMGraphicQuestion
  | QCMDragQuestion
  | SliderQuestion
  | BasicQuestion
  | TemplateQuestion;

export type Slide = {
  _id: string,
  chapter_id: string,
  question: Question,
  position?: ?number
};

export type RacingConfig = Config & {
  goal: number
};

export type GenericConfig = Config | RacingConfig;

export type ChapterContent = {
  ref: string,
  slides: Array<Slide>,
  rules: Array<ChapterRule> | null
};

export type AvailableContent = Array<ChapterContent>;
