import recommendations from './recommendations.data';

// eslint-disable-next-line import/prefer-default-export
export const find = () => {
  return Promise.resolve(recommendations);
};
