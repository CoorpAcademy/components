import test from 'ava';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import values from 'lodash/fp/values';
import SlidesService from '../slides';

import slidesData from './fixtures/data/slides';
import * as fixtures from './fixtures';

const Slides = SlidesService(fixtures);
const {findById} = Slides;

test('should findById', async t => {
  const slide = pipe(values, head)(slidesData);
  t.deepEqual(await findById(slide._id), slide);
});

test("should throw error if slide doesn't exist", t => {
  return t.throws(findById('unknown'));
});
