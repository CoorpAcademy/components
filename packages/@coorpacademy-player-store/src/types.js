// @flow strict

import type {State} from '@coorpacademy/progression-engine';

type Url = string;

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

type Context = {|
  title: string,
  description: string,
  media: Media
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

type Meta = {|
  updatedAt: string,
  createdAt: string
|};

type Choice = {|
  _id: string,
  value: string,
  label: string,
  items: Array<?string>,
  media: Media
|};

type Answers = Array<Array<string>>;

type Content = {|
  maxTypos: ?boolean,
  choices: Choice,
  answers: Answers,
  media: Media
|};

type Question = {|
  type: string,
  header: string,
  explanation: string,
  content: Content,
  medias: Array<Media>
|};

type Slide = {|
  _id: string,
  klf: string,
  tips: string,
  hasClue: boolean,
  chapter_id: string,
  authors: Array<string>,
  context: Context,
  meta: Meta,
  lessons: Array<Lesson>,
  question: Question
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

type ExitNode = {|
  ref: string,
  type: string,
  title: string,
  description: string,
  media: Media
|};

type SucessExitNode = {|
  ...ExitNode,
  meta: Meta
|};

type FailureExitNode = {|
  ...ExitNode,
  meta: Meta
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

type Level = {|
  ref: string,
  name: string,
  level: string,
  meta: Meta,
  poster: Poster,
  chapterIds: Array<string>
|};

type Stats = {|
  userTriesCoun: number,
  userDoneCoun: number
|};

type Module = {|
  _id: string,
  disciplineRef: string,
  name: string,
  levelTranslation: string,
  mediaUrl: Url,
  timeAlloted: number,
  level: string,
  universalRef: string,
  ref: string,
  eligibleBattle: boolean,
  creditsToAccess: number,
  infiniteLives: boolean,
  isConditional: boolean,
  data: Array<?string>,
  stats: Stats,
  chapterIds: Array<string>,
  acquiredSkills: Array<string>,
  version: string,
  external_refs: Array<?string>
|};

type Task = () => ?void | Content | ExitNode;

type GetState = () => State;

type Action = {|
  types: Array<string>,
  task: Task,
  meta: {
    id?: string,
    resource?: Resource,
    location?: string,
    progressionId?: string,
    slideId?: string,
    type?: string,
    ref?: string,
    answer?: string
  }
|};

type AnalyticsActions = {|
  ...Action
|};

type AnswersActions = {|
  ...Action
|};

type CluesActions = {|
  ...Action,
  bailout: () => string
|};

type CommentsActions = {|
  ...Action
|};

type ContentsActions = {|
  ...Action,
  bailout: () => string
|};

type ExitNodesActions = {|
  ...Action,
  bailout: () => string
|};
type NextContentActions = {|
  ...Action,
  bailout: () => string
|};
type ProgressionsActions = {|
  ...Action,
  bailout?: () => number
|};
type RankActions = {|
  ...Action,
  // eslint-disable-next-line flowtype/no-weak-types
  bailout?: () => any
|};
type RecommendationsActions = {|
  ...Action,
  // eslint-disable-next-line flowtype/no-weak-types
  bailout?: () => void | ?Recommendation
|};

type Dispatch = (
  action: | Action
  | AnswersActions
  | CluesActions
  | CommentsActions
  | ContentsActions
  | ExitNodesActions
  | NextContentActions
  | ProgressionsActions
  | RankActions
  | RecommendationsActions
  // eslint-disable-next-line flowtype/no-weak-types
) => any;

export type {
  Url,
  Level,
  Media,
  Slide,
  Lesson,
  Module,
  Answers,
  Chapter,
  Dispatch,
  GetState,
  ExitNode,
  Resource,
  RankActions,
  CluesActions,
  ResourceType,
  Recommendation,
  FailureExitNode,
  SucessExitNode,
  AnswersActions,
  CommentsActions,
  ContentsActions,
  AnalyticsActions,
  ExitNodesActions,
  NextContentActions,
  ProgressionsActions,
  RecommendationsActions
};
