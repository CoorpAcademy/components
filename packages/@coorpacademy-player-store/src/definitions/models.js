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
  Source,
} from '@coorpacademy/progression-engine';

export const CONTENT_TYPE: {[string]: ContentType} = {
  CHAPTER: 'chapter',
  LEVEL: 'level',
  SLIDE: 'slide',
};

export const ENGINES: {[string]: Engines} = {
  MICROLEARNING: 'microlearning',
  LEARNER: 'learner',
};

export const VIDEO_TRACK_KIND: {
  CAPTIONS: 'captions',
  THUMBNAILS: 'thumbnails',
} = {
  CAPTIONS: 'captions',
  THUMBNAILS: 'thumbnails',
};

export const VIDEO_TRACK_TYPE: {
  SRT: 'srt',
  VTT: 'vtt',
} = {
  SRT: 'srt',
  VTT: 'vtt',
};

type Url = string;
type AspectRatio = '16:9' | '4:3';
type ResourceType = 'video' | 'pdf' | 'audio';

// eslint-disable-next-line no-shadow
type MimeType =
  | 'video/mp4'
  | 'application/vimeo'
  | 'image/jpeg'
  | 'image/png'
  | 'application/pdf'
  | 'application/vimeo';

type JwPlayerOptions = {|
  customProps: {
    aspectratio: AspectRatio,
    autostart: boolean,
    skin: {
      name: string,
    },
    width: string,
  },
  file: Url,
  licenseKey: string,
  playerId: string,
  playerScript: Url,
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
  jwpOptions?: JwPlayerOptions,
|};

type Clue = string;

type Meta = {|
  updatedAt: string,
  createdAt: string,
  taggedNewUntil?: string,
|};

type Recommendation = {|
  view: string,
  image: Url,
  time: string,
  type: string,
  title: string,
  author: string,
  cta: string,
  href: string,
|};

type ExitNodeRef = 'successExitNode' | 'failureExitNode';
type ExitNodeType = SUCCESS | FAILURE;

type ExitNode = {|
  ref: ExitNodeRef,
  type: ExitNodeType,
  meta: Meta,
  title: string,
  description: string,
  media: Media,
|};

type Poster = {|
  type?: string,
  mimeType?: ResourceMimeType,
  mediaUrl?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Source>,
|};

type Chapter = {|
  _id: string,
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
  version: string,
|};

type Stats = {|
  userTriesCount: number,
  userDoneCount: number,
|};

type Level = {|
  _id: string,
  universalRef?: string,
  disciplineRef?: string,
  disciplineUniversalRef?: string,
  ref: string,
  name?: string,
  level: string,
  meta?: Meta,
  poster?: Poster,
  chapterIds: Array<string>,
  levelTranslation?: string,
  mediaUrl?: Url,
  timeAlloted?: number,
  eligibleBattle?: boolean,
  creditsToAccess?: number,
  infiniteLives?: boolean,
  shuffleChoices?: boolean,
  isConditional?: boolean,
  acquiredSkills?: Array<string>,
  data: Array<?string>,
  stats: Stats,
  version: string,
  external_refs: Array<?string>,
  info?: ContentInfo,
  bestScore?: number,
|};

type ExtentedMedia = {|
  type?: string,
  mimeType?: MimeType,
  mediaUrl?: Url,
  subtitles: Array<string>,
  posters: Array<string>,
  src: Array<string>,
|};
type Cover = {|
  description: string,
  media: ExtentedMedia,
|};

type Skill = string;
type Group = string;
type Condition = string;
type Partner = string;

type Stat = {|
  userTriesCount: number,
  userDoneCount: number,
|};

type Discipline = {|
  _id: string,
  ref: string,
  universalRef: string,
  name: string,
  partnershipType: string,
  deliverCoachStatus?: boolean,
  hidden: boolean,
  position: number,
  conditions: Array<Condition>,
  skills: Array<Skill>,
  groups: Array<Group>,
  stats: Stat,
  meta: Meta,
  partners: Array<Partner>,
  modules: Array<Level>,
  cover?: Cover,
  version: string,
|};

type UserAnswer = {|
  answer: Answer,
  content: Content,
|};

type Correction = {
  correctAnswer: Array<Answer>,
  corrections: Array<PartialCorrection>,
};

type Lives = {|
  hide: boolean,
  count: number,
|};

type ProgressionSteps = {|
  current: number,
  total: number,
|};

type VideoProvider = 'jwplayer' | 'kontiki' | 'vimeo' | 'omniPlayer' | 'youtube';

type VideoTrack = {|
  kind: $Values<typeof VIDEO_TRACK_KIND>,
  file: string,
  label?: string,
  default?: boolean,
|};

type VideoTrackType = $Values<typeof VIDEO_TRACK_TYPE>;

export type {
  Chapter,
  Clue,
  Correction,
  Discipline,
  ExitNode,
  ExitNodeRef,
  Level,
  Lives,
  ProgressionSteps,
  Recommendation,
  Resource,
  UserAnswer,
  VideoProvider,
  VideoTrack,
  VideoTrackType,
};
