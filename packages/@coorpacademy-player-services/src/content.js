// @flow strict

import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import {getConfig} from '@coorpacademy/progression-engine';

import type {Slide} from '@coorpacademy/progression-engine';
import type {ChapterAPI, ContentService, LevelAPI, RestrictedResourceType} from './definitions';

type FindContent = (
  type: RestrictedResourceType,
  ref: string
) => Promise<ChapterAPI | LevelAPI | Slide>;
type GetNbSlides = (contentRef: string, engineRef: string, version: string) => Promise<number>;
type GetInfo = (
  contentRef: string,
  engineRef: string,
  version: string
) => Promise<{nbSlides: number}>;

type ContentService = {|
  find: FindContent,
  getInfo: GetInfo
|};

const find = (contentService: ContentService): FindContent => (
  type: RestrictedResourceType,
  ref: string
): Promise<ChapterAPI | LevelAPI | Slide> => {
  const {findContent} = contentService;
  return findContent(type, ref);
};

const getNbSlides = (contentService: ContentService): GetNbSlides => async (
  contentRef: string,
  engineRef: string,
  version: string
): Promise<number> => {
  const {findChapterById, findLevelById} = contentService;
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

const getInfo = (contentService: ContentService): GetInfo => async (
  contentRef: string,
  engineRef: string,
  version: string
): Promise<{nbSlides: number}> => {
  const nbSlides = await getNbSlides(contentService)(contentRef, engineRef, version);
  return {nbSlides};
};

const createContentService = (contentService: ContentService): ContentService => ({
  find: find(contentService),
  getInfo: getInfo(contentService)
});

export type {ContentService};
export default createContentService;
