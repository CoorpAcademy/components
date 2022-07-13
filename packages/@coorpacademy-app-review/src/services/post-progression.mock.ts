import crossFetch from 'cross-fetch';
import {ProgressionFromAPI} from '../actions/data/progression';
import {okJSONResponse} from './tools/fetch.mocks';

export const mockedProgression: ProgressionFromAPI = {
  _id: '62b1d1087aa12f00253f40ee',
  state: {
    // ------------------------------------------------------
    // unused for now / to decide whether to use it when the
    // validation-progression is plugged in
    pendingSlides: [],
    step: {
      current: Number.NaN
    },
    // ------------------------------------------------------
    isCorrect: true,
    nextContent: {
      ref: 'sli_N1XACJobn',
      type: 'slide'
    }
    // slides: [
    //   'sli_NJ3m5KtWh',
    //   'sli_V1gKpYYZ2',
    //   'sli_VJzOgotbh',
    //   'sli_V1ug-dtZn',
    //   'sli_VyZU-ejW3',
    //   'sli_Vy8ChgjZh',
    //   'sli_V1ijS1oWh',
    //   'sli_N1XACJobn'
    // ],
  }
};

const mockCreateProgression: typeof crossFetch = okJSONResponse(mockedProgression);
export default mockCreateProgression;
