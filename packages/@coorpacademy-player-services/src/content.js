import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import {getConfig} from '@coorpacademy/progression-engine';

const find = fixtures => (type, ref) => {
  const {findContent} = fixtures;
  return findContent(type, ref);
};

const getNbSlides = fixtures => (contentRef, engineRef, version) => {
  const {findChapterById, findLevelById} = fixtures;
  const maxNbSlides = pipe(getConfig, get('slidesToComplete'))({
    ref: engineRef,
    version
  });

  const level = findLevelById(contentRef);

  if (level) {
    return level.chapterIds.length * maxNbSlides;
  }

  const chapter = findChapterById(contentRef);

  if (chapter) {
    return maxNbSlides;
  }

  return -1;
};

const getInfo = fixtures => (contentRef, engineRef, version) => {
  const nbSlides = getNbSlides(fixtures)(contentRef, engineRef, version);
  return {nbSlides};
};

const Content = fixtures => ({
  find: find(fixtures),
  getInfo: getInfo(fixtures)
});

export default Content;
