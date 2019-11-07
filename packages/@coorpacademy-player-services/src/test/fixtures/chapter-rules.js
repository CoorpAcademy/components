import {get, reduce} from 'lodash/fp';
import chapterRulesData from './data/chapter-rules';

const toMapByChapterRef = reduce((m, object) => m.set(object.chapterRef, object));
const chapterRules = toMapByChapterRef(new Map(), chapterRulesData);

const getChapterRulesByContent = ref => {
  return get('rules', chapterRules.get(ref));
};

export {getChapterRulesByContent};
