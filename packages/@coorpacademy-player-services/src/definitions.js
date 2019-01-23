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
  SUCCESS
} from '@coorpacademy/progression-engine';

type Url = string;
type AspectRatio = '16:9' | '4:3';

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

type ResourceMimeType = 'video/mp4' | 'application/vimeo';
type ResourceType = 'video' | 'pdf';

type Source = {|
  _id: string,
  mimeType: ResourceMimeType,
  url: Url
|};

type ResourceAPI = {|
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

type DataEvent = MediaViewedEvent | StartProgressionEvent | FinishProgressionEvent;

// eslint-disable-next-line no-shadow
type Window = {|
  dataLayer?: Array<DataEvent>
|};

type Media = {|
  type: string,
  description: string,
  mimeType: ResourceMimeType,
  _id: string,
  mediaUrl: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Source>
|};

type Meta = {|
  updatedAt: string,
  createdAt: string
|};

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
  userTriesCoun: number,
  userDoneCoun: number
|};

type LevelAPI = {
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
  external_refs: Array<?string>
};

type ChapterAPI = {|
  _id: string,
  __v: number,
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

type CorrectionAPI = {
  correctAnswer: Array<Answer>,
  corrections: Array<PartialCorrection>
};

type ExitNodeRef = 'successExitNode' | 'failureExitNode';
type ExitNodeType = SUCCESS | FAILURE;

type ExitNodeAPI = {|
  ref: ExitNodeRef,
  type: ExitNodeType,
  meta: Meta,
  title: string,
  description: string,
  media: Media
|};

type Fixtures = {|
  getAllProgressions: () => Array<Progression>,
  getChapterRulesByContent: (ref: string) => Array<ChapterRule>,
  getClue: (slideId: string) => Promise<ClueAPI>,
  getCorrectAnswer: (slideId: string) => Promise<Array<Answer>>,
  getExitNode: (ref: string) => ExitNodeAPI,
  getNextLevel: (ref: string) => LevelAPI | void,
  findChapterById: (contentRef: string) => Promise<ChapterAPI>,
  findContent: (type: string, ref: string) => Promise<ChapterAPI | LevelAPI | Slide>,
  findLevelById: (contentRef: string) => LevelAPI | void,
  findProgressionById: (id: string) => Promise<Progression | void>,
  findRecommendations: (type: string, ref: string) => Promise<Array<RecommendationAPI>>,
  findSlideByChapter: (chapterRef: string) => Promise<Array<Slide>>,
  findSlideById: (id: string) => Promise<Slide>,
  saveProgression: Progression => void
|};

export const CONTENT_TYPE: {[string]: ContentType} = {
  CHAPTER: 'chapter',
  LEVEL: 'level',
  SLIDE: 'slide'
};

export type {
  ChapterAPI,
  ClueAPI,
  CorrectionAPI,
  DataEvent,
  ExitNodeAPI,
  ExitNodeRef,
  Fixtures,
  JwPlayerOptions,
  LevelAPI,
  RecommendationAPI,
  ResourceAPI,
  ResourceMimeType,
  ResourceType,
  Url,
  UserAnswerAPI,
  Window
};
