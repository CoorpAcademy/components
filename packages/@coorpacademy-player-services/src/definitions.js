// @flow strict

import type {
  FAILURE,
  SUCCESS,
  Answer,
  ChapterRule,
  Content,
  ContentType,
  Progression,
  Slide
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
  isConditional: boolean,
  time: number,
  version: string
|};

type Clue = string;

type UserAnswer = {|
  answer: Answer,
  content: Content
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

type Fixtures = {|
  getAllProgressions: () => Array<Progression>,
  getChapterRulesByContent: (ref: string) => Array<ChapterRule>,
  getClue: (slideId: string) => Clue,
  getCorrectAnswer: (slideId: string) => Array<Answer>,
  getExitNode: (ref: string) => ExitNode,
  getNextLevel: (ref: string) => Level | void,
  findChapterById: (contentRef: string) => Chapter,
  findContent: (type: string, ref: string) => Promise<Chapter | Level | Slide>,
  findLevelById: (contentRef: string) => Level | void,
  findProgressionById: (id: string) => Promise<Progression | void>,
  findRecommendations: (type: string, ref: string) => Promise<Array<Recommendation>>,
  findSlideByChapter: (chapterRef: string) => Array<Slide>,
  findSlideById: (id: string) => Promise<Slide>,
  saveProgression: Progression => void
|};

export const CONTENT_TYPE: {[string]: ContentType} = {
  CHAPTER: 'chapter',
  LEVEL: 'level',
  SLIDE: 'slide'
};

export type {
  Chapter,
  Clue,
  DataEvent,
  ExitNode,
  ExitNodeRef,
  Fixtures,
  JwPlayerOptions,
  Recommendation,
  Resource,
  ResourceMimeType,
  ResourceType,
  Url,
  UserAnswer,
  Window
};
