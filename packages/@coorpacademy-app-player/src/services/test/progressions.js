import test from 'ava';
import isObject from 'lodash/fp/isObject';
import isString from 'lodash/fp/isString';
import {createProgression, findById, createAnswer} from '../progressions';

test('should create progression', async t => {
  const {id, state} = await createProgression({});

  t.true(isString(id));
  t.true(isObject(state));
  t.true(isObject(state.nextContent));
  t.true(isString(state.nextContent.ref));
  t.is(state.nextContent.type, 'slide');
});

test('should find progression', async t => {
  const progression = await createProgression({});

  t.deepEqual(await findById(progression.id), progression);
});

test('should add answer action', async t => {
  const progression = await createProgression({});

  const progressionWithAnswer = await createAnswer(progression.id, {
    content: {
      ref: 'qcmSlide-1',
      type: 'slide'
    },
    answers: ['bar']
  });

  t.true(isString(progressionWithAnswer.id));
  t.true(isObject(progressionWithAnswer.state));
  t.true(isObject(progressionWithAnswer.state.nextContent));
  t.true(isString(progressionWithAnswer.state.nextContent.ref));
});
