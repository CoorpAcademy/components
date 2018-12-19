// @flow strict

import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import {getConfig} from '@coorpacademy/progression-engine';

import type {Slide} from '@coorpacademy/progression-engine';
import type {Chapter, Fixtures, Level} from './definitions';

const find = (fixtures: Fixtures) => (
  type: string,
  ref: string
): Promise<Chapter | Level | Slide> => {
  const {findContent} = fixtures;
  return findContent(type, ref);
};

const getNbSlides = (fixtures: Fixtures) => (
  contentRef: string,
  engineRef: string,
  version: string
): number => {
  const {findChapterById, findLevelById} = fixtures;
  const maxNbSlides = pipe(getConfig, get('slidesToComplete'))({
    ref: engineRef,
    version
  });

  const level: Level = findLevelById(contentRef);

  if (level) {
    return level.chapterIds.length * maxNbSlides;
  }

  const chapter: Chapter = findChapterById(contentRef);

  if (chapter) {
    return maxNbSlides;
  }

  return -1;
};

const getInfo = (fixtures: Fixtures) => (
  contentRef: string,
  engineRef: string,
  version: string
): {nbSlides: number} => {
  const nbSlides = getNbSlides(fixtures)(contentRef, engineRef, version);
  return {nbSlides};
};

const ContentService = (fixtures: Fixtures) => ({
  find: find(fixtures),
  getInfo: getInfo(fixtures)
});

export default ContentService;
