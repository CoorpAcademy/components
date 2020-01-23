// @flow
import {
  get,
  head,
  isEqual,
  filter,
  sortBy,
  pipe,
  find,
  values as objectValues,
  set,
  reduce
} from 'lodash/fp';
import type {Content, State} from '../types';
import type {ChapterRule} from './types';
import checkCondition from './condition-operators';

export const DEFAULT_SOURCE = {
  type: 'slide',
  ref: ''
};

const isRuleAvailable = (source: Content) => (chapterRule: ChapterRule): boolean => {
  const isSameSource = isEqual(source, chapterRule.source);
  const hasSameType = (source && source.type) === chapterRule.source.type;
  const isGlobalRule = hasSameType && get('source.ref', chapterRule) === '*';

  return isSameSource || isGlobalRule;
};

const isSameType = refValue => (value): boolean => {
  if (Array.isArray(value) && Array.isArray(refValue)) return value.every(isSameType(refValue[0]));
  return typeof refValue === typeof value;
};

const matchWithState = (state: State) => (chapterRule: ChapterRule): boolean => {
  const conditions = chapterRule.conditions;
  return conditions.every(
    (condition): boolean => {
      const {target, operator, values} = condition;
      switch (target.scope) {
        case 'slide': {
          const {ref, field} = target;

          const answerRecord = pipe(
            reduce((res, answer) => set([answer.slideRef], answer, res), {}),
            objectValues,
            find({slideRef: ref})
          )(state.allAnswers);

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
          const typedValues = values.filter(isSameType(value));
          return checkCondition(operator, typedValues, value);
        }
        /* istanbul ignore next */
        default: {
          return false;
        }
      }
    }
  );
};

const selectRule = (rules: Array<ChapterRule>, state: State | null): ChapterRule | null => {
  const targetedChapterRules: Array<ChapterRule> = filter(
    isRuleAvailable(state ? state.nextContent : DEFAULT_SOURCE),
    rules
  );
  const sortedChapterRules: Array<ChapterRule> = sortBy('priority', targetedChapterRules);

  if (!state) {
    return head(sortedChapterRules);
  }
  return sortedChapterRules.find(matchWithState(state)) || null;
};

export default selectRule;
