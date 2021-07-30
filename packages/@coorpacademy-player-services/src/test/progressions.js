import test from 'ava';
import {omit, isObject, uniqueId, isString} from 'lodash/fp';
import {getConfig} from '@coorpacademy/progression-engine';

import createProgressionsService from '../progressions';
import * as dataLayer from './fixtures';

const Progressions = createProgressionsService(dataLayer);
const {
  create,
  findById,
  postAnswer,
  findBestOf,
  markResourceAsViewed,
  getAvailableContent,
  getEngineConfig,
  openAssistance
} = Progressions;

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should call openAssistance function', t => {
  const result = openAssistance({});
  t.deepEqual(result, {});
});

test('should call getAvailableContent function', async t => {
  await t.throwsAsync(
    getAvailableContent({
      type: 'level',
      ref: 'plop'
    }),
    {message: 'level plop has no chapterIds'}
  );
});

test('should create progression for a non-adaptive chapter', async t => {
  const _id = uniqueId();
  const progression = await create(_id, engine, {type: 'chapter', ref: '5.C7'});
  t.true(isString(progression._id));
  t.true(isString(progression.actions[0].payload.nextContent.ref));
  t.is(progression.state.nextContent.ref, progression.actions[0].payload.nextContent.ref);
  t.deepEqual(omit(['state', ['actions', 0, 'payload', 'nextContent', 'ref']], progression), {
    _id,
    engine,
    engineOptions: undefined,
    content: {type: 'chapter', ref: '5.C7'},
    actions: [{type: 'move', payload: {instructions: null, nextContent: {type: 'slide'}}}]
  });
});

test('should create progression for an adaptive chapter', async t => {
  const _id = uniqueId();
  const progression = await create(_id, engine, {type: 'chapter', ref: 'cha_N19MiQrYG'});
  t.true(isString(progression._id));
  t.true(isString(progression.actions[0].payload.nextContent.ref));
  t.is(progression.state.nextContent.ref, progression.actions[0].payload.nextContent.ref);
  t.deepEqual(omit(['state'], progression), {
    _id,
    engine,
    engineOptions: undefined,
    content: {type: 'chapter', ref: 'cha_N19MiQrYG'},
    actions: [
      {
        type: 'move',
        payload: {
          instructions: [
            {
              field: 'stars',
              type: 'set',
              value: 0
            }
          ],
          nextContent: {type: 'slide', ref: 'sli_4yHKRmBtz'}
        }
      }
    ]
  });
});

test('should create progression for a level', async t => {
  const _id = uniqueId();
  const learnerEngine = {
    ref: 'learner',
    version: '1'
  };
  const progression = await create(_id, learnerEngine, {type: 'level', ref: '1.A'});
  t.true(isString(progression._id));
  t.true(isString(progression.actions[0].payload.nextContent.ref));
  t.is(progression.state.nextContent.ref, progression.actions[0].payload.nextContent.ref);
  t.deepEqual(omit(['state', ['actions', 0, 'payload', 'nextContent', 'ref']], progression), {
    _id,
    engine: learnerEngine,
    content: {type: 'level', ref: '1.A'},
    engineOptions: undefined,
    actions: [
      {
        type: 'move',
        payload: {
          instructions: null,
          nextContent: {type: 'slide'}
        }
      }
    ]
  });
});

test('should find progression', async t => {
  const progression = await create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});

  t.deepEqual(await findById(progression._id), progression);
});

test('should find best score', async t => {
  const result = await findBestOf('learner', 'chapter', '5.C7');
  t.is(result.stars, 16);
});

test('should find 0 stars when there is no best score so far', async t => {
  const result = await findBestOf('none');
  t.is(result.stars, 0);
});

test('should add answer action', async t => {
  const progression = await create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  const progressionWithAnswer = await postAnswer(progression._id, {
    content: progression.state.nextContent,
    answer: ['bar']
  });

  t.true(isObject(progressionWithAnswer.state));
  t.true(isObject(progressionWithAnswer.state.nextContent));
  t.true(isString(progressionWithAnswer.state.nextContent.ref));
});

test('should override answer action with exitNode if fastSlide is true', async t => {
  const progression = await create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  const progressionWithAnswer = await postAnswer(
    progression._id,
    {
      content: progression.state.nextContent,
      answer: ['bar']
    },
    {godMode: true, fastSlide: true}
  );

  t.is(progressionWithAnswer.state.nextContent.ref, 'successExitNode');
});

test('should fail to postAnswer for wrong progressionId', t => {
  return t.throwsAsync(() => postAnswer('wrongId', {}), {
    message: 'progression "wrongId" not found'
  });
});

test('should fail for progression with no state', async t => {
  const progression = await create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  delete progression.state;
  return t.throwsAsync(postAnswer(progression._id, {}), {
    message: `progression "${progression._id}" has no state`
  });
});

test('should mark a resource as viewed', async t => {
  const progression = await create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  const result = await markResourceAsViewed(progression._id, {
    content: {type: 'chapter', ref: '5.C7'},
    resource: {ref: 'foo'}
  });

  t.deepEqual(result.state.viewedResources, [
    {
      type: 'chapter',
      ref: '5.C7',
      resources: ['foo']
    }
  ]);
});

test('should fail to markResourceAsViewed with wrong progressionId', t => {
  return t.throwsAsync(() => markResourceAsViewed('wrongId', {}), {
    message: 'progression "wrongId" not found'
  });
});

test('getEngineConfig should return the value from progression-engine', async t => {
  const config = await getEngineConfig(engine);
  t.deepEqual(config, getConfig(engine));
});
