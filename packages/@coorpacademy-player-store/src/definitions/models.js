// @flow strict

import type {
  FAILURE,
  SUCCESS,
  Answer,
  Content,
  ContentInfo,
  ContentType,
  Engines,
  Media,
  PartialCorrection,
  ResourceMimeType,
  Source
} from '@coorpacademy/progression-engine';

type Url = string;
type AspectRatio = '16:9' | '4:3';
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

type Lives = {|
  hide: boolean | void,
  count: number | null
|};

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
  Level,
  Lives,
  Recommendation,
  Resource,
  UserAnswer
};
