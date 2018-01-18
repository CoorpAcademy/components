// @flow
import find from 'lodash/fp/find';
import type {ChapterRule} from '../rule-engine/types';

const selectRule = (rules: Array<ChapterRule>): ?ChapterRule => {
  return find({source: {ref: ''}}, rules) || null;
};

export default selectRule;
