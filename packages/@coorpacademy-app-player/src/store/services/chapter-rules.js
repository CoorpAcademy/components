import reduce from 'lodash/fp/reduce';
import get from 'lodash/fp/get';
import chapterRulesData from './chapter-rules.data';

const toMapByChapterRef = reduce((map, object) => map.set(object.chapterRef, object));
const chapterRules = toMapByChapterRef(new Map(), chapterRulesData);

// eslint-disable-next-line import/prefer-default-export
export const getByContent = ({type, ref}) => {
  switch (type) {
    case 'chapter':
      return Promise.resolve(chapterRules.get(ref)).then(get('rules'));
    default:
      return Promise.reject(new Error(`Cannot fetch ChapterRules of ${type}`));
  }
};
