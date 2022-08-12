import {SlideIndexes} from '../common';
import {AnswerUI} from './slides';

// TODO use type from components
type TemplateContextValues = {
  brandTheme?: unknown;
  theme?: unknown; // TODO type Theme
  translations?: unknown; // TODO type Translations
};

// TODO: EDIT_CHOICES -> specify typing
export type ChoiceFromAPI = {
  _id: string;
  id?: string;
  value?: string;
  name?: string;
  type?: 'text' | 'select';
  label?: string;
  items: {text: string; value: string; _id: string}[];
  media?: unknown;
};

type BaseContent = {
  media?: unknown;
  choices: ChoiceFromAPI[];
};

type Question = {
  header?: string;
  content: BaseContent;
  explanation?: string;
};

export type QcmQuestion = Question & {
  type: 'qcm';
};

export type QcmGraphicQuestion = Question & {
  type: 'qcmGraphic';
};

export type QcmDragQuestion = Question & {
  type: 'qcmDrag';
};

export type BasicQuestion = Omit<Question, 'content'> & {
  type: 'basic';
  content: {
    media?: unknown;
    label?: string;
    placeholder?: string;
    id: string;
  };
};

export type SliderQuestion = Omit<Question, 'content'> & {
  content: {
    media?: unknown;
    unitLabel: string;
    min: number;
    max: number;
    step?: number;
  };
  type: 'slider';
};

export type TemplateQuestion = Omit<Question, 'content'> & {
  content: BaseContent & {
    template: string;
  };
  type: 'template';
};

export type SlideFromAPI = {
  question:
    | QcmQuestion
    | QcmGraphicQuestion
    | QcmDragQuestion
    | BasicQuestion
    | SliderQuestion
    | TemplateQuestion;
  klf: string;
  universalRef: string;
  tips?: string;
  clue?: string;
  hasClue?: boolean;
  id: string;
};

type ProgressionAnswerItem = {
  isCorrect: boolean;
  slideRef: string;
  answer: string[];
};

export type ProgressionState = {
  allAnswers: ProgressionAnswerItem[];
  content?: {
    ref: string;
    type: string;
  };
  isCorrect: boolean;
  nextContent: {
    type: 'success' | 'slide';
    ref: 'successExitNode' | string;
  };
  pendingSlides: string[];
  slides: string[];
  step: {
    current: number;
  };
};

export type ProgressionFromAPI = {
  _id: string;
  state: ProgressionState;
};

export type Skill = {
  skillRef: string;
  slidesToReview: number;
  custom: boolean;
  name: string;
};

export type Services = {
  fetchSkills(token: string): Promise<Skill[]>;
  fetchSlide(slideRef: string, token: string): Promise<SlideFromAPI | void>;
  postProgression(skillRef: string, token: string): Promise<ProgressionFromAPI>;
};

export type Options = {
  services: Services;
};

export type AppOptions = {
  token: string;
  theme?: unknown;
  translations?: unknown;
  templateContext?: TemplateContextValues;
  skillRef?: string;
  services: Services;
};

export type JWT = {
  exp: number;
  iat: number;
  grants: unknown;
  iss: string;
  user: string;
  usage: string;
  host: string;
};

type SlideUIAnimations = 'unstack' | 'restack';

export type NextUISlide = {
  questionText?: string;
  answerUI?: AnswerUI;
  hidden?: boolean;
  position?: number;
  animationType?: SlideUIAnimations;
  isCorrect?: boolean;
  endReview?: boolean;
};

export type UISlide = {
  questionText?: string;
  answerUI?: AnswerUI;
  hidden?: boolean;
  position: number;
  animationType?: SlideUIAnimations;
  isCorrect?: boolean;
  endReview?: boolean;
  nextContent?: NextUISlide;
};

export type FinishedSlides = {
  [key in SlideIndexes]?: true;
};

export type WithRequired<T, K extends keyof T> = T & {
  // the "-" is a Mapping Modifier, removes optionality from a prop
  [P in K]-?: T[P];
};
