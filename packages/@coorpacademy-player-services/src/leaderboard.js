// @flow strict

import random from 'lodash/fp/random';

export const getRank = (userId: string): Promise<number> => {
  return Promise.resolve(random(0, 10));
};
