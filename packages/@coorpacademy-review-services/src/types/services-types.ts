export type CorrectedChoice = {
  answer: string;
  isCorrect: boolean;
};

export type CorrectionFromAPI = {
  correctAnswer: string[];
  corrections: CorrectedChoice[];
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

export type Rank = {
  rank: number;
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

export type ChoiceItem = {
  text: string;
  value: string;
  _id: string;
};

export type MediaSrc = {
  _id: string;
  id?: string;
  mimeType: string;
  url: string;
};

export type VideoSrc = {
  _id: string;
  id?: string;
  mimeType: string;
  videoId: string;
  mediaRef: string;
};

type DefaultMedia = {
  type?: string;
  src?: Array<unknown>;
  posters?: Array<string>;
  subtitles?: Array<string>;
};

export type VideoMedia = DefaultMedia & {
  type: 'video';
  src: VideoSrc[];
};

export type ImageMedia = DefaultMedia & {
  type: 'img';
  src: MediaSrc[];
};

export type AudioMedia = DefaultMedia & {
  type: 'audio';
  src: MediaSrc[];
};

export type MediaFromAPI = DefaultMedia | VideoMedia | AudioMedia | ImageMedia;

export type ChoiceFromAPI = {
  _id: string;
  id?: string;
  value?: string;
  name?: string;
  type?: 'text' | 'select';
  label?: string;
  items: ChoiceItem[];
  media?: MediaFromAPI;
};

type BaseContent = {
  media?: MediaFromAPI;
  choices: ChoiceFromAPI[];
  answers: string[][];
};

type BaseQuestion = {
  header?: string;
  content: BaseContent;
  explanation?: string;
  medias: MediaFromAPI[];
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
    media?: MediaFromAPI;
    label?: string;
    placeholder?: string;
    id: string;
    answers: string[][];
  };
};

export type SliderQuestion = Omit<BaseQuestion, 'content'> & {
  content: {
    media?: MediaFromAPI;
    unitLabel: string;
    min: number;
    max: number;
    step?: number;
    answers: string[][];
  };
  type: 'slider';
};

export type TemplateQuestion = Omit<BaseQuestion, 'content'> & {
  content: BaseContent & {
    template: string;
    answers: string[][];
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
    type: string;
  };
};

export type SlideIdFromAPI = {
  slideId: string;
};

export type Services = {
  fetchSkill(skillRef: string, token: string): Promise<Skill>;
  fetchSkills(token: string): Promise<SkillToReview[]>;
  fetchSlide(slideRef: string, token: string): Promise<SlideFromAPI | void>;
  postProgression(skillRef: string, token: string): Promise<ProgressionFromAPI>;
  postSandboxProgression(slideRef: string, token: string): Promise<ProgressionFromAPI>;
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
  fetchSlidesToReviewBySkillRef(
    token: string,
    skillRef: string,
    limit: number
  ): Promise<SlideIdFromAPI[]>;
};

export type ReviewEngine = {
  ref: 'review';
  version: string;
};

export type ReviewContent = {
  type: 'skill';
  ref: string;
};

export type ProgressionFromAPI = {
  _id: string;
  content: ReviewContent;
  engine: ReviewEngine;
  state: ProgressionState;
};

export type SlideContent = {
  type: 'slide';
  ref: string;
};

export type SuccessNodeContent = {
  type: 'success';
  ref: 'successExitNode';
};

export type ProgressionAnswerItem = {
  isCorrect: boolean;
  slideRef: string;
  answer: string[];
};

export type ProgressionState = {
  allAnswers: ProgressionAnswerItem[];
  content?: SlideContent;
  isCorrect: boolean;
  lives?: number;
  livesDisabled?: boolean;
  hasViewedAResourceAtThisStep?: boolean;
  nextContent: SlideContent | SuccessNodeContent;
  pendingSlides: string[];
  remainingLifeRequests?: number;
  requestedClues?: [];
  variables?: {};
  viewedResources?: [];
  slides: string[];
  step: {
    current: number;
  };
  stars: number;
};

export type Config = {
  version: string;
  livesDisabled: boolean;
  lives: number;
  maxTypos: number;
  slidesToComplete: number;
  shuffleChoices?: boolean;
  answerBoundaryLimit: number;
  starsPerAskingClue: number;
  starsPerCorrectAnswer: number;
  starsPerResourceViewed: number;
  remainingLifeRequests: number;
};
