import {Instruction, ChapterRule} from './rule-engine/types';

export interface Step {
  current: number,
  total?: number
}

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

export interface ContentSlide {
  type: SLIDE,
  ref: string
};

export interface ContentInfo {
  nbSlides: number
};

export interface GenericContent {
  ref: string,
  type: ContentType,
  version?: string
};

export interface ResourceContent {
  ref: string,
  type: LessonType,
  version?: string
};

export type Content = GenericContent | ResourceContent;

export interface ViewedResource {
  type: Content['type'],
  ref: string,
  resources: Array<string>
};

export interface AnswerRecord {
  slideRef: string,
  answer: Answer,
  isCorrect: boolean | void
};

export type Variable = string | boolean | number;

export interface Variables {
  [key: string]: Variable
};

export interface GenericState  {
  content?: Content,
  nextContent?: Content,
  chapters?: Array<string>,
  lives: number,
  livesDisabled?: boolean,
  isCorrect: boolean | void,
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

export interface State extends GenericState {
  nextContent: Content,
  content?: Content
};


type GenericAction = {
  createdAt?: string
};

export interface InitAction extends GenericAction {
  type: 'init'
};

export interface AnswerAction extends GenericAction {
  type: 'answer',
  payload: {
    content: Content,
    nextContent: Content,
    answer: Answer,
    isCorrect: boolean | void,
    godMode: boolean | void,
    instructions?: Array<Instruction> | null
  }
};

export interface AskClueAction extends GenericAction{
  type: 'clue',
  payload: {
    content: ContentSlide
  }
};

export interface ExtraLifeAcceptedAction extends GenericAction{
  type: 'extraLifeAccepted',
  payload: {
    content: Content,
    nextContent: Content,
    instructions: Array<Instruction> | null
  }
};

export interface ExtraLifeRefusedAction extends GenericAction {
  type: 'extraLifeRefused',
  payload: {
    content: Content,
    nextContent: Content
  }
};

export interface ContentResourceViewedAction extends GenericAction{
  type: 'resource',
  payload: {
    resource: ResourceContent,
    content: Content
  }
};

export interface MoveAction extends GenericAction{
  type: 'move',
  payload: {
    nextContent: Content,
    instructions?: Array<Instruction> | null
  }
};

export type Action =
  | InitAction
  | AnswerAction
  | AskClueAction
  | ExtraLifeAcceptedAction
  | ExtraLifeRefusedAction
  | ContentResourceViewedAction
  | MoveAction;

export interface Engine {
  ref: string,
  version: string
};

export interface Config {
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

export interface EngineConfig {
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
};

export type ProgressionId = string;

export interface Progression {
  _id?: ProgressionId,
  content: GenericContent,
  state?: State,
  engine: Engine,
  engineOptions: EngineConfig,
  actions?: Array<Action>
};

export interface PartialCorrection {
  answer: string | void,
  isCorrect: boolean | void
};

export interface AnswerCorrection {
  isCorrect: boolean,
  corrections: Array<PartialCorrection>
};

export interface Source {
  _id: string,
  mimeType: ResourceMimeType,
  url: Url
};

export type MediaType = 'img' | 'video' | 'pdf';

export interface Media {
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

export interface Choice {
  _id: string,
  value?: string,
  name?: string,
  type?: 'text' | 'select',
  label: string,
  items?: Array<{
    text: string,
    value: string,
    _id: string
  }>,
  media?: Media
};

export type QuestionType = 'qcm' | 'qcmGraphic' | 'slider' | 'qcmDrag' | 'basic' | 'template';

export interface QuestionCommon {
  explanation?: string,
  header?: string,
  medias?: Array<Media>
};

export interface QCMQuestion extends QuestionCommon {
  type: 'qcm',
  content: {
    choices: Array<Choice>,
    answers: AcceptedAnswers
  }
};

export interface QCMGraphicQuestion extends QuestionCommon {
  type: 'qcmGraphic',
  content: {
    answers: AcceptedAnswers
  }
};

export interface SliderQuestion extends QuestionCommon {
  type: 'slider',
  content: {
    answers: AcceptedAnswers
  }
};

export interface QCMDragQuestion extends QuestionCommon {
  type: 'qcmDrag',
  content: {
    matchOrder: boolean,
    answers: AcceptedAnswers
  }
};

export interface BasicQuestion extends QuestionCommon {
  type: 'basic',
  content: {
    maxTypos?: number | void,
    answers: AcceptedAnswers
  }
};

export interface TemplateQuestion {
  type: 'template',
  content: {
    matchOrder: boolean,
    maxTypos?: number | void,
    choices: Array<Choice>,
    answers: AcceptedAnswers,
    template?: string
  }
};

export type Question =
  | QCMQuestion
  | QCMGraphicQuestion
  | QCMDragQuestion
  | SliderQuestion
  | BasicQuestion
  | TemplateQuestion;

export interface Meta {
  taggedNewUntil?: string,
  updatedAt: string,
  createdAt: string
};

type Author = string;
type Subtitle = string;

export interface Lesson {
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
};

export interface Context {
  title?: string,
  description?: string,
  media: Media
};

export interface Slide {
  _id: string,
  klf: string,
  chapter_id: string,
  question: Question,
  position?: number | void,
  authors: Array<Author>,
  context?: Context,
  clue?: string,
  meta: Meta,
  tips: string,
  lessons: Array<Lesson>
};

export interface ChapterContent {
  ref: string,
  slides: Array<Slide>,
  rules: Array<ChapterRule> | null
};

export type AvailableContent = Array<ChapterContent>;
