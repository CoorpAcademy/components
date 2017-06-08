// @flow
import test from 'ava';
import type {Content} from '../types';
import createProgression from '../create-progression';

const content: Content = Object.freeze({
  type: 'chapter',
  ref: '1.A1',
  version: '1.0.0'
});

const initialContent: Content = Object.freeze({
  type: 'slide',
  ref: '1.A1.1'
});

test('should throw if the engine type is unknown', t => {
  t.throws(
    () => createProgression({ref: 'idontexist', version: 'latest'}, content, initialContent),
    'Unknown engine idontexist'
  );
});

test('should return a new progression for microlearning', t => {
  const progression = createProgression(
    {ref: 'microlearning', version: '1'},
    content,
    initialContent
  );

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
