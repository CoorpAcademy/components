// @flow strict

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

type Resource = {|
  _id: string,
  ref: string,
  type: ResourceType,
  mimeType: ResourceMimeType,
  mediaUrl: Url,
  src?: Array<Url>,
  description?: string,
  poster?: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  jwpOptions?: JwPlayerOptions
|};

type Media = {|
  type: string,
  description: string,
  mimeType: ResourceMimeType,
  _id: string,
  mediaUrl: Url,
  subtitles?: Array<string>,
  posters?: Array<Url>,
  src?: Array<Url>
|};

type Context = {|
  title: string,
  description: string,
  media: Media
|};

type Lesson = {|
  _id: string,
  ref: stirng,
  type: string,
  poster: Url,
  description: string,
  mimeType: ResourceMimeType,
  videoId: string,
  subtitles: Array<string>,
  posters: Array<Url>,
  src: Array<Url>
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

export type {Resource, ResourceType, Url, Slide};
