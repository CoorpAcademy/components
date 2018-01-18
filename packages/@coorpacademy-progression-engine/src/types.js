// @flow

import type {Instruction} from './compute-next-step/rule-engine/types';

export type ViewedResource = {
  type: 'chapter',
  ref: string,
  resources: Array<string>
};

export type Step = {
  current: number
};

export type Answer = Array<string>;

export type IsCorrect = ?boolean;

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

export type AnswerRecord = {
  slideRef: string,
  answer: Answer,
  isCorrect: IsCorrect
};

export type Variable = string | boolean | number;
export type Variables = {[string]: Variable};

export type GenericState = {
  content?: Content,
  nextContent?: Content,
  lives: number,
  livesDisabled?: boolean,
  isCorrect: IsCorrect,
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

export type State = {
  nextContent: Content,
  content?: Content
} & GenericState;

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
  payload: {
    content: Content,
    nextContent: Content,
    answer: Answer,
    isCorrect: IsCorrect,
    godMode?: boolean,
    instructions?: Array<Instruction>
  }
};

export type InitAction = {
  type: 'init'
};

export type ExtraLifeAcceptedAction = {
  type: 'extraLifeAccepted',
  payload: {
    content: Content,
    nextContent: Content
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
  | AnswerAction
  | AskClueAction
  | ExtraLifeAcceptedAction
  | ExtraLifeRefusedAction
  | ContentResourceViewedAction;

export type Engine = {
  ref: string,
  version: string
};

export type EngineOptions = {
  livesDisabled: boolean
};

export type Configuration = {
  instructions?: Array<Instruction>,
  nextContent?: Content
};

export type Progression = {
  content: Content,
  // initialState: State,
  configuration?: Configuration,
  // state: State,
  actions: Array<Action>,
  engine: Engine
};

export type NewProgression = {
  engine: Engine,
  engineOptions: EngineOptions,
  actions: Array<Action>
};

export type PartialCorrection = {
  answer: string | void,
  isCorrect: IsCorrect
};

export type AnswerCorrection = {
  isCorrect: IsCorrect,
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

export type Config = {
  version: string,
  lives: number,
  livesDisabled: boolean,
  maxTypos: number,
  slidesToComplete: number,
  answerBoundaryLimit: number,
  starsPerAskingClue: number,
  starsPerCorrectAnswer: number,
  starsPerResourceViewed: number,
  remainingLifeRequests: number
};
