export type Choice = {
  order?: number;
  selected: boolean;
  title?: string;
  help?: string;
  onClick: Function;
  ariaLabel?: string;
  'aria-label'?: string;
};

export type QcmDrag = {
  type: 'qcmDrag';
  answers: Choice[];
  help?: string;
};

export type Qcm = {
  type: 'qcm';
  answers: Choice[];
};

export type QcmGraphic = {
  type: 'qcmGraphic';
  answers: (Choice & {image: string})[];
};

export type FreeText = {
  type: 'freeText';
  placeholder: string;
  value?: string;
  onChange: Function;
  ariaLabel?: string;
};

export type DropDownOption = {
  name: string;
  value: string | number;
  selected: boolean;
  validOption: boolean;
};

export type DropDown = {
  type: 'dropDown';
  onChange?: Function;
  options: DropDownOption[];
  theme?:
    | 'filter'
    | 'invalid'
    | 'header'
    | 'mooc'
    | 'question'
    | 'sort'
    | 'thematiques'
    | 'player'
    | 'template'
    | 'coorpmanager';
};

export type QuestionRange = {
  type: 'slider';
  placeholder?: string;
  onChange?: (value: number) => void;
  onChangeEnd?: Function;
  onSliderChange?: (value: number) => void;
  multi?: boolean;
  value: number | number[];
  title: string;
  minLabel: string;
  maxLabel: string;
};

export type TextTemplate = {
  type: 'text';
  name: string;
  placeholder: string;
  value?: string;
  onChange: Function;
};

export type SelectionTemplate = {
  type: 'select';
  name: string;
  onChange?: Function;
  options?: DropDownOption[];
};

export type Template = {
  type: 'template';
  template: string;
  answers: (TextTemplate | SelectionTemplate)[];
};

export type VideoMedia = {
  mimeType: string;
  videoId: string;
  mediaRef: string;
  jwpOptions: unknown;
};

export type Media =
  | VideoMedia
  | {
      url: string;
      type: string;
    };

export type AnswerUI = {
  model: QcmDrag | Qcm | QcmGraphic | FreeText | DropDown | QuestionRange | Template;
  help: string;
  media?: Media;
};

export type SlideUIAnimations = 'unstack' | 'restack';
