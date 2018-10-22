import test from 'ava';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import unset from 'lodash/fp/unset';
import slidesData from '../slides.data';
import {findById} from '../slides';

test('should findById', async t => {
  const slide = pipe(head, unset('clue'), unset('question.content.answers'))(slidesData);
  t.deepEqual(await findById(slide._id), slide);
});

test("should throw error if slide doesn't exist", t => {
  return t.throws(findById('unknown'));
});
