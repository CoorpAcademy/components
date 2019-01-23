// @flow strict

import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import {getConfig} from '@coorpacademy/progression-engine';

import type {Slide} from '@coorpacademy/progression-engine';
import type {ChapterAPI, Fixtures, LevelAPI} from './definitions';

type FindContent = (type: string, ref: string) => Promise<ChapterAPI | LevelAPI | Slide>;
type GetNbSlides = (contentRef: string, engineRef: string, version: string) => Promise<number>;
type GetInfo = (contentRef: string, engineRef: string, version: string) => {nbSlides: number};

type ContentService = {|
  find: FindContent,
  getInfo: GetInfo
|};

const find = (fixtures: Fixtures): FindContent => (
  type: string,
  ref: string
): Promise<ChapterAPI | LevelAPI | Slide> => {
  const {findContent} = fixtures;
  return findContent(type, ref);
};

const getNbSlides = (fixtures: Fixtures): GetNbSlides => async (
  contentRef: string,
  engineRef: string,
  version: string
): number => {
  const {findChapterById, findLevelById} = fixtures;
  const maxNbSlides = pipe(getConfig, get('slidesToComplete'))({
    ref: engineRef,
    version
  });

  const level = await findLevelById(contentRef);

  if (level) {
    return level.chapterIds.length * maxNbSlides;
  }

  const chapter: ChapterAPI = await findChapterById(contentRef);

  if (chapter) {
    return maxNbSlides;
  }

  return -1;
};

const getInfo = (fixtures: Fixtures): GetInfo => (
  contentRef: string,
  engineRef: string,
  version: string
): {nbSlides: number} => {
  const nbSlides = getNbSlides(fixtures)(contentRef, engineRef, version);
  return {nbSlides};
};

const createContentService = (fixtures: Fixtures): ContentService => ({
  find: find(fixtures),
  getInfo: getInfo(fixtures)
});

export type {ContentService};
export default createContentService;
