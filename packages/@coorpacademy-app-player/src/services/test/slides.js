import test from 'ava';
import head from 'lodash/fp/head';
import isArray from 'lodash/fp/isArray';
import slidesData from '../slides.data';
import {findById, find} from '../slides';

test('should return all slides', async t => {
  const slides = await find();
  t.true(isArray(slides));
});

test('should findById', async t => {
  const slide = head(slidesData);
  t.deepEqual(await findById(slide._id), slide);
});

test("should throw error if slide doesn't exist", t => {
  return t.throws(findById('unknown'));
});
