// @flow
export type Progression = {};

type ContentChoiceItem = {
  _id: string,
  value: string
};

type ContentChoice = {
  _id: string,
  value?: string,
  items: Array<ContentChoiceItem>
};

type Question = {
  // TODO When implementing checkAnswer, create nice types for every question type that match the expected
  // data perfectly
  type: 'qcmDrag' | 'template' | 'qcm',
  content: {
    choices: Array<ContentChoice>
  }
};

export type Slide = {
  _id: string,
  chapter_id: string,
  question: Question
};
