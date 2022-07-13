import crossFetch from 'cross-fetch';
import decode from 'jwt-decode';

import {ProgressionFromAPI} from '../actions/data/progression';
import {JWT} from '../types/common';
import {toJSON} from './tools/fetch-responses';
import mockPostProgression from './post-progression.mock';

// -----------------------------------------------------------------------------

type PostProgression = (skillRef: string, token: string) => Promise<ProgressionFromAPI>;
type CreatePostProgression = (fetch: typeof crossFetch) => PostProgression;
type DefaultCreatePostProgression = () => PostProgression;

// -----------------------------------------------------------------------------

const postProgression: CreatePostProgression = fetch => async (skillRef, token) => {
  const {host}: JWT = decode(token);
  const response = await fetch(`${host}/api/v2/progressions`, {
    method: 'post',
    headers: {authorization: token},
    body: JSON.stringify({
      content: {
        ref: skillRef,
        type: 'slide'
      },
      engine: {
        ref: 'review',
        version: '1'
      }
    })
  });

  return toJSON<ProgressionFromAPI>(response);
};

// -----------------------------------------------------------------------------

const createPostProgression: DefaultCreatePostProgression = () => {
  if (process.env.SERVICES !== 'mocks') {
    return postProgression(crossFetch);
  }

  return postProgression(mockPostProgression);
};

// -----------------------------------------------------------------------------

export {postProgression};
export default createPostProgression();
