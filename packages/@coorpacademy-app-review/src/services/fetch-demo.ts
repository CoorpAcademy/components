import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';
import {Fetch, toJSON} from './fetch-responses';

// -----------------------------------------------------------------------------

type JWT = {
  exp: number;
  iat: number;
  grants: unknown;
  iss: string;
  user: string;
  usage: string;
  host: string;
};

type QueryParams = {
  [key: string]: string | number | boolean;
};

const buildUrlQueryParams = (params: QueryParams): string =>
  Object.keys(params)
    .map(key => {
      const value = params[key].toString();
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');

// -----------------------------------------------------------------------------

const fetchCourse =
  (fetch: Fetch) =>
  async (token, language, universalRef): Promise<Course> => {
    const jwt: JWT = decode(token);
    const query = {
      type: 'course',
      universalRef,
      lang: language
    };

    const response = await fetch(`${jwt.host}/api/v2/contents?${buildUrlQueryParams(query)}`, {
      headers: {authorization: token}
    });

    const {hits} = (await toJSON(response)) as CatalogHits;
    return hits?.[0];
  };

// -----------------------------------------------------------------------------

export type Course = {title};
export type CatalogHits = {hits: Course[]};

// -----------------------------------------------------------------------------

export {fetchCourse};
export default fetchCourse(crossFetch);
