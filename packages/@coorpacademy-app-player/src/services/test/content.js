import test from 'ava';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import unset from 'lodash/fp/unset';
import chaptersData from '../chapters.data';
import slidesData from '../slides.data';
import levelsData from '../levels.data';
import {find} from '../content';

test('should throw error if content type is unknown', t => {
  return t.throws(find('unknown', 'foo'));
});

test('should find a level', async t => {
  const level = head(levelsData);
  t.deepEqual(await find('level', level._id), level);
});

test('should tell when a level is not found', async t => {
  const error = await t.throws(find('level', 'unknownLevelId'));
  t.is(error.message, 'Level not found');
});

test('should find a chapter', async t => {
  const chapter = head(chaptersData);
  t.deepEqual(await find('chapter', chapter._id), chapter);
});

test('should tell when a chapter is not found', async t => {
  const error = await t.throws(find('chapter', 'unknownChapterId'));
  t.is(error.message, 'Chapter not found');
});

test('should find a slide', async t => {
  const slide = pipe(head, unset('clue'), unset('question.content.answers'))(slidesData);
  t.deepEqual(await find('slide', slide._id), slide);
});

test('should tell when a slide is not found', async t => {
  const error = await t.throws(find('slide', 'unknownSlideId'));
  t.is(error.message, 'Slide not found');
});
