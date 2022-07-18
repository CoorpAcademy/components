// TODO use type from components
type TemplateContextValues = {
  brandTheme?: unknown;
  theme?: unknown; // TODO type Theme
  translations?: unknown; // TODO type Translations
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
  postProgression(skillRef: string, token: string): Promise<ProgressionFromAPI>;
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
