import crossFetch from 'cross-fetch';
// import decode from 'jwt-decode';

import {SlideFromAPI} from '../actions/data/slides';
// import {JWT} from '../types/common';
// import {toJSON} from './tools/fetch-responses';
import mockCreateProgression from './create-progression.mock';

// -----------------------------------------------------------------------------

type FetchSlide = (slideRef: string, token: string) => Promise<SlideFromAPI>;
type FetchSlideBuilder = (fetch: typeof crossFetch) => FetchSlide;
type DefaultFetchSlideBuilder = () => FetchSlide;

// -----------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars, unicorn/consistent-function-scoping, require-await
const fetchSlide: FetchSlideBuilder = fetch => async (slideRef: string, token: string) => {
  // const {host}: JWT = decode(token);
  // const response = await fetch(`${host}/api/v2/slide/${slideRef}`, {
  //   headers: {authorization: token}
  // });

  // const slide = (await toJSON(response)) as SlideFromAPI;
  // return slide;
  return {} as SlideFromAPI;
};

// -----------------------------------------------------------------------------

const buildFetchSlide: DefaultFetchSlideBuilder = () => {
  if (process.env.SERVICES !== 'mocks') {
    return fetchSlide(crossFetch);
  }

  return fetchSlide(mockCreateProgression);
};

// -----------------------------------------------------------------------------

export {fetchSlide};
export default buildFetchSlide();
