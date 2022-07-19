import {UISlide} from './slides';

// TODO use type from components
type TemplateContextValues = {
  brandTheme?: unknown;
  theme?: unknown; // TODO type Theme
  translations?: unknown; // TODO type Translations
};

export type SlideFromAPI = {
  question: {
    content: {
      choices: Record<string, unknown>[];
    };
  };
  klf: string;
  universalRef: string;
};

export type ProgressionFromAPI = {
  _id: string;
  state: {
    isCorrect: boolean;
    step: {
      current: number;
    };
    nextContent: {
      type: 'success' | 'slide';
      ref: 'successExitNode' | string;
    };
    pendingSlides: [];
  };
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

// -----------------------------------------------------------------------------
type SlideUIAnimations = 'unstack' | 'restack';
export type Slide = UISlide & {
  hidden?: boolean;
  position: number;
  animationType?: SlideUIAnimations;
  isCorrect?: boolean;
  endReview?: boolean;
  nextContent?: Omit<Slide, 'endReview' | 'hidden' | 'position' | 'nextContent'>;
};

export type SkillsState = Skill[];
export type SlidesState = {
  slideNumbers: number[];
  [key: number]: Slide; // TODO: renommer
};

export type TokenState = string | null;
export type NavigationState = Array<'skills' | 'onboarding' | 'slides'>;
export type ReviewStatusState = 'finished' | 'ongoing';

const ICON_VALUES = {
  right: 'right',
  wrong: 'wrong',
  'no-answer': 'no-answer'
} as const;

export type IconValue = keyof typeof ICON_VALUES;

export type StepItem = {
  current: boolean;
  icon: IconValue;
  value: string;
};

export type StepItemsState = {
  slideNumbers: number[];
  [key: number]: StepItem;
};

export type FinishedSlidesState = {
  slideNumbers: number[];
  [key: number]: true;
};

export type ProgressionState = {
  _id?: string;
  state: {
    isCorrect: boolean;
    nextContent: {
      ref: 'successExitNode' | string;
      type: 'success' | 'slide';
    };
    pendingSlides: string[];
    step: {
      current: number;
    };
  };
  // TO refactor: (slideNumber)
  // virtual field
  slideNumber?: number;
} | null; // TODO: ça ressemble beaucoup à ProgressionFromAPI et ça devrait l'être

export type DataState = {
  isFetching?: boolean;
  progression?: ProgressionState;
  skills: SkillsState;
  slides: SlidesState;
  token?: TokenState;
};

export type StoreState = {
  ui: {
    navigation: NavigationState;
    stepItems: StepItemsState;
    finishedSlides: FinishedSlidesState;
    reviewStatus: ReviewStatusState;
    // progression: UiProgression;
  };
  data: DataState;
};
// -----------------------------------------------------------------------------

export type WithRequired<T, K extends keyof T> = T & {
  // the "-" is a Mapping Modifier, removes optionality from a prop
  [P in K]-?: T[P];
};
