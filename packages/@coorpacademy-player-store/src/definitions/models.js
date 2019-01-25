// @flow strict

import type {
  FAILURE,
  SUCCESS,
  Answer,
  Content,
  ContentInfo,
  ContentType,
  Engines,
  PartialCorrection
} from '@coorpacademy/progression-engine';

type Url = string;
type AspectRatio = '16:9' | '4:3';
type ResourceMimeType = 'video/mp4' | 'application/vimeo';
type ResourceType = 'video' | 'pdf';

type JwPlayerOptions = {|
  customProps: {
    aspectratio: AspectRatio,
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
|};

type Source = {|
  _id: string,
  mimeType: ResourceMimeType,
  url: Url
|};

type Media = {|
  type: string,
  description: string,
  mimeType: ResourceMimeType,
  _id: string,
  url?: Url,
  mediaUrl: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Source>
|};

type Resource = {|
  _id: string,
  ref: string,
  type: ResourceType,
  mimeType: ResourceMimeType,
  mediaUrl: Url,
  src?: Array<Source>,
  description?: string,
  poster?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  jwpOptions?: JwPlayerOptions
|};

type Lesson = {|
  _id: string,
  ref: string,
  type: string,
  poster: Url,
  description: string,
  mimeType: ResourceMimeType,
  videoId: string,
  subtitles: Array<string>,
  posters: Array<Url>,
  src: Array<Source>
|};

type Clue = string;

type Meta = {|
  updatedAt: string,
  createdAt: string
|};

type Recommendation = {|
  view: string,
  image: Url,
  time: string,
  type: string,
  title: string,
  author: string,
  cta: string,
  href: string
|};

type ExitNodeRef = 'successExitNode' | 'failureExitNode';
type ExitNodeType = SUCCESS | FAILURE;

type ExitNode = {|
  ref: ExitNodeRef,
  type: ExitNodeType,
  meta: Meta,
  title: string,
  description: string,
  media: Media
|};

type Poster = {|
  type?: string,
  mimeType?: ResourceMimeType,
  mediaUrl?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Source>
|};

type Chapter = {|
  _id: string,
  __v: number,
  universalRef: string,
  name: string,
  stars: number,
  freeRun: boolean,
  meta: Meta,
  poster: Poster,
  info?: ContentInfo,
  bestScore?: number,
  isConditional: boolean,
  time: number,
  version: string
|};

type Stats = {|
  userTriesCoun: number,
  userDoneCoun: number
|};

type Level = {|
  _id: string,
  universalRef?: string,
  disciplineRef?: string,
  ref: string,
  name: string,
  level: string,
  meta: Meta,
  poster: Poster,
  chapterIds: Array<string>,
  levelTranslation?: string,
  mediaUrl?: Url,
  timeAlloted?: number,
  eligibleBattle?: boolean,
  creditsToAccess?: number,
  infiniteLives?: boolean,
  isConditional?: boolean,
  acquiredSkills?: Array<string>,
  data: Array<?string>,
  stats: Stats,
  version: string,
  external_refs: Array<?string>,
  info?: ContentInfo,
  bestScore?: number
|};

type UserAnswer = {|
  answer: Answer,
  content: Content
|};

type Correction = {
  correctAnswer: Array<Answer>,
  corrections: Array<PartialCorrection>
};

export const CONTENT_TYPE: {[string]: ContentType} = {
  CHAPTER: 'chapter',
  LEVEL: 'level',
  SLIDE: 'slide'
};

export const ENGINES: {[string]: Engines} = {
  MICROLEARNING: 'microlearning',
  LEARNER: 'learner'
};

export type {
  Chapter,
  Clue,
  Correction,
  ExitNode,
  ExitNodeRef,
  Lesson,
  Level,
  Media,
  Recommendation,
  Resource,
  UserAnswer
};
