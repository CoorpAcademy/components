import {Media} from '@coorpacademy/components/es/molecule/questions/types';
import type {Services, VideoMedia} from '@coorpacademy/review-services';

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

export type VideoPropsForPlayer = {
  type: string;
  src: Media[];
};

export type MediaPropsForPlayer = {
  type: 'img' | 'audio';
  url: string;
  _id: string;
  mimeType: Media['mimeType'];
};

export type ConnectedOptions = {
  translate: Translate;
  onQuitClick: () => void;
  skin: Skin;
  backgroundImage?: number; // in this case, the image source is a number : https://reactnative.dev/docs/image#imagesource
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
