// @flow
import type {Content} from '../../types';
import type {OperatorKeys} from './condition-operators';

type Target =
  | {
      scope: 'variable',
      field: 'lives' | 'stars' | string
    }
  | {
      scope: 'slide',
      ref: string,
      field: 'isCorrect' | 'answer'
    };

type Condition = {
  target: Target,
  operator: OperatorKeys,
  values: Array<number | boolean | string | Array<string>>
};

type Instruction = {
  field: string,
  type: 'add',
  value: number
};

type ChapterRule = {
  source: Content,
  destination: Content,
  instructions: Array<Instruction>,
  conditions: Array<Condition>,
  priority: number,
  ref?: string
};

export type {ChapterRule, Condition, Instruction, OperatorKeys, Target};
