import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import values from 'lodash/fp/values';
import {getConfig} from '@coorpacademy/progression-engine';
import chaptersData from './chapters.data';
import levelsData from './levels.data';
import {findById} from './slides';

const mayBy = key =>
  pipe(values, reduce((map, object) => map.set(get(key, object), object), new Map()));
const toMapById = mayBy('_id');
const toMapByRef = mayBy('ref');

const chapters = toMapById(chaptersData);
const levels = toMapByRef(levelsData);

// eslint-disable-next-line import/prefer-default-export
export const find = (type, ref) => {
  switch (type) {
    case 'chapter':
      if (chapters.has(ref)) return Promise.resolve(chapters.get(ref));
      return Promise.reject(new Error(`Chapter ${ref} not found`));

    case 'level':
      if (levels.has(ref)) return Promise.resolve(levels.get(ref));
      return Promise.reject(new Error(`Level ${ref} not found`));

    case 'slide':
      return findById(ref);

    default:
      return Promise.reject(new Error(`unknown content type ${type}`));
  }
};

function getNbSlides(contentRef, engineRef, version) {
  const maxNbSlides = pipe(getConfig, get('slidesToComplete'))({
    ref: engineRef,
    version
  });

  if (levels.get(contentRef)) {
    const content = levels.get(contentRef);
    return content.chapterIds.length * maxNbSlides;
  }

  if (chapters.get(contentRef)) {
    return maxNbSlides;
  }

  return -1;
}

export const getInfo = (contentRef, engineRef, version) => {
  const nbSlides = getNbSlides(contentRef, engineRef, version);
  return {nbSlides};
};
