import {Config} from '@jwplayer/jwplayer-react-native';
import {ChoiceItem} from '../../atom/select-modal/index.native';

type Url = string;

type VideoMimeType =
  | 'video/mp4'
  | 'application/kontiki'
  | 'application/jwplayer'
  | 'application/youtube'
  | 'application/omniPlayer'
  | 'application/uptale'
  | 'application/vimeo';

type ResourceMimeType =
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
  mediaRef?: string;
  _id?: string;
  jwpOptions?: {
    // --- native JWPlayer
    config?: Config;
    // --- web JWPlayer
    playlist?: Array<{
      file: string;
      tracks: [{file: string; kind: 'thumbnails'}];
    }>;
    playerId?: string;
    playerScript?: string;
    licenseKey?: string;
    customProps?: {
      playbackRateControls: boolean;
      playbackRates: number[];
      preload: 'auto';
      autostart: 'true' | 'false';
      width: string;
      height: string;
      visualplaylist: boolean;
      nextUpDisplay: boolean;
    };
  };
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
