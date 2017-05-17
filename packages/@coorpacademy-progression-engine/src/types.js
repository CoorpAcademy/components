// @flow
export type Progression = {};

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
