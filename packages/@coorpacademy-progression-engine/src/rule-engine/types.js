// @flow
import type {Content} from '../types';
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
  type: 'add' | 'set',
  value: number | boolean | string
};

type ChapterRule = {
  source: Content,
  destination: Content,
  instructions: Array<Instruction>,
  conditions: Array<Condition>,
  priority: number,
  ref?: string
};

type ChapterRulePool = Array<{ref: string, rules: Array<ChapterRule>}>;

type Variables = {
  lives: number,
  stars: number,
  variables: {[string]: string | boolean | number}
};

export type {ChapterRule, ChapterRulePool, Condition, Instruction, OperatorKeys, Target, Variables};
