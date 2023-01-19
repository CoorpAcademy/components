import type {Services, VideoMedia, VideoPropsForPlayer} from '@coorpacademy/review-services';

export type WithRequired<T, K extends keyof T> = T & {
  // the "-" is a Mapping Modifier, removes optionality from a prop
  [P in K]-?: T[P];
};

export interface Translate {
  (key: string, data?: Record<string, string>): string;
}

export type ViewName = 'slides' | 'loader';

export type Skin = {
  common: {
    primary: string;
  };
};

export type ConnectedOptions = {
  translate: Translate;
  onQuitClick: () => void;
  skin: Skin;
};

export type AppOptions = ConnectedOptions & {
  token: string;
  skillRef?: string;
  services?: Services;
  callbackOnViewChanged?: (viewName: ViewName) => void;
  appendVideoOptions: (media: VideoMedia) => Promise<VideoPropsForPlayer>;
};

export type ThunkOptions = {
  callbackOnViewChanged?: AppOptions['callbackOnViewChanged'];
  services: Services;
  appendVideoOptions: (media: VideoMedia) => Promise<VideoPropsForPlayer>;
};

export type Options = {
  services: Services;
};
