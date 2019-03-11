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
  | 'application/jwplayer'
  | 'application/vimeo';

export type Answer = Array<string>;

export type MICROLEARNING = 'microlearning';
export type LEARNER = 'learner';

export type Engines = MICROLEARNING | LEARNER;

export type CHAPTER = 'chapter';
export type DISCIPLINE = 'discipline';
export type LEVEL = 'level';
export type SLIDE = 'slide';
export type NODE = 'node';
export type FAILURE = 'failure';
export type SUCCESS = 'success';
export type IMG = 'img';
export type VIDEO = 'video';
export type PDF = 'pdf';
export type ContentType =
  | DISCIPLINE
  | CHAPTER
  | LEVEL
  | SLIDE
  | NODE
  | FAILURE
  | SUCCESS
  | IMG
  | PDF
  | VIDEO;

export type LessonType = VIDEO | PDF | IMG;

export type Url = string;

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
  type: LessonType,
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

export type Source = {|
  _id: string,
  mimeType: ResourceMimeType,
  url: Url
|};

export type MediaType = 'img' | 'video' | 'pdf';
export type Media = {
  type?: MediaType,
  description?: string,
  mimeType?: ResourceMimeType,
  _id?: string,
  mediaUrl?: Url,
  url?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Source>
};

export type AcceptedAnswers = Array<Answer>;

export type Choice = {|
  _id: string,
  value?: string,
  name?: string,
  type?: 'text' | 'select',
  label: string,
  items?: Array<{|
    text: string,
    value: string,
    _id: string
  |}>,
  media?: Media
|};

export type QuestionType = 'qcm' | 'qcmGraphic' | 'slider' | 'qcmDrag' | 'basic' | 'template';

export type QuestionCommon = {|
  explanation?: string,
  header?: string,
  medias?: Array<Media>
|};

export type QCMQuestion = $Exact<{|
  ...QuestionCommon,
  type: 'qcm',
  content: {
    choices: Array<Choice>,
    answers: AcceptedAnswers
  }
|}>;

export type QCMGraphicQuestion = $Exact<{|
  ...QuestionCommon,
  type: 'qcmGraphic',
  content: {
    answers: AcceptedAnswers
  }
|}>;

export type SliderQuestion = {|
  ...QuestionCommon,
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
  ...QuestionCommon,
  type: 'basic',
  content: {
    maxTypos?: ?number,
    answers: AcceptedAnswers
  }
|};

export type TemplateQuestion = $Exact<{|
  ...QuestionCommon,
  type: 'template',
  content: {
    matchOrder: boolean,
    maxTypos?: ?number,
    choices: Array<Choice>,
    answers: AcceptedAnswers,
    template?: string
  }
|}>;

export type Question =
  | QCMQuestion
  | QCMGraphicQuestion
  | QCMDragQuestion
  | SliderQuestion
  | BasicQuestion
  | TemplateQuestion;

export type Meta = {|
  taggedNewUntil?: string,
  updatedAt: string,
  createdAt: string
|};

type Author = string;
type Subtitle = string;

export type Lesson = {|
  _id: string,
  description: string,
  mediaUrl?: string,
  mediaRef: string,
  downloadUrl?: string,
  mimeType: ResourceMimeType,
  poster: Url,
  posters: Array<Url>,
  ref: string,
  src: Array<Source>,
  subtitleRef?: string,
  subtitles: Array<Subtitle>,
  type: LessonType,
  videoId?: string
|};

export type Context = {|
  title?: string,
  description?: string,
  media: Media
|};

export type Slide = {|
  _id: string,
  klf: string,
  chapter_id: string,
  // $FlowFixMe union type  :(
  question: Question,
  position?: ?number,
  authors: Array<Author>,
  context?: Context,
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
