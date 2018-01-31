import test from 'ava';
import omit from 'lodash/fp/omit';
import isObject from 'lodash/fp/isObject';
import isString from 'lodash/fp/isString';
import {getConfig} from '@coorpacademy/progression-engine';
import {
  create,
  findById,
  postAnswer,
  findBestOf,
  markResourceAsViewed,
  getEngineConfig
} from '../progressions';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should create progression', async t => {
  const progression = await create(engine);
  t.true(isString(progression._id));
  t.true(isString(progression.actions[0].payload.nextContent.ref));
  t.true(isString(progression.state.nextContent.ref));
  t.deepEqual(
    omit(['_id', 'state', ['actions', 0, 'payload', 'nextContent', 'ref']], progression),
    {
      engine,
      content: {type: 'chapter', ref: 'cha_Ny1BTxRp~'},
      engineOptions: {},
      actions: [{type: 'move', payload: {instructions: null, nextContent: {type: 'slide'}}}]
    }
  );
});

test('should find progression', async t => {
  const progression = await create(engine);

  t.deepEqual(await findById(progression._id), progression);
});

test('should find best score', async t => {
  const progression = await findBestOf('chapter', '5.C7');
  t.is(progression.state.stars, 12);
});

test('should find 0 stars when there is no best score so far', async t => {
  const progression = await findBestOf('none');
  t.is(progression.state.stars, 0);
});

test('should add answer action', async t => {
  const progression = await create(engine);
  const progressionWithAnswer = await postAnswer(progression._id, {
    content: progression.state.nextContent,
    answer: ['bar']
  });

  t.true(isObject(progressionWithAnswer.state));
  t.true(isObject(progressionWithAnswer.state.nextContent));
  t.true(isString(progressionWithAnswer.state.nextContent.ref));
});

test("should throw error if progression doesn't exist", t => {
  return t.throws(findById('unknown'));
});

test('should mark a resource as viewed', async t => {
  const progression = await create(engine);
  const result = await markResourceAsViewed(progression._id, {
    content: {type: 'chapter', ref: progression.content.ref},
    resource: {ref: 'foo'}
  });

  t.deepEqual(result.state.viewedResources, [
    {
      type: 'chapter',
      ref: progression.content.ref,
      resources: ['foo']
    }
  ]);
});

test('getEngineConfig should return the value from progression-engine', async t => {
  const config = await getEngineConfig(engine);
  t.deepEqual(config, getConfig(engine));
});
