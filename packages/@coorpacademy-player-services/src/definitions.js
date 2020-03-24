// @flow strict

import type {
  Answer,
  ChapterRule,
  Content,
  ContentType,
  FAILURE,
  PartialCorrection,
  Progression,
  Slide,
  SUCCESS,
  Question,
  Meta,
  Lesson,
  LessonType,
  ResourceMimeType
} from '@coorpacademy/progression-engine';

export const CONTENT_TYPE: {[string]: ContentType} = {
  CHAPTER: 'chapter',
  LEVEL: 'level',
  SLIDE: 'slide'
};

export const VIDEO_TRACK_KIND: {
  CAPTIONS: 'captions',
  THUMBNAILS: 'thumbnails'
} = {
  CAPTIONS: 'captions',
  THUMBNAILS: 'thumbnails'
};

export const VIDEO_TRACK_TYPE: {
  SRT: 'srt',
  VTT: 'vtt'
} = {
  SRT: 'srt',
  VTT: 'vtt'
};

type Url = string;
type AspectRatio = '16:9' | '4:3';

type SlideAPI = Slide;

type LessonAPI = Lesson;

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

type ResourceTypeAPI = LessonType;

type Source = {|
  _id: string,
  mimeType: ResourceMimeType,
  url: Url
|};

type ResourceAPI = {|
  _id: string,
  ref: string,
  type: ResourceTypeAPI,
  mimeType: ResourceMimeType,
  mediaUrl: Url,
  src?: Array<Source>,
  description?: string,
  poster?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  jwpOptions?: JwPlayerOptions
|};

type MediaViewedEvent = {|
  event: 'mediaViewed',
  mediaType: string,
  location: string
|};

type StartProgressionEvent = {|
  event: 'startProgression',
  startProgression: {
    type: string
  }
|};

type FinishProgressionEvent = {|
  event: 'finishProgression',
  progression?: {
    type: string,
    state: string,
    extraLife: number
  }
|};

type UpdateProgressionEvent = {|
  event: 'updateProgression',
  progression?: {
    type: string,
    state: string,
    extraLife: number
  }
|};

type DataEvent =
  | MediaViewedEvent
  | StartProgressionEvent
  | FinishProgressionEvent
  | UpdateProgressionEvent;

// eslint-disable-next-line no-shadow
type Window = {|
  dataLayer?: Array<DataEvent>
|};

type Media = {
  type?: string,
  description?: string,
  mimeType?: ResourceMimeType,
  _id?: string,
  mediaUrl?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Source>
};

type RecommendationAPI = {|
  view: string,
  image: Url,
  time: string,
  type: string,
  title: string,
  author: string,
  cta: string,
  href: string
|};

type Poster = {|
  type?: string,
  mimeType?: ResourceMimeType,
  mediaUrl?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Source>
|};

type Stats = {|
  userTriesCount: number,
  userDoneCount: number
|};

type LevelAPI = {|
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
  isConditional?: boolean,
  acquiredSkills?: Array<string>,
  data: Array<?string>,
  stats: Stats,
  version: string,
  external_refs: Array<?string>
|};

type ChapterAPI = {|
  _id: string,
  universalRef: string,
  name: string,
  stars: number,
  freeRun: boolean,
  meta: Meta,
  poster: Poster,
  isConditional: boolean,
  time: number,
  version: string
|};

type ClueAPI = string;

type UserAnswerAPI = {|
  answer: Answer,
  content: Content
|};

type PartialPayload = {|godMode: boolean, fastSlide: boolean|};
type CorrectionAPI = {
  correctAnswer: Array<Answer>,
  corrections: Array<PartialCorrection>
};

type ExitNodeRef = 'successExitNode' | 'failureExitNode' | string;
type ExitNodeType = SUCCESS | FAILURE;

type ExitNodeAPI = {|
  ref: ExitNodeRef,
  type: ExitNodeType,
  meta: Meta,
  title?: string,
  description?: string,
  media: Media
|};

export type RestrictedResourceType = 'level' | 'chapter' | 'slide';

type VideoProvider = 'jwplayer' | 'kontiki' | 'vimeo' | 'omniPlayer' | 'youtube';

type VideoTrack = {|
  kind: $Values<typeof VIDEO_TRACK_KIND>,
  file: string,
  label?: string,
  default?: boolean
|};

type VideoTrackType = $Values<typeof VIDEO_TRACK_TYPE>;

// Keep it no strict because we can extend it
type DataLayer = {
  getAllProgressions: () => Promise<Array<Progression>>,
  getChapterRulesByContent: (ref: string) => Array<ChapterRule>,
  getClue: (slideId: string) => Promise<ClueAPI | void>,
  getCorrectAnswer: (slideId: string) => Promise<Array<Answer>>,
  getExitNode: (ref: string) => Promise<ExitNodeAPI>,
  getNextChapter: (ref: string) => Promise<ChapterAPI | void>,
  getNextLevel: (ref: string) => Promise<LevelAPI | void>,
  findChapterById: (contentRef: string) => Promise<ChapterAPI>,
  findContent: (
    type: RestrictedResourceType,
    ref: string
  ) => Promise<ChapterAPI | LevelAPI | Slide | void>,
  findLevelById: (contentRef: string) => Promise<LevelAPI | void>,
  findProgressionById: (id: string) => Promise<Progression | void>,
  findRecommendations: (type: string, ref: string) => Promise<Array<RecommendationAPI>>,
  findSlideByChapter: (chapterRef: string) => Promise<Array<Slide>>,
  findSlideById: (id: string) => Promise<Slide>,
  saveProgression: Progression => Promise<Progression>,
  findVideoUriById: (id: string, provider: VideoProvider) => Promise<string>,
  findVideoTracksById: (id: string, type?: VideoTrackType) => Promise<Array<VideoTrack>>
};

export type {
  Answer,
  ChapterAPI,
  ClueAPI,
  CorrectionAPI,
  DataEvent,
  ExitNodeAPI,
  ExitNodeRef,
  Question,
  DataLayer,
  ChapterRule,
  FAILURE,
  Slide,
  SUCCESS,
  JwPlayerOptions,
  LevelAPI,
  SlideAPI,
  RecommendationAPI,
  ResourceAPI,
  ResourceMimeType,
  ResourceTypeAPI,
  Media,
  Url,
  LessonAPI,
  UserAnswerAPI,
  PartialPayload,
  Window,
  VideoProvider,
  VideoTrack,
  VideoTrackType
};
