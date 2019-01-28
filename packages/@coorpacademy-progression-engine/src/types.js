// @flow strict

import type {Instruction, ChapterRule} from './rule-engine/types';

export type Step = {|
  current: number,
  total?: number
|};

export type ResourceMimeType =
  | 'video/mp4'
  | 'image/jpeg'
  | 'image/png'
  | 'application/pdf'
  | 'application/vimeo';

export type Answer = Array<string>;

export type MICROLEARNING = 'microlearning';
export type LEARNER = 'learner';

export type Engines = MICROLEARNING | LEARNER;

export type CHAPTER = 'chapter';
export type LEVEL = 'level';
export type SLIDE = 'slide';
export type NODE = 'node';
export type FAILURE = 'failure';
export type SUCCESS = 'success';
export type VIDEO = 'video';
export type PDF = 'pdf';
export type ContentType = CHAPTER | LEVEL | SLIDE | NODE | FAILURE | SUCCESS | VIDEO | PDF;

type Url = string;

export type ContentSlide = {|
  type: SLIDE,
  ref: string
|};

export type ContentInfo = {|
  nbSlides: number
|};

export type GenericContent = {|
  ref: string,
  type: ContentType,
  version?: string
|};

export type ResourceContent = {|
  ref: string,
  type: VIDEO | PDF,
  version?: string
|};

export type Content = GenericContent | ResourceContent;

export type ViewedResource = {|
  type: $PropertyType<Content, 'type'>,
  ref: string,
  resources: Array<string>
|};

export type AnswerRecord = {|
  slideRef: string,
  answer: Answer,
  isCorrect: ?boolean
|};

export type Variable = string | boolean | number;
export type Variables = {[string]: Variable};

export type GenericState = {|
  content?: Content,
  nextContent?: Content,
  chapters?: Array<string>,
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
|};

export type State = {
  nextContent: Content,
  content?: Content
} & GenericState;

export type AskClueAction = {|
  type: 'clue',
  payload: {
    content: ContentSlide
  }
|};

export type ContentResourceViewedAction = {|
  type: 'resource',
  payload: {
    resource: ResourceContent,
    content: Content
  }
|};

export type AnswerAction = {|
  type: 'answer',
  payload: {
    content: Content,
    nextContent: Content,
    answer: Answer,
    isCorrect: ?boolean,
    godMode: ?boolean,
    instructions?: Array<Instruction> | null
  }
|};

export type InitAction = {|
  type: 'init'
|};

export type MoveAction = {|
  type: 'move',
  payload: {
    nextContent: Content,
    instructions?: Array<Instruction> | null
  }
|};

export type ExtraLifeAcceptedAction = {|
  type: 'extraLifeAccepted',
  payload: {
    content: Content,
    nextContent: Content,
    instructions: Array<Instruction> | null
  }
|};

export type ExtraLifeRefusedAction = {|
  type: 'extraLifeRefused',
  payload: {
    content: Content,
    nextContent: Content
  }
|};

export type Action =
  | InitAction
  | AnswerAction
  | AskClueAction
  | ExtraLifeAcceptedAction
  | ExtraLifeRefusedAction
  | ContentResourceViewedAction
  | MoveAction;

export type Engine = {|
  ref: string,
  version: string
|};

export type Config = {|
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
|};

export type EngineConfig = {|
  livesDisabled?: boolean,
  lives?: number,
  maxTypos?: number,
  version: string,
  slidesToComplete?: number,
  answerBoundaryLimit?: number,
  starsPerAskingClue?: number,
  starsPerCorrectAnswer?: number,
  starsPerResourceViewed?: number,
  remainingLifeRequests?: number
|};

export type ProgressionId = string;
export type Progression = {|
  _id?: ProgressionId,
  content: GenericContent,
  state?: State,
  engine: Engine,
  engineOptions: EngineConfig,
  actions?: Array<Action>
|};

export type PartialCorrection = {|
  answer: string | void,
  isCorrect: ?boolean
|};

export type AnswerCorrection = {|
  isCorrect: boolean,
  corrections: Array<PartialCorrection>
|};

type Source = {|
  _id: string,
  mimeType: ResourceMimeType,
  url: Url
|};

type Media = {
  type?: string,
  description?: string,
  mimeType?: ResourceMimeType,
  _id?: string,
  mediaUrl?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Source>
};

export type AcceptedAnswers = Array<Answer>;

type ChoiceItem = {|
  text: string,
  value: string,
  _id: string
|};

export type Choice = {|
  _id: string,
  value?: string,
  name?: string,
  type?: 'select',
  label: string,
  items: Array<ChoiceItem>,
  media: Media
|};

export type TemplateChoice = {|
  type: 'text' | 'select'
|};

export type Choices = Array<Choice | TemplateChoice>;

type QuestionCommon = {|
  explanation?: string,
  header?: string,
  medias?: Array<string>
|};

export type QCMQuestion = $Exact<{|
  ...QuestionCommon,
  type: 'qcm',
  content: {
    choices: Array<Choice>,
    answers: AcceptedAnswers
  }
|}>;

export type QCMGraphicQuestion = {|
  type: 'qcmGraphic',
  content: {
    answers: AcceptedAnswers
  }
|};

export type SliderQuestion = {|
  type: 'slider',
  content: {
    answers: AcceptedAnswers
  }
|};

export type QCMDragQuestion = $Exact<{|
  ...QuestionCommon,
  type: 'qcmDrag',
  content: {
    matchOrder: boolean,
    answers: AcceptedAnswers
  }
|}>;

export type BasicQuestion = {|
  type: 'basic',
  content: {
    maxTypos?: ?number,
    answers: AcceptedAnswers
  }
|};

export type TemplateQuestion = {|
  type: 'template',
  content: {
    matchOrder: boolean,
    maxTypos?: ?number,
    choices: Array<TemplateChoice>,
    answers: AcceptedAnswers
  }
|};

export type Question =
  | QCMQuestion
  | QCMGraphicQuestion
  | QCMDragQuestion
  | SliderQuestion
  | BasicQuestion
  | TemplateQuestion;

export type Meta = {
  taggedNewUntil?: string,
  updatedAt: string,
  createdAt: string
};

type Author = string;

type LessonType = 'pdf' | 'video';
type Subtitle = string;

type Lesson = {|
  _id: string,
  videoId?: string,
  mediaUrl?: string,
  poster: string,
  description: string,
  mimeType: ResourceMimeType,
  ref: string,
  type: LessonType,
  subtitles: Array<Subtitle>,
  posters: Array<string>,
  src: Array<string>
|};

export type Slide = {|
  _id: string,
  klf: string,
  chapter_id: string,
  question: Question,
  position?: ?number,
  authors: Array<Author>,
  context?: {
    media: Media
  },
  clue?: string,
  meta: Meta,
  tips: string,
  lessons: Array<Lesson>
|};

export type ChapterContent = {|
  ref: string,
  slides: Array<Slide>,
  rules: Array<ChapterRule> | null
|};

export type AvailableContent = Array<ChapterContent>;
