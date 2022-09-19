export type Operator = <T>(expectedValues: Array<T>, value: T) => boolean;

export type OPERATORS = {
  BETWEEN: Operator;
  EQUALS: Operator;
  GT: Operator;
  GTE: Operator;
  IN: Operator;
  LT: Operator;
  LTE: Operator;
  NOT_BETWEEN: Operator;
  NOT_EQUALS: Operator;
  NOT_IN: Operator;
};

export type OperatorKeys = keyof OPERATORS;

export type Target =
  | {
      scope: 'variable';
      field: 'lives' | 'stars' | string;
    }
  | {
      scope: 'slide';
      ref: string;
      field: 'isCorrect' | 'answer';
    };

export type Condition = {
  target: Target;
  operator: OperatorKeys;
  values: Array<number | boolean | string | Array<string>>;
};

export type Instruction = {
  field: string;
  type: 'add' | 'set';
  value: number | boolean | string;
};

export type ChapterRule = {
  source: Content;
  destination: Content;
  instructions: Array<Instruction>;
  conditions: Array<Condition>;
  priority: number;
  ref?: string;
};

export type Variables = {
  lives: number;
  stars: number;
  variables: Record<string, string | boolean | number>;
};

export type Step = {
  current: number;
  total?: number;
};

export type VideoMimeType =
  | 'application/kontiki'
  | 'application/jwplayer'
  | 'application/youtube'
  | 'application/omniPlayer'
  | 'application/vimeo';

export type ResourceMimeType =
  | 'video/mp4'
  | 'image/jpeg'
  | 'image/png'
  | 'application/pdf'
  | VideoMimeType;

export type Answer = Array<string>;

export type MICROLEARNING = 'microlearning';
export type LEARNER = 'learner';
export type EXTERNAL = 'external';

export type Engines = MICROLEARNING | LEARNER | EXTERNAL;

export type CHAPTER = 'chapter';
export type DISCIPLINE = 'discipline';
export type LEVEL = 'level';
export type SLIDE = 'slide';
export type NODE = 'node';
export type FAILURE = 'failure';
export type SUCCESS = 'success';
export type IMG = 'img';
export type VIDEO = 'video';
export type AUDIO = 'audio';
export type PDF = 'pdf';
export type SCORM = 'scorm';
export type PODCAST = 'podcast';
export type ARTICLE = 'article';
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
  | VIDEO
  | SCORM
  | PODCAST
  | ARTICLE;

export type LessonType = VIDEO | PDF | IMG | AUDIO;

export type Url = string;

export type ContentSlide = {
  type: SLIDE;
  ref: string;
};

export type ContentInfo = {
  nbSlides: number;
};

export type GenericContent = {
  ref: string;
  type: ContentType;
  version?: string;
};

export type ResourceContent = {
  ref: string;
  type: LessonType;
  version?: string;
};

export type Content = GenericContent | ResourceContent;

export type ViewedResource = {
  type: Pick<Content, 'type'>;
  ref: string;
  resources: Array<string>;
};

export type AnswerRecord = {
  slideRef: string;
  answer: Answer;
  isCorrect: boolean | null | undefined;
};

// export type Variable = string | boolean | number;
// export type Variables = {
//   [key: string]: Variable;
// };

export type GenericState = {
  content?: Content;
  nextContent?: Content;
  chapters?: Array<string>;
  lives: number;
  livesDisabled?: boolean;
  isCorrect: boolean | null | undefined;
  slides: Array<string>;
  requestedClues: Array<string>;
  viewedResources: Array<ViewedResource>;
  stars: number;
  step: Step;
  remainingLifeRequests: number;
  hasViewedAResourceAtThisStep: boolean;
  allAnswers: Array<AnswerRecord>;
  variables: Variables;
};

export type State = {
  nextContent: Content;
  content?: Content;
} & GenericState;

type GenericAction = {
  createdAt?: string;
};

export type InitAction = GenericAction & {
  type: 'init';
};

export type AnswerAction = GenericAction & {
  type: 'answer';
  payload: {
    content: Content;
    nextContent: Content;
    answer: Answer;
    isCorrect: boolean | null | undefined;
    godMode: boolean | null | undefined;
    instructions?: Array<Instruction> | null;
  };
};

export type AskClueAction = GenericAction & {
  type: 'clue';
  payload: {
    content: ContentSlide;
  };
};

export type ExtraLifeAcceptedAction = GenericAction & {
  type: 'extraLifeAccepted';
  payload: {
    content: Content;
    nextContent: Content;
    instructions: Array<Instruction> | null;
  };
};

export type ExtraLifeRefusedAction = GenericAction & {
  type: 'extraLifeRefused';
  payload: {
    content: Content;
    nextContent: Content;
  };
};

export type ContentResourceViewedAction = GenericAction & {
  type: 'resource';
  payload: {
    resource: ResourceContent;
    content: Content;
  };
};

export type MoveAction = GenericAction & {
  type: 'move';
  payload: {
    nextContent: Content;
    instructions?: Array<Instruction> | null;
  };
};

export type Action =
  | InitAction
  | AnswerAction
  | AskClueAction
  | ExtraLifeAcceptedAction
  | ExtraLifeRefusedAction
  | ContentResourceViewedAction
  | MoveAction;

export type Engine = {
  ref: string;
  version: string;
};

export type Config = {
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
};

export type EngineConfig = {
  livesDisabled?: boolean;
  lives?: number;
  maxTypos?: number;
  version: string;
  shuffleChoices: boolean;
  slidesToComplete?: number;
  answerBoundaryLimit?: number;
  starsPerAskingClue?: number;
  starsPerCorrectAnswer?: number;
  starsPerResourceViewed?: number;
  remainingLifeRequests?: number;
};

export type ProgressionId = string;
export type Progression = {
  _id?: ProgressionId;
  content: GenericContent;
  state?: State;
  engine: Engine;
  engineOptions: EngineConfig;
  actions?: Array<Action>;
};

export type PartialCorrection = {
  answer: string | void;
  isCorrect: boolean | null | undefined;
};

export type AnswerCorrection = {
  isCorrect: boolean;
  corrections: Array<PartialCorrection>;
};

export type Source = {
  _id?: string;
  mimeType?: ResourceMimeType;
  url: Url;
  videoId?: string;
};

export type MediaType = 'img' | 'video' | 'pdf';
export type Media = {
  type?: MediaType;
  description?: string;
  mimeType?: ResourceMimeType;
  _id?: string;
  mediaUrl?: Url;
  url?: Url;
  subtitles?: Array<string>;
  posters?: Array<Url>;
  src?: Array<Source>;
};

export type AcceptedAnswers = Array<Answer>;

export type ChoiceItem = {
  text: string;
  selected: boolean;
  _id: string;
};

export type Choice = {
  _id: string;
  value?: string;
  name?: string;
  type?: 'text' | 'select';
  label?: string;
  items?: Array<ChoiceItem>;
  media?: Media;
  onPress?: Function;
  selected?: boolean;
};

export type QuestionType = 'qcm' | 'qcmGraphic' | 'slider' | 'qcmDrag' | 'basic' | 'template';

export type QuestionCommon = {
  explanation?: string;
  header?: string;
  medias?: Array<Media>;
};

export interface QCMQuestion extends QuestionCommon {
  type: 'qcm';
  content: {
    choices: Array<Choice>;
    answers: AcceptedAnswers;
  };
}
export interface QCMGraphicQuestion extends QuestionCommon {
  type: 'qcmGraphic';
  content: {
    answers: AcceptedAnswers;
  };
}
export type SliderQuestion = QuestionCommon & {
  type: 'slider';
  content: {
    answers: AcceptedAnswers;
  };
};

export interface QCMDragQuestion extends QuestionCommon {
  type: 'qcmDrag';
  content: {
    matchOrder: boolean;
    answers: AcceptedAnswers;
  };
}
export type BasicQuestion = QuestionCommon & {
  type: 'basic';
  content: {
    maxTypos?: number | null | undefined;
    answers: AcceptedAnswers;
  };
};

export interface TemplateQuestion extends QuestionCommon {
  type: 'template';
  content: {
    matchOrder: boolean;
    maxTypos?: number | null | undefined;
    choices: Array<Choice>;
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

export type Meta = {
  taggedNewUntil?: string;
  updatedAt: string;
  createdAt: string;
};

type Author = string;
type Subtitle = string;

export type Lesson = {
  _id: string;
  description: string;
  mediaUrl?: string;
  mediaRef: string;
  downloadUrl?: string;
  mimeType: ResourceMimeType;
  poster: Url;
  posters: Array<Url>;
  ref: string;
  src: Array<Source>;
  subtitles: Array<Subtitle>;
  type: LessonType;
  videoId?: string;
};

export type Context = {
  title?: string;
  description?: string;
  media: Media;
};

export type Slide = {
  _id: string;
  klf: string;
  chapter_id: string;
  // @ts-ignore union type  :(
  question: Question;
  position?: number | null | undefined;
  authors: Array<Author>;
  context?: Context;
  clue?: string;
  meta: Meta;
  tips: string;
  lessons: Array<Lesson>;
};

export type ChapterContent = {
  ref: string;
  slides: Array<Slide>;
  rules: Array<ChapterRule> | null;
};

export type AvailableContent = Array<ChapterContent>;
