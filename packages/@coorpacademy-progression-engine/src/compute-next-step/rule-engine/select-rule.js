// @flow
import type {Content, State} from '../../types';

type Target =
  | {
      scope: 'state',
      field: 'lives' | 'stars'
    }
  | {
      scope: 'variables',
      field: string
    }
  | {
      scope: 'currentSlide',
      field: 'isCorrect' | 'answer'
    };

type Condition =
  | {
      target: Target,
      operator: 'EQUALS' | 'NOT_EQUALS' | 'IN' | 'NOT_IN',
      values: Array<any> // eslint-disable-line flowtype/no-weak-types
    }
  | {
      target: Target,
      operator: 'LT' | 'LTE' | 'GT' | 'GTE' | 'BETWEEN' | 'NOT_BETWEEN',
      values: Array<number>
    };

type Instruction = {
  field: string,
  type: 'add',
  value: number
};

export type ChapterRule = {
  source: Content,
  destination: Content,
  instructions: Array<Instruction>,
  conditions: Array<Condition>,
  priority: number,
  ref: string
};

const selectRule = (rules: Array<ChapterRule>, state: State): ChapterRule => {
  return rules[0] || null;
};

export default selectRule;
