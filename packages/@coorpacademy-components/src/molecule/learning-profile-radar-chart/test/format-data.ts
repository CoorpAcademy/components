import test from 'ava';
import {formatData} from '..';
import {FormatedDataType} from '../types';
import fixture from './fixtures/hexagon';

const {data} = fixture.props;
const expected: FormatedDataType[] = [
  {
    value1: 15.6,
    subject: 'Adaptability and resilience'
  },
  {
    value1: 43.8,
    subject: 'Digital culture'
  },
  {
    value1: 56.4,
    subject: 'Problem solving'
  },
  {
    value1: 59.1,
    subject: 'Leadership'
  },
  {
    value1: 34.9,
    subject: 'Time management'
  },
  {
    value1: 82.3,
    subject: 'Sustainable thinking'
  }
];

test('formatData', t => {
  const res = formatData(data);
  t.deepEqual(res, expected);
});
