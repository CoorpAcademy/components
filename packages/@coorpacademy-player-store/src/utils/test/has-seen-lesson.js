import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import hasSeenAnyLesson from '../has-seen-lesson';
import {getCurrentSlide} from '../state-extract';
import slideFixture from './slide';

const setViewedResources = (lessonId, chapterId) => state =>
  set(
    ['data', 'progressions', 'entities', 0, 'state', 'viewedResources'],
    [
      {
        type: 'chapter',
        ref: chapterId,
        resources: [lessonId]
      }
    ],
    state
  );

test('should return false if no lesson has been seen', t => {
  const state = Object.freeze(slideFixture);
  const result = hasSeenAnyLesson(state);

  return t.is(result, false);
});

test('should return true if slide lessons is undefined', t => {
  const state = Object.freeze(slideFixture);
  const slide = getCurrentSlide(state);
  const result = hasSeenAnyLesson(
    set(['data', 'contents', 'slide', 'entities', slide._id, 'lessons'], undefined, state)
  );

  return t.is(result, true);
});

test('should return true if slide lessons is an empty array', t => {
  const state = Object.freeze(slideFixture);
  const slide = getCurrentSlide(state);
  const result = hasSeenAnyLesson(
    set(['data', 'contents', 'slide', 'entities', slide._id, 'lessons'], [], state)
  );

  return t.is(result, true);
});

test('should return true if at least one lesson has been seen', t => {
  const state = Object.freeze(slideFixture);
  const slide = getCurrentSlide(state);
  const result = hasSeenAnyLesson(
    setViewedResources(slide.lessons[0].ref, slide.chapter_id)(state)
  );

  return t.is(result, true);
});

test('should return true if side is at previous step and at least one lesson has been seen', t => {
  const state = Object.freeze(slideFixture);
  const slide = getCurrentSlide(state);
  const result = hasSeenAnyLesson(
    pipe(
      set(['data', 'progressions', 'entities', 0, 'state', 'nextContent'], {type: 'node', ref: 0}),
      set(['data', 'progressions', 'entities', 0, 'state', 'content'], {
        type: 'slide',
        ref: slide._id
      }),
      setViewedResources(slide.lessons[0].ref, slide.chapter_id)
    )(state)
  );

  return t.is(result, true);
});
