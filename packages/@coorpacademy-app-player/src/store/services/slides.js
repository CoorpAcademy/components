import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
import update from 'lodash/fp/update';
import values from 'lodash/fp/values';
import slidesData from './slides.data';

const slideStore = pipe(
  values,
  map(pipe(unset('clue'), unset('question.content.answers'))),
  reduce((slideMap, slide) => slideMap.set(slide._id, slide), new Map())
)(slidesData);

const appendJWPOptions = lesson => {
  if (get('mimeType', lesson) === 'video/mp4') {
    const options = {
      playerId: get('_id', lesson),
      file: get('mediaUrl', lesson),
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

    return set('jwpOptions', options, lesson);
  }
  return lesson;
};

// eslint-disable-next-line import/prefer-default-export,require-await
export const findById = async id => {
  if (!slideStore.has(id)) throw new Error(`Slide ${id} not found`);
  const slide = slideStore.get(id);
  return update('lessons', map(appendJWPOptions), slide);
};
