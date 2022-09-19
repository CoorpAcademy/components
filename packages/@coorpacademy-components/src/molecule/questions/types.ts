type Url = string;

type VideoMimeType =
  | 'application/kontiki'
  | 'application/jwplayer'
  | 'application/youtube'
  | 'application/omniPlayer'
  | 'application/vimeo';

type ResourceMimeType =
  | 'video/mp4'
  | 'image/jpeg'
  | 'image/png'
  | 'application/pdf'
  | VideoMimeType;

export type Source = {
  _id?: string;
  mimeType?: ResourceMimeType;
  url: Url;
  videoId?: string;
};

export type MediaType = 'img' | 'video' | 'pdf';

export type Media = {
  type?: MediaType;
  description?: string;
  mimeType?: ResourceMimeType;
  _id?: string;
  mediaUrl?: Url;
  url?: Url;
  subtitles?: Array<string>;
  posters?: Array<Url>;
  src?: Array<Source>;
};

export type QuestionType = 'qcm' | 'qcmGraphic' | 'slider' | 'qcmDrag' | 'basic' | 'template';

export type ChoiceItem = {
  text: string;
  selected: boolean;
  _id: string;
};

export type Choice = {
  _id: string;
  value?: string;
  name?: string;
  type?: 'text' | 'select';
  label?: string;
  items?: Array<ChoiceItem>;
  media?: Media;
  onPress?: Function;
  selected?: boolean;
};
