// @flow
import test from 'ava';
import times from 'lodash/fp/times';
import uniq from 'lodash/fp/uniq';
import type {Content} from '../types';
import createProgression from '../create-progression';
import slides from './fixtures/slides';

const content: Content = Object.freeze({
  type: 'chapter',
  ref: '1.A1',
  version: '1.0.0'
});

test('should throw if the engine type is unknown', t => {
  // $FlowFixMe (this case can't occur due to Flow, but we should still handle it in the tests)
  t.throws(() => createProgression('idontexist', content, slides), 'Unknown engine idontexist');
});

test('should return a new progression for microlearning', t => {
  const progression = createProgression('microlearning', content, slides);

  t.deepEqual(progression.content, content);
  t.deepEqual(progression.actions, []);
  t.deepEqual(progression.engine, {ref: 'microlearning', version: '1'});
  t.deepEqual(progression.initialState, progression.state);
  t.true(progression.initialState.lives === 1);
  t.true(progression.initialState.isCorrect);
  t.deepEqual(progression.initialState.slides, []);
  t.deepEqual(progression.initialState.step, {current: 0, total: 4});
  t.falsy(progression.initialState.content);
  t.true(progression.initialState.nextContent.type === 'slide');
  t.true(typeof progression.initialState.nextContent.ref === 'string');
});

test('should return a random starting slide', t => {
  const startingSlides = times(i => i, 50)
    .map(() => createProgression('microlearning', content, slides))
    .map(progression => progression.initialState.nextContent.ref);

  t.true(uniq(startingSlides).length >= 2);
});
