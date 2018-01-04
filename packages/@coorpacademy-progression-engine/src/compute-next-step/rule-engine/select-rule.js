// @flow
import isEqual from 'lodash/fp/isEqual';
import filter from 'lodash/fp/filter';
import sortBy from 'lodash/fp/sortBy';
import type {Content, GenericState} from '../../types';
import type {ChapterRule} from './types';
import checkCondition from './condition-operators';

export const DEFAULT_SOURCE = {
  type: 'slide',
  ref: ''
};

const isCurrentSlide = (source: ?Content) => (chapterRule: ChapterRule): boolean => {
  const currentsource = source || DEFAULT_SOURCE;
  return isEqual(currentsource)(chapterRule.source);
};

const isSameType = refValue => (value): boolean => {
  if (Array.isArray(value) && Array.isArray(refValue)) return value.every(isSameType(refValue[0]));
  return typeof refValue === typeof value;
};

const matchWithState = (state: GenericState) => (chapterRule: ChapterRule): boolean => {
  const conditions = chapterRule.conditions;
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
        const typedValues = values.filter(isSameType(value));

        return checkCondition(operator, typedValues, value);
      }
      case 'variable': {
        const {field} = target;
        const variables = {
          lives: state.lives,
          stars: state.stars,
          ...state.variables
        };

        const value = variables[field];
        if (value === undefined && value === null) return false;

        const typedValues = values.filter(isSameType(value));
        return checkCondition(operator, typedValues, value);
      }
      /* istanbul ignore next */
      default: {
        return false;
      }
    }
  });
};

const selectRule = (rules: Array<ChapterRule>, state: GenericState): ?ChapterRule => {
  const targetedChapterRules: Array<ChapterRule> = filter(isCurrentSlide(state.content))(rules);
  const sortedChapterRules: Array<ChapterRule> = sortBy('priority')(targetedChapterRules);

  return sortedChapterRules.find(matchWithState(state)) || null;
};

export default selectRule;
