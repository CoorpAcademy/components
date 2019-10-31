// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import {CONTENT_TYPE} from '../../definitions';
import type {ChapterAPI, LevelAPI} from '../../definitions';
import {findById as findChapterById} from './chapters';
import {findById as findLevelById} from './levels';
import {findById as findSlideById} from './slides';

export const find = (type: string, ref: string): Promise<ChapterAPI | LevelAPI | Slide> => {
  switch (type) {
    case CONTENT_TYPE.CHAPTER: {
      const chapter = findChapterById(ref);
      if (!chapter) {
        return Promise.reject(new Error(`Chapter ${ref} not found`));
      }
      return Promise.resolve(chapter);
    }

    case CONTENT_TYPE.LEVEL: {
      const level = findLevelById(ref);
      if (!level) {
        return Promise.reject(new Error(`Level ${ref} not found`));
      }
      return Promise.resolve(level);
    }

    case CONTENT_TYPE.SLIDE:
      return Promise.resolve(findSlideById(ref));

    default:
      return Promise.reject(new Error(`unknown content type ${type}`));
  }
};
