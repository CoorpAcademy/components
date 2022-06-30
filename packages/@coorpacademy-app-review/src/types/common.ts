import {Slide} from './slides';

// TODO use type from /components
type TemplateContext = {
  plop: string;
};

export type AppOptions = {
  token: string;
  theme?: unknown;
  translations?: unknown;
  slide?: Slide;
  templateContext: TemplateContext;
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
