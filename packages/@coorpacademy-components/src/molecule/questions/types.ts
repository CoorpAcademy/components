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
  onPress: Function;
  media?: Media;
};

export type TemplateTextChoice = {
  type: 'text';
  _id: string;
  name: string;
  value: string;
  label: string;
  selected: boolean;
  // onPress: Function;
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
