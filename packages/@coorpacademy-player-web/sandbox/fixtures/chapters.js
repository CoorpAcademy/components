import {get, pipe, reduce, values} from 'lodash/fp';

import chaptersData from './data/chapters';

const mayBy = key =>
  pipe(
    values,
    reduce((map, object) => map.set(get(key, object), object), new Map())
  );

const toMapById = mayBy('_id');
const chapters = toMapById(chaptersData);

const findById = ref => Promise.resolve(chapters.get(ref));
const getNextChapter = ref => Promise.resolve(chapters.get(ref));

<<<<<<< HEAD
export {findById};
=======
// eslint-disable-next-line import/prefer-default-export
export {findById, getNextChapter};
>>>>>>> updated fetchdata, fixed sandbox properly
