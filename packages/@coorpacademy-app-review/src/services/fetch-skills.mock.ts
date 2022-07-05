import crossFetch from 'cross-fetch';
import {Skills} from '../types/skills';
import {okJSONResponse} from './tools/fetch.mocks';

const result: Skills = [
  {
    skillRef: '_skill-ref',
    slidesToReview: 2,
    name: 'skill-test',
    custom: false
  },
  {
    skillRef: '_skill-ref-2',
    slidesToReview: 2,
    name: 'skill-test-2',
    custom: true
  }
];

const mockFetchSkills: typeof crossFetch = okJSONResponse(result);
export default mockFetchSkills;
