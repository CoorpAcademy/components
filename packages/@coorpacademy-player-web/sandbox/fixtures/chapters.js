// @flow

import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import values from 'lodash/fp/values';

import chaptersData from './data/chapters';

const mayBy = key =>
  pipe(values, reduce((map, object) => map.set(get(key, object), object), new Map()));

const toMapById = mayBy('_id');
const chapters = toMapById(chaptersData);

const findById = chapters.get;

// eslint-disable-next-line import/prefer-default-export
export {findById};
