import test from 'ava';
import isObject from 'lodash/fp/isObject';
import isString from 'lodash/fp/isString';
import {createProgression, findById, createAnswer} from '../progressions';

test('should create progression', async t => {
  const {_id, state} = await createProgression({});

  t.true(isString(_id));
  t.true(isObject(state));
  t.true(isObject(state.nextContent));
  t.true(isString(state.nextContent.ref));
  t.is(state.nextContent.type, 'slide');
});

test('should find progression', async t => {
  const progression = await createProgression({});

  t.deepEqual(await findById(progression._id), progression);
});

test('should add answer action', async t => {
  const progression = await createProgression({});
  const progressionWithAnswer = await createAnswer(progression._id, {
    content: progression.state.nextContent,
    answers: ['bar']
  });

  t.true(isString(progressionWithAnswer._id));
  t.true(isObject(progressionWithAnswer.state));
  t.true(isObject(progressionWithAnswer.state.nextContent));
  t.true(isString(progressionWithAnswer.state.nextContent.ref));
});
