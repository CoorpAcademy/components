import random from 'lodash/fp/random';

// eslint-disable-next-line import/prefer-default-export
export const getRank = () => {
  return Promise.resolve(random(0, 10));
};
