// @flow strict

import {reduce, find as _find} from 'lodash/fp';

import type {ChapterAPI, LevelAPI, RecommendationAPI} from '../../definitions';
import {findById as findChapterById} from './chapters';
import levelsData from './data/levels';
import recommendations from './data/recommendations';

const levels: Map<string, LevelAPI> = reduce(
  (map, object) => map.set(object.ref, object),
  new Map(),
  levelsData
);

const find = (type: string, ref: string): Promise<Array<RecommendationAPI>> => {
  return Promise.resolve(recommendations);
};

const getNextChapter = (ref: string): ChapterAPI | void => findChapterById(ref);

const getNextLevel = (ref: string): LevelAPI | void => {
  const _level = levels.get(ref);
  if (!_level) {
    return undefined;
  }

  const {
    name,
    level
  }: {
    name?: string,
    level: string
  } = _level;
  if (level === 'coach') {
    return undefined;
  }

  return _find(
    {
      name,
      level: level === 'base' ? 'advanced' : 'coach'
    },
    levelsData
  );
};

export {find, getNextChapter, getNextLevel};
