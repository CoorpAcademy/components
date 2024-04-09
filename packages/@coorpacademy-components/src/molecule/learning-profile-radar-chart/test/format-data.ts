import test from 'ava';
import {formatData} from '..';
import {FormatedDataType} from '../types';
import fixture from './fixtures/hexagon';

const {data, legend} = fixture.props;
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
  const res = formatData(legend, data);
  t.deepEqual(res, expected);
});

test('formatData > {}', t => {
  const res = formatData({}, {});
  t.deepEqual(res, []);
});

test('formatData > {test: 5}', t => {
  const res = formatData({test: 'nop'}, {test: 5});
  t.deepEqual(res, [
    {
      subject: 'nop',
      value1: 5
    }
  ]);
});
