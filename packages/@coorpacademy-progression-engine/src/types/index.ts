import {Instruction, ChapterRule} from '../rule-engine/types';
import {Content, ContentSlide, ResourceContent, GenericContent, LessonType} from './content';

export {Content, ContentSlide, ResourceContent, GenericContent, LessonType};

export interface Step {
  current: number;
  total?: number;
}

export type ResourceMimeType =
  | 'video/mp4'
  | 'image/jpeg'
  | 'image/png'
  | 'application/pdf'
  | 'application/jwplayer'
  | 'application/vimeo';

export type Answer = string[];

export type EngineRef = 'microlearning' | 'learner';

export type Url = string;

export interface ContentInfo {
  nbSlides: number;
}
export interface ViewedResource {
  type: Content['type'];
  ref: string;
  resources: string[];
}

export interface AnswerRecord {
  slideRef: string;
  answer: Answer;
  isCorrect: boolean | null;
}

export type Variable = string | boolean | number;

export interface Variables {
  [key: string]: Variable;
}

export interface GenericState {
  content?: Content;
  nextContent?: Content;
  chapters?: string[];
  lives: number;
  livesDisabled?: boolean;
  isCorrect: boolean;
  slides: string[];
  requestedClues: string[];
  viewedResources: ViewedResource[];
  stars: number;
  step: Step;
  remainingLifeRequests: number;
  hasViewedAResourceAtThisStep: boolean;
  allAnswers: AnswerRecord[];
  variables: Variables;
}

export interface State extends GenericState {
  nextContent: Content;
  content?: Content;
}

interface GenericAction {
  createdAt?: string;
}

export interface InitAction extends GenericAction {
  type: 'init';
}

export interface AnswerAction extends GenericAction {
  type: 'answer';
  payload: {
    content: Content;
    nextContent: Content;
    answer: Answer;
    isCorrect: boolean | null;
    godMode?: boolean;
    instructions?: Instruction[] | null;
  };
}

export interface AskClueAction extends GenericAction {
  type: 'clue';
  payload: {
    content: ContentSlide;
  };
}

export interface ExtraLifeAcceptedAction extends GenericAction {
  type: 'extraLifeAccepted';
  payload: {
    content: Content;
    nextContent: Content;
    instructions: Instruction[] | null;
  };
}

export interface ExtraLifeRefusedAction extends GenericAction {
  type: 'extraLifeRefused';
  payload: {
    content: Content;
    nextContent: Content;
  };
}

export interface ContentResourceViewedAction extends GenericAction {
  type: 'resource';
  payload: {
    resource: ResourceContent;
    content: Content;
  };
}

export interface MoveAction extends GenericAction {
  type: 'move';
  payload: {
    nextContent: Content;
    instructions?: Instruction[] | null;
  };
}

export type ActionType =
  | 'clue'
  | 'move'
  | 'resource'
  | 'answer'
  | 'extraLifeAccepted'
  | 'extraLifeRefused';

export type Action =
  | InitAction
  | AnswerAction
  | AskClueAction
  | ExtraLifeAcceptedAction
  | ExtraLifeRefusedAction
  | ContentResourceViewedAction
  | MoveAction;

export interface Engine {
  ref: EngineRef;
  version: string;
}

export interface Config {
  version: string;
  livesDisabled: boolean;
  lives: number;
  maxTypos: number;
  slidesToComplete: number;
  answerBoundaryLimit: number;
  starsPerAskingClue: number;
  starsPerCorrectAnswer: number;
  starsPerResourceViewed: number;
  remainingLifeRequests: number;
}

export interface EngineConfig {
  livesDisabled?: boolean;
  lives?: number;
  maxTypos?: number;
  version: string;
  slidesToComplete?: number;
  answerBoundaryLimit?: number;
  starsPerAskingClue?: number;
  starsPerCorrectAnswer?: number;
  starsPerResourceViewed?: number;
  remainingLifeRequests?: number;
}

export type ProgressionId = string;

export interface Progression {
  _id?: ProgressionId;
  content: GenericContent;
  state?: State;
  engine: Engine;
  engineOptions: EngineConfig;
  actions?: Action[];
}

export interface PartialCorrection {
  answer: string | void;
  isCorrect: boolean | null;
}

export interface AnswerCorrection {
  isCorrect: boolean;
  corrections: PartialCorrection[];
}

export interface Source {
  _id: string;
  mimeType: ResourceMimeType;
  url: Url;
}

export type MediaType = 'img' | 'video' | 'pdf';

export interface Media {
  type?: MediaType;
  description?: string;
  mimeType?: ResourceMimeType;
  _id?: string;
  mediaUrl?: Url;
  url?: Url;
  subtitles?: string[];
  posters?: Url[];
  src?: Source[];
}

export type AcceptedAnswers = Answer[];

export interface Choice {
  _id: string;
  value?: string;
  name?: string;
  type?: 'text' | 'select';
  label: string;
  items?: {
    text: string;
    value: string;
    _id: string;
  }[];
  media?: Media;
}

export type QuestionType = 'qcm' | 'qcmGraphic' | 'slider' | 'qcmDrag' | 'basic' | 'template';

export interface QuestionCommon {
  explanation?: string;
  header?: string;
  medias?: Media[];
}

export interface QCMQuestion extends QuestionCommon {
  type: 'qcm';
  content: {
    choices: Choice[];
    answers: AcceptedAnswers;
  };
}

export interface QCMGraphicQuestion extends QuestionCommon {
  type: 'qcmGraphic';
  content: {
    answers: AcceptedAnswers;
  };
}

export interface SliderQuestion extends QuestionCommon {
  type: 'slider';
  content: {
    answers: AcceptedAnswers;
  };
}

export interface QCMDragQuestion extends QuestionCommon {
  type: 'qcmDrag';
  content: {
    matchOrder: boolean;
    answers: AcceptedAnswers;
  };
}

export interface BasicQuestion extends QuestionCommon {
  type: 'basic';
  content: {
    maxTypos?: number | null;
    answers: AcceptedAnswers;
  };
}

export interface TemplateQuestion {
  type: 'template';
  content: {
    matchOrder: boolean;
    maxTypos?: number | null;
    choices: Choice[];
    answers: AcceptedAnswers;
    template?: string;
  };
}

export type Question =
  | QCMQuestion
  | QCMGraphicQuestion
  | QCMDragQuestion
  | SliderQuestion
  | BasicQuestion
  | TemplateQuestion;

export interface Meta {
  taggedNewUntil?: string;
  updatedAt: string;
  createdAt: string;
}

type Author = string;
type Subtitle = string;

export interface Lesson {
  _id: string;
  description: string;
  mediaUrl?: string;
  mediaRef: string;
  downloadUrl?: string;
  mimeType: ResourceMimeType;
  poster: Url;
  posters: Url[];
  ref: string;
  src: Source[];
  subtitleRef?: string;
  subtitles: Subtitle[];
  type: LessonType;
  videoId?: string;
}

export interface Context {
  title?: string;
  description?: string;
  media: Media;
}

export interface Slide {
  _id: string;
  klf: string;
  chapter_id: string;
  question: Question;
  position?: number;
  authors: Author[];
  context?: Context;
  clue?: string;
  meta: Meta;
  tips: string;
  lessons: Lesson[];
}

export interface ChapterContent {
  ref: string;
  slides: Slide[];
  rules: ChapterRule[] | null;
}

export type AvailableContent = ChapterContent[];
