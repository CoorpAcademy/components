import {Content} from '../types';
import {OPERATORS} from './condition-operators';

export type Target =
  | {
      scope: 'variable',
      field: 'lives' | 'stars' | string
    }
  | {
      scope: 'slide',
      ref: string,
      field: 'isCorrect' | 'answer'
    };

export type Condition = {
  target: Target,
  operator: OPERATORS,
  values: Array<number | boolean | string | Array<string>>
};

export enum InstructionType {
  ADD = 'add',
  SET = 'set'
}

export type Instruction = {
  field: string,
  type: InstructionType,
  value: number | boolean | string
};

export type ChapterRule = {
  source: Content,
  destination: Content,
  instructions: Array<Instruction>,
  conditions: Array<Condition>,
  priority: number,
  ref?: string
};

export type Variables = {
  lives: number,
  stars: number,
  variables: {[variableName: string]: string | boolean | number}
};
