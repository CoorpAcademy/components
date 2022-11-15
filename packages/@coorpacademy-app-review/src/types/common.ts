export type ViewName = 'skills' | 'onboarding' | 'slides' | 'loader';

export interface Translate {
  (key: string, data?: Record<string, string>): string;
}

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
  _id: string;
  question: Question;
  klf: string;
  universalRef: string;
  tips?: string;
  clue?: string;
  hasClue?: boolean;
  parentContentTitle: {
    title: string;
    type: 'chapter' | 'course';
  };
};

export type SlideIdFromAPI = {
  slideId: string;
};

export type Rank = {
  rank: number;
};

export type ProgressionAnswerItem = {
  isCorrect: boolean;
  slideRef: string;
  answer: string[];
};

export type SlideContent = {
  type: 'slide';
  ref: string;
};

export type SuccessNodeContent = {
  type: 'success';
  ref: 'successExitNode';
};

export type ProgressionState = {
  allAnswers: ProgressionAnswerItem[];
  content?: SlideContent;
  isCorrect: boolean;
  nextContent: SlideContent | SuccessNodeContent;
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

export type SkillToReview = {
  skillRef: string;
  slidesToReview: number;
  custom: boolean;
  name: string;
};

export type Skill = {
  name: string;
  ref: string;
};

export type Services = {
  fetchSkill(skillRef: string, token: string): Promise<Skill>;
  fetchSkills(token: string): Promise<SkillToReview[]>;
  fetchSlide(slideRef: string, token: string): Promise<SlideFromAPI | void>;
  postProgression(skillRef: string, token: string): Promise<ProgressionFromAPI>;
  postAnswer(
    progression: ProgressionFromAPI,
    token: string,
    answer: string[]
  ): Promise<ProgressionFromAPI>;
  fetchCorrection(
    slideRef: string,
    token: string,
    progressionId: string,
    answer: string[]
  ): Promise<CorrectionFromAPI | void>;
  fetchRank(token: string): Promise<Rank>;
  fetchSlidesToReviewBySkillRef(token: string, skillRef: string): Promise<SlideIdFromAPI[]>;
};

export type Options = {
  services: Services;
};

export type ConnectedOptions = {
  translate: Translate;
  onQuitClick: () => void;
  skin: PrimarySkin;
};

export type AppOptions = ConnectedOptions & {
  token: string;
  skillRef?: string;
  services?: Services;
  callbackOnViewChanged?: (viewName: ViewName) => void;
};

export type ThunkOptions = {
  callbackOnViewChanged?: AppOptions['callbackOnViewChanged'];
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

export type PrimarySkin = {
  common: {
    primary: string;
  };
};
