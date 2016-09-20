import {has, get, set, map} from 'lodash/fp';

export const buildFixture = (treant, options) => fixture => {
  if (has('children', fixture))
    return set(
      'children',
      map(createChild => createChild(treant, options), get('children', fixture)),
      fixture
    );
  return fixture;
};
