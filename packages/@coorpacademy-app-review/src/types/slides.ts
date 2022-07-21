export type Choice = {
  order?: number;
  selected: boolean;
  title: string;
  help: string;
  onClick: Function;
};

export type QcmDrag = {
  type: 'qcmDrag';
  answers: Choice[];
  help?: string;
};

export type Qcm = {
  type: 'qcm';
  choices: (Choice & {ariaLabel: string})[];
};

export type QcmGraphic = {
  type: 'qcmGraphic';
  choices: (Choice & {image: string})[];
};

export type FreeText = {
  type: 'freeText';
  placeholder: string;
  value: string;
  onChange: Function;
  ariaLabel: string;
};

export type DropDownOption = {
  name: string;
  value: string | number;
  selected: boolean;
  validOption: boolean;
};

export type DropDown = {
  type: 'dropDown';
  onChange: Function;
  options: DropDownOption[];
  theme:
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
  onChange: Function;
  onChangeEnd: Function;
  multi: boolean;
  value: number | number[];
  title: string;
  minLabel: string;
  maxLabel: string;
};

export type Template = {
  type: 'template';
  template: string;
  choices: (DropDown & {type?: string})[];
};

export type AnswerUI = {
  model: QcmDrag | Qcm | QcmGraphic | FreeText | DropDown | QuestionRange | Template;
  help: string;
};

export type SlideUIAnimations = 'unstack' | 'restack';

export type UISlide = {
  questionText?: string;
  answerUI?: AnswerUI;
};
