import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import find_ from 'lodash/fp/find';
import {getConfig} from '@coorpacademy/progression-engine';
import chaptersData from './chapters.data';
import levelsData from './levels.data';
import {findById} from './slides';

const toMapById = reduce((map, object) => map.set(object._id, object));
const toMapByRef = reduce((map, object) => map.set(object.ref, object));

const chapters = toMapById(new Map(), chaptersData);
const levels = toMapByRef(new Map(), levelsData);

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

export const getNextContent = (type, ref) => {
  switch (type) {
    case 'level':
      if (levels.has(ref)) {
        const {name, level} = levels.get(ref);
        if (level === 'coach') {
          return Promise.resolve({});
        }

        const nextLevel = level === 'basic' ? 'advanced' : 'coach';
        const filter = {level: nextLevel, name};
        const nextContent = find_(filter, levelsData);

        return Promise.resolve(nextContent);
      }
      break;
    default:
      return Promise.resolve({});
  }
};
