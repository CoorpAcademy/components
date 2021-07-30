import test from 'ava';
import {head, pipe, values} from 'lodash/fp';
import createSlidesService from '../slides';

import slidesData from './fixtures/data/slides';
import * as fixtures from './fixtures';

const Slides = createSlidesService(fixtures);
const {findById} = Slides;

test('should findById', async t => {
  const slide = pipe(values, head)(slidesData);
  t.deepEqual(await findById(slide._id), slide);
});

test("should throw error if slide doesn't exist", t => {
  return t.throwsAsync(() => findById('unknown'));
});
