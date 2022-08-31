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

type BaseQuestion = {
  header?: string;
  content: BaseContent;
  explanation?: string;
};

export type QcmQuestion = BaseQuestion & {
  type: 'qcm';
};

export type QcmGraphicQuestion = BaseQuestion & {
  type: 'qcmGraphic';
};

export type QcmDragQuestion = BaseQuestion & {
  type: 'qcmDrag';
};

export type BasicQuestion = Omit<BaseQuestion, 'content'> & {
  type: 'basic';
  content: {
    media?: unknown;
    label?: string;
    placeholder?: string;
    id: string;
  };
};

export type SliderQuestion = Omit<BaseQuestion, 'content'> & {
  content: {
    media?: unknown;
    unitLabel: string;
    min: number;
    max: number;
    step?: number;
  };
  type: 'slider';
};

export type TemplateQuestion = Omit<BaseQuestion, 'content'> & {
  content: BaseContent & {
    template: string;
  };
  type: 'template';
};

export type Question =
  | QcmQuestion
  | QcmGraphicQuestion
  | QcmDragQuestion
  | BasicQuestion
  | SliderQuestion
  | TemplateQuestion;

export type SlideFromAPI = {
  question: Question;
  klf: string;
  universalRef: string;
  tips?: string;
  clue?: string;
  hasClue?: boolean;
  id: string;
  parentContentTitle: {
    title: string;
    type: 'chapter' | 'course';
  };
};

export type ProgressionAnswerItem = {
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
  stars: number;
};

export type ReviewContent = {
  type: 'skill';
  ref: string;
};

export type ReviewEngine = {
  ref: 'review';
};

export type ProgressionFromAPI = {
  _id: string;
  content: ReviewContent;
  engine: ReviewEngine;
  state: ProgressionState;
};

export type CorrectedChoice = {
  answer: string;
  isCorrect: boolean;
};

export type CorrectionFromAPI = {
  correctAnswer: string[];
  corrections: CorrectedChoice[];
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
  postAnswer(
    progression: ProgressionFromAPI,
    token: string,
    answer: string[]
  ): Promise<ProgressionFromAPI>;
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

export type WithRequired<T, K extends keyof T> = T & {
  // the "-" is a Mapping Modifier, removes optionality from a prop
  [P in K]-?: T[P];
};
