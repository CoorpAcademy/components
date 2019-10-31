import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import values from 'lodash/fp/values';

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
