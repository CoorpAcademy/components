import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import update from 'lodash/fp/update';
import values from 'lodash/fp/values';
import slidesData from './data/slides';

const slideStore = pipe(
  values,
  map(pipe(unset('clue'), unset('question.content.answers'))),
  reduce((slideMap, slide) => slideMap.set(slide._id, slide), new Map())
)(slidesData);

const appendJWPOptions = prefix => media => {
  const mimeType = get('mimeType', media) || get(`${prefix}mimeType`, media);

  if (mimeType === 'video/mp4') {
    const playerId = get('_id', media) || get(`${prefix}_id`, media);
    const file = get('mediaUrl', media) || get(`${prefix}mediaUrl`, media);
    const options = {
      playerId,
      file,
      playerScript: 'https://up-staging.coorpacademy.com/libs/jwplayer/7.10.7/jwplayer.js',
      licenseKey: 'yI8rSuuJ+fs7VdJzWjY4zGZU48UcOn+Gjg+FXZag16o=',
      customProps: {
        aspectratio: '16:9',
        autostart: false,
        width: '100%',
        skin: {
          name: 'bekle'
        }
      }
    };
    return pipe(
      set(`${prefix}jwpOptions`, options),
      set(`${prefix}mimeType`, mimeType),
      omit(`${prefix}id`)
    )(media);
  }
  return omit(`${prefix}id`, media);
};

const findByChapter = chapterRef => filter({chapter_id: chapterRef}, slidesData);

// eslint-disable-next-line import/prefer-default-export,require-await
const findById = async id => {
  if (!slideStore.has(id)) throw new Error(`Slide ${id} not found`);
  const slide = slideStore.get(id);
  return pipe(
    update('lessons', map(appendJWPOptions(''))),
    update('question.medias', map(appendJWPOptions('src.0.'))),
    update('context.media', appendJWPOptions('src.0.'))
  )(slide);
};

export {findById, findByChapter};
