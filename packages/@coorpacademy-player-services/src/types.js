// @flow
import type {Action, Content} from '@coorpacademy/progression-engine';

type Url = string;

type JwpOptions = {
  customProps: {
    aspectratio: '16:9' | '4:3',
    autostart: boolean,
    skin: {
      name: string
    },
    width: string
  },
  file: Url,
  licenseKey: string,
  playerId: string,
  playerScript: Url
};

type Resource = {
  ref: string,
  type: 'video' | 'pdf',
  mimeType: 'video/mp4' | 'application/vimeo',
  mediaUrl: Url,
  description: string,
  poster: Url,
  _id: string,
  subtitles: Array<string>,
  posters: Array<Url>,
  src: Array<Url>,
  jwpOptions: JwpOptions
};

type Engine = {
  ref: string,
  version: string
};

type EngineOptions = {
  livesDisabled?: boolean,
  lives?: number
};

type Progression = {
  content: Content,
  engine: Engine,
  engineOptions: EngineOptions,
  actions: Array<Action>
};

export type {Progression, Resource, Url};
