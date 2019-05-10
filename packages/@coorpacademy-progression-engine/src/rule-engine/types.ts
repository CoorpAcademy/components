import {Content} from '../types/content';
import {OPERATORS} from './condition-operators';

export type Target =
  | {
      scope: 'variable';
      field: 'lives' | 'stars' | string;
    }
  | {
      scope: 'slide';
      ref: string;
      field: 'isCorrect' | 'answer';
    };

export interface Condition {
  target: Target;
  operator: OPERATORS;
  values: (number | boolean | string | string[])[];
}

export type InstructionType = 'add' | 'set';

export interface Instruction {
  field: string;
  type: InstructionType;
  value: number | boolean | string;
}

export interface ChapterRule {
  source: Content;
  destination: Content;
  instructions: Instruction[];
  conditions: Condition[];
  priority: number;
  ref?: string;
}

export interface Variables {
  lives: number;
  stars: number;
  variables: {[variableName: string]: string | boolean | number};
}
