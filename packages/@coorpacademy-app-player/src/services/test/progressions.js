import test from 'ava';
import isObject from 'lodash/fp/isObject';
import isString from 'lodash/fp/isString';
import isArray from 'lodash/fp/isArray';
import {createProgression, findById, createAnswer, find} from '../progressions';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should return all progressions', async t => {
  const progressions = await find();
  t.true(isArray(progressions));
});

test('should create progression', async t => {
  const {_id, state} = await createProgression({engine});

  t.true(isString(_id));
  t.true(isObject(state));
  t.true(isObject(state.nextContent));
  t.true(isString(state.nextContent.ref));
  t.is(state.nextContent.type, 'slide');
});

test('should find progression', async t => {
  const progression = await createProgression({engine});

  t.deepEqual(await findById(progression._id), progression);
});

test('should add answer action', async t => {
  const progression = await createProgression({engine});
  const progressionWithAnswer = await createAnswer(progression._id, {
    content: progression.state.nextContent,
    answers: ['bar']
  });

  t.true(isString(progressionWithAnswer._id));
  t.true(isObject(progressionWithAnswer.state));
  t.true(isObject(progressionWithAnswer.state.nextContent));
  t.true(isString(progressionWithAnswer.state.nextContent.ref));
});

test("should throw error if progression doesn't exist", t => {
  return t.throws(findById('unknown'));
});
