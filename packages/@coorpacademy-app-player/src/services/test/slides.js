import test from 'ava';
import head from 'lodash/fp/head';
import slidesData from '../slides.data';
import {findById} from '../slides';

test('should findById', async t => {
  const slide = head(slidesData);
  t.deepEqual(await findById(slide._id), slide);
});
