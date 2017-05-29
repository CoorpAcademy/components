// @flow

export type Content = {
  ref: string,
  type: string,
  version?: string
};

export type State = {
  content: Content
};

export type Action = {
  type: string,
  payload?: {}
};

export type Progression = {
  content: Content,
  state: State
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
  chapter_id: string,
  question: Question
};
