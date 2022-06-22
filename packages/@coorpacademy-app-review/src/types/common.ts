import {Slide} from './slides';

export type AppOptions = {
  token: string;
  theme?: unknown;
  translations?: unknown;
  slide?: Slide;
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
