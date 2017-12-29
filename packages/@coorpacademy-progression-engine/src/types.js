// @flow

export type ViewedResource = {
  type: 'chapter',
  ref: string,
  resources: Array<string>
};

export type Step = {
  current: number
};

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

export type Answer = Array<string>;
export type AcceptedAnswers = Array<Answer>;

export type AllAnswers = Array<{
  slideRef: string,
  answer: Answer,
  isCorrect?: boolean
}>;

export type State = {
  allAnswers: AllAnswers,
  content?: Content,
  nextContent: Content,
  lives: number,
  livesDisabled?: boolean,
  isCorrect: boolean,
  slides: Array<string>,
  requestedClues: Array<string>,
  viewedResources: Array<ViewedResource>,
  stars: number,
  step: Step,
  remainingLifeRequests: number,
  hasViewedAResourceAtThisStep: boolean
};

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
    isCorrect: boolean
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

export type Progression = {
  content: Content,
  initialState: State,
  state: State,
  actions: Array<Action>,
  engine: Engine
};

export type PartialCorrection = {
  answer: string | void,
  isCorrect: boolean
};

export type AnswerCorrection = {
  isCorrect: boolean,
  corrections: Array<PartialCorrection>
};

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

export type Condition = {
  scope: 'currentAnswer' | 'previousAnswers' | 'variable',
  field: 'isCorrect' | 'answer' | string,
  ref?: string,
  operator: 'IN' | 'EQUALS' | 'GTE' | 'LTE',
  values: Array<string | number>
};

export type Instruction = {
  field: string,
  type: 'add' | 'set',
  value: number | boolean
};

export type ChapterRule = {
  source: Content,
  destination: Content,
  instructions: Array<Instruction>,
  conditions: Array<Condition>,
  ref: string
};

export type SlidePools = Array<{
  conditions: Array<Condition>,
  ref: string
}>;

export type SlidePool = {
  chapterId: string,
  slides: Array<Slide>
};

export type NextStepParams = {
  isAccepted?: boolean,
  godmode?: boolean,
  answer?: Answer,
  currentSlide: Slide,
  chapterRules?: Array<ChapterRule>,
  slidePools?: Array<SlidePool>
};

export type NextStepPayload = {
  nextContent: Content,
  isCorrect?: boolean,
  instructions?: Array<Instruction>
};
