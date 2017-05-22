import test from 'ava';
import isArray from 'lodash/fp/isArray';
import isString from 'lodash/fp/isString';
import {createProgression, findById, createAnswer} from '../progressions';

test('should create progression', async t => {
  const {id, actions} = await createProgression({});

  t.true(isString(id));
  t.true(isArray(actions));
});

test('should find progression', async t => {
  const progression = await createProgression({});

  t.deepEqual(await findById(progression.id), progression);
});

test('should add anwser action', async t => {
  const progression = await createProgression({});

  const progressionWithAnswer = await createAnswer(progression.id);

  t.is(progressionWithAnswer.actions.length, 1);
});
