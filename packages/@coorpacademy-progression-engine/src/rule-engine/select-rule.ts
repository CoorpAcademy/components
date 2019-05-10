import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import isEqual from 'lodash/fp/isEqual';
import filter from 'lodash/fp/filter';
import sortBy from 'lodash/fp/sortBy';
import {Content, State} from '../types';
import {ChapterRule, Variables} from './types';
import checkCondition from './condition-operators';

export const DEFAULT_SOURCE: Content = {
  type: 'slide',
  ref: ''
};

const isRuleAvailable = (source: Content) => (chapterRule: ChapterRule): boolean => {
  const isSameSource = isEqual(source, chapterRule.source);
  const hasSameType = (source && source.type) === chapterRule.source.type;
  const isGlobalRule = hasSameType && get('source.ref', chapterRule) === '*';

  return isSameSource || isGlobalRule;
};

const isSameType = <T, S>(refValue: T) => (value: S): boolean => {
  if (Array.isArray(value) && Array.isArray(refValue)) return value.every(isSameType(refValue[0]));
  return typeof refValue === typeof value;
};

const matchWithState = (state: State) => (chapterRule: ChapterRule): boolean => {
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
        const variables: Variables['variables'] = {
          lives: state.lives,
          stars: state.stars,
          ...state.variables
        };

        const value = variables[field];
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

const selectRule = (rules: ChapterRule[], state: State | null): ChapterRule | null => {
  const targetedChapterRules: ChapterRule[] = filter(
    isRuleAvailable(state ? state.nextContent : DEFAULT_SOURCE),
    rules
  );
  const sortedChapterRules: ChapterRule[] = sortBy('priority', targetedChapterRules);

  if (!state) {
    return head(sortedChapterRules) || null;
  }
  return sortedChapterRules.find(matchWithState(state)) || null;
};

export default selectRule;
