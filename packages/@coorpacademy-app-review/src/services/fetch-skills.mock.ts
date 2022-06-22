import crossFetch from 'cross-fetch';
import {Skills} from '../types/skills';
import {okJSONResponse} from './tools/fetch.mocks';

export default (): typeof crossFetch => {
  const result: Skills = [
    {
      _id: '12341234',
      name: 'skill-test',
      custom: false,
      ref: '_skill-ref'
    },
    {
      _id: '12341234',
      name: 'skill-test-2',
      custom: true,
      ref: '_skill-ref-2'
    }
  ];

  return okJSONResponse(result);
};
