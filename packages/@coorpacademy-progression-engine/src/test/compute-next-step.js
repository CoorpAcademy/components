// @flow
import test from 'ava';
import isEmpty from 'lodash/fp/isEmpty';
import computeNextStep from '../compute-next-step';
import slides from './fixtures/slides';

test('should return the next slide (TMP)', t => {
  const progression = Object.freeze({});
  const action = Object.freeze({});
  const slide = computeNextStep(progression, slides, action);
  t.false(isEmpty(slide));
  t.is(slide.chapter_id, '1.A1');
});
