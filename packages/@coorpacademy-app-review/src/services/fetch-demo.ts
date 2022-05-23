import fetch from 'cross-fetch';
import decode from 'jwt-decode';

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

const buildUrlQueryParams = (params: QueryParams) =>
  Object.keys(params)
    .map(key => {
      const value = params[key].toString();
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');

// -----------------------------------------------------------------------------

const fetchCourse = async (token, language, universalRef) => {
  const jwt: JWT = decode(token);
  const query = {
    type: 'course',
    universalRef,
    lang: language
  };

  // const response = await fetch(`${jwt.host}/api/v2/contents?${buildUrlQueryParams(query)}`, {
  //   credentials: 'omit',
  //   headers: {authorization: token, 'X-Requested-With': 'XMLHttpRequest'}
  // });
  const response = await fetch(`${jwt.host}/api/v2/contents?${buildUrlQueryParams(query)}`, {
    headers: {authorization: token}
  });

  const {hits} = await response.json();
  return hits?.[0];
};

// -----------------------------------------------------------------------------

export default fetchCourse;
