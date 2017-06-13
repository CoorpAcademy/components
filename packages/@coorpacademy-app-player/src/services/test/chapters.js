import test from 'ava';
import head from 'lodash/fp/head';
import isArray from 'lodash/fp/isArray';
import chaptersData from '../chapters.data';
import {findById, findAll} from '../chapters';

test('should return all chapters', async t => {
  const chapters = await findAll();
  t.true(isArray(chapters));
});

test('should findById', async t => {
  const chapter = head(chaptersData);
  t.deepEqual(await findById(chapter._id), chapter);
});

test("should throw error if chapter doesn't exist", t => {
  return t.throws(findById('unknown'));
});
