import {get, pipe, reduce, values} from 'lodash/fp';

import chaptersData from './data/chapters';

const mayBy = key =>
  pipe(
    values,
    reduce((map, object) => map.set(get(key, object), object), new Map())
  );

const toMapById = mayBy('_id');
const chapters = toMapById(chaptersData);

const findById = ref => chapters.get(ref);

export {findById};
