import {ChoiceItem} from '../../atom/select-modal/index.native';

type Url = string;

type VideoMimeType =
  | 'application/kontiki'
  | 'application/jwplayer'
  | 'application/youtube'
  | 'application/omniPlayer'
  | 'application/vimeo';

type ResourceMimeType =
  | 'video/mp4'
  | 'audio/acc'
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

export type MediaType = 'img' | 'audio' | 'video' | 'pdf';

export type Media = {
  type?: MediaType;
  description?: string;
  loading?: boolean;
  mimeType?: ResourceMimeType;
  _id?: string;
  mediaUrl?: Url;
  url?: Url;
  subtitles?: Array<string>;
  posters?: Array<Url>;
  src?: Array<Source>;
  poster?: string;
  videoId?: string;
  onClick?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onEnded?: () => void;
};

export type QuestionType = 'qcm' | 'qcmGraphic' | 'slider' | 'qcmDrag' | 'basic' | 'template';

type ChoiceBase = {
  _id: string;
  value?: string;
  name?: string;
  label?: string;
};

export type SelectableChoice = {
  _id: string;
  label: string;
  selected: boolean;
  onPress: (value?: string) => void;
  media?: Media;
};

export type TemplateTextChoice = {
  type: 'text';
  _id: string;
  name: string;
  value: string;
  label: string;
  selected: boolean;
};

export type TemplateListOfChoices = {
  type: 'select';
  _id: string;
  name: string;
  value: string;
  label: string;
  items: Array<ChoiceItem>;
};

export type Choice = ChoiceBase | SelectableChoice | TemplateListOfChoices | TemplateTextChoice;
