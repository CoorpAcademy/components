import test from 'ava';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import values from 'lodash/fp/values';
import unset from 'lodash/fp/unset';
import slidesData from '../fixtures/slides';
import {findById} from '../slides';

test('should findById', async t => {
  const slide = pipe(values, head, unset('clue'), unset('question.content.answers'))(slidesData);
  t.deepEqual(await findById(slide._id), slide);
});

test("should throw error if slide doesn't exist", t => {
  return t.throws(findById('unknown'));
});
