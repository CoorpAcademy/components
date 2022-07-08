// TODO use type from components
type TemplateContextValues = {
  brandTheme?: unknown;
  theme?: unknown; // TODO type Theme
  translations?: unknown; // TODO type Translations
};

export type AppOptions = {
  token: string;
  theme?: unknown;
  translations?: unknown;
  templateContext: TemplateContextValues;
  skillRef?: string;
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
