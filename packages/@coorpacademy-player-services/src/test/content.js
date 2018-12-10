import test from 'ava';
import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import values from 'lodash/fp/values';
import {getConfig} from '@coorpacademy/progression-engine';
import ContentService from '../content';
import chaptersData from './fixtures/data/chapters';
import slidesData from './fixtures/data/slides';
import levelsData from './fixtures/data/levels';

import * as fixtures from './fixtures';

const {find, getInfo} = ContentService(fixtures);

const first = pipe(values, head);

test('should throw error if content type is unknown', t => {
  return t.throws(find('unknown', 'foo'));
});

test('should find a level', async t => {
  const level = first(levelsData);
  t.deepEqual(await find('level', level.ref), level);
});

test('should tell when a level is not found', async t => {
  const error = await t.throws(find('level', 'unknownLevelId'));
  t.is(error.message, 'Level unknownLevelId not found');
});

test('should find a chapter', async t => {
  const chapter = first(chaptersData);
  t.deepEqual(await find('chapter', chapter._id), chapter);
});

test('should tell when a chapter is not found', async t => {
  const error = await t.throws(find('chapter', 'unknownChapterId'));
  t.is(error.message, 'Chapter unknownChapterId not found');
});

test('should find a slide', async t => {
  const slide = first(slidesData);
  t.deepEqual(await find('slide', slide._id), slide);
});

test('should tell when a slide is not found', async t => {
  const error = await t.throws(find('slide', 'unknownSlideId'));
  t.is(error.message, 'Slide unknownSlideId not found');
});

test('should count slides for level', async t => {
  const info = await getInfo('1.A', 'learner', 1);
  t.deepEqual(info, {nbSlides: 8});
});

test('should return -1 when could not count slides for a content', async t => {
  const info = await getInfo('foo', 'learner', 1);
  t.deepEqual(info, {nbSlides: -1});
});

test('should count slides for chapter', async t => {
  const engineRef = 'microlearning';
  const version = 1;
  const info = await getInfo('5.C8', engineRef, version);

  const maxNbSlides = pipe(getConfig, get('slidesToComplete'))({
    ref: engineRef,
    version
  });

  t.deepEqual(info, {nbSlides: maxNbSlides});
});
