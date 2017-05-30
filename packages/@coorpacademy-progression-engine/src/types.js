// @flow

export type Content = {
  ref: string,
  type: string,
  version?: string
};

export type State = {
  content?: Content,
  nextContent: Content,
  lives?: number,
  slides?: Array<string>
};

export type Action = {
  type: string,
  payload: {
    isCorrect?: boolean
  }
};

export type Progression = {
  content: Content,
  state: State,
  actions: Array<Action>
};

export type Answer = Array<string>;
export type AcceptedAnswers = Array<Answer>;

export type QCMQuestion = {
  type: 'qcm' | 'qcmDrag',
  content: {
    answers: AcceptedAnswers
  }
};

export type Question = QCMQuestion;

export type Slide = {
  _id: string,
  chapter_id: string,
  question: Question
};
