// @flow
import isEqual from 'lodash/fp/isEqual';
import filter from 'lodash/fp/filter';
import sortBy from 'lodash/fp/sortBy';
import type {Content, GenericState} from '../../types';
import checkCondition from './condition-operators';

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

type Condition =
  | {
      target: Target,
      operator: 'EQUALS' | 'NOT_EQUALS' | 'IN' | 'NOT_IN',
      values: Array<number | boolean | string | Array<string>>
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
  ref?: string
};

export const DEFAULT_SOURCE = {
  type: 'slide',
  ref: ''
};
const isCurrentSlide = (source: ?Content) => (chapterRule: ChapterRule): boolean => {
  const currentsource = source || DEFAULT_SOURCE;
  return isEqual(currentsource)(chapterRule.source);
};

const matchWithState = (state: GenericState) => (chapterRules: ChapterRule): boolean => {
  const conditions = chapterRules.conditions;
  return conditions.every((condition): boolean => {
    const {target, operator, values} = condition;
    switch (target.scope) {
      case 'slide': {
        const {ref, field} = target;
        const answerRecord = state.allAnswers.reverse().find((record): boolean => {
          return record.slideRef === ref;
        });
        if (!answerRecord) return false;

        const value = answerRecord[field];
        // $FlowFixMe
        return checkCondition(operator, values, value);
      }
      case 'variable': {
        const {field} = target;
        const variables = {
          lives: state.lives,
          stars: state.stars,
          ...state.variables
        };

        const value = variables[field];
        if (!value) return false;
        // $FlowFixMe
        return checkCondition(operator, values, value);
      }
      default: {
        return false;
      }
    }
  });
};

const selectRule = (rules: Array<ChapterRule>, state: GenericState): ?ChapterRule => {
  const targetedChapterRules: Array<ChapterRule> = filter(isCurrentSlide(state.content))(rules);
  const sortedChapterRules: Array<ChapterRule> = sortBy(chapterRule => -chapterRule.priority)(
    targetedChapterRules
  );

  return sortedChapterRules.find(matchWithState(state)) || null;
};

export default selectRule;
