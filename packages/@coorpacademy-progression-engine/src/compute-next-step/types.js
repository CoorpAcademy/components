// @flow
import type {Answer, ChapterContent, Content} from '../types';
import type {Instruction} from '../rule-engine/types';

export type PartialAnswerActionWithIsCorrect = {
  type: 'answer',
  authors: Array<string>,
  payload: {
    answer: Answer,
    content: Content,
    godMode: boolean,
    isCorrect: boolean
  }
};

export type PartialExtraLifeAcceptedAction = {
  type: 'extraLifeAccepted',
  authors: Array<string>
};

export type PartialAction =
  | PartialAnswerActionWithIsCorrect
  | PartialExtraLifeAcceptedAction
  | null;

export type ChapterContentSelection = {
  currentChapterContent: ChapterContent | null,
  nextChapterContent: ChapterContent | null,
  temporaryNextContent: Content
};

export type Result = {
  nextContent: Content,
  instructions: Array<Instruction> | null,
  isCorrect: ?boolean
} | null;
