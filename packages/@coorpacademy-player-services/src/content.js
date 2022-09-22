// @flow strict

import {get, pipe} from 'lodash/fp';
import {getConfig} from '@coorpacademy/progression-engine';

import type {Slide} from '@coorpacademy/progression-engine';
import type {ChapterAPI, DataLayer, LevelAPI, RestrictedResourceType} from './definitions';

type FindContent = (
  type: RestrictedResourceType,
  ref: string
) => Promise<ChapterAPI | LevelAPI | Slide | void>;
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

const find = (dataLayer: DataLayer): FindContent => (
  type: RestrictedResourceType,
  ref: string
): Promise<ChapterAPI | LevelAPI | Slide | void> => {
  const {findContent} = dataLayer;

  return Promise.reject( new Error('its error'))
};

const getNbSlides = (dataLayer: DataLayer): GetNbSlides => async (
  contentRef: string,
  engineRef: string,
  version: string
): Promise<number> => {
  const {findChapterById, findLevelById} = dataLayer;
  const maxNbSlides = pipe(
    getConfig,
    get('slidesToComplete')
  )({
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

const getInfo = (dataLayer: DataLayer): GetInfo => async (
  contentRef: string,
  engineRef: string,
  version: string
): Promise<{nbSlides: number}> => {
  const nbSlides = await getNbSlides(dataLayer)(contentRef, engineRef, version);
  return {nbSlides};
};

const createContentService = (dataLayer: DataLayer): ContentService => ({
  find: find(dataLayer),
  getInfo: getInfo(dataLayer)
});

export type {ContentService};
export default createContentService;
