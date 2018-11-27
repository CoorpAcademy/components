import update from 'lodash/fp/update';
import {appendJWPOptions} from './slides';

// eslint-disable-next-line import/prefer-default-export,require-await
export const findById = fixtures => async id => {
  const {getExitNode} = fixtures;
  const exitNode = getExitNode(id);
  return update('media', appendJWPOptions('src.0.'), exitNode);
};
