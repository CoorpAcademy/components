import {keys} from 'lodash/fp';

export type QueryParams = {
  [key: string]: string | number | boolean;
};

const buildUrlQueryParams = (params: QueryParams) =>
  keys(params)
    .map(key => {
      const value = params[key].toString();
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');

export default buildUrlQueryParams;
