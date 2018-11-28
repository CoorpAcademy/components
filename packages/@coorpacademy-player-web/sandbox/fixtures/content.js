import {findById as findChapterById} from './chapters';
import {findById as findLevelById} from './levels';
import {findById as findSlideById} from './slides';

// eslint-disable-next-line import/prefer-default-export
export const find = (type, ref) => {
  switch (type) {
    case 'chapter': {
      const chapter = findChapterById(ref);
      if (!chapter) {
        return Promise.reject(new Error(`Chapter ${ref} not found`));
      }
      return Promise.resolve(chapter);
    }

    case 'level': {
      const level = findLevelById(ref);
      if (!level) {
        return Promise.reject(new Error(`Level ${ref} not found`));
      }
      return Promise.resolve(level);
    }

    case 'slide':
      return Promise.resolve(findSlideById(ref));

    default:
      return Promise.reject(new Error(`unknown content type ${type}`));
  }
};
