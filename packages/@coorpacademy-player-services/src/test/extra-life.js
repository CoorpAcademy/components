import test from 'ava';
import {uniqueId} from 'lodash/fp';
import createContentService from '../progressions';
import * as fixtures from './fixtures';

const Progressions = createContentService(fixtures);

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should add one extra life if call accept', async t => {
  const progression = await Progressions.create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  const progressionWithAnswer = await Progressions.postAnswer(progression._id, {
    content: progression.state.nextContent,
    answer: []
  });

  t.is(progressionWithAnswer.state.nextContent.ref, 'extraLife');

  const progressionWithAcceptedExtraLife = await Progressions.acceptExtraLife(progression._id, {
    content: progressionWithAnswer.state.nextContent
  });

  t.is(progressionWithAcceptedExtraLife.state.nextContent.type, 'slide');
  t.is(progressionWithAcceptedExtraLife.state.lives, 1);
});

test('should fail to acceptExtraLife with wrong progressionId', t => {
  return t.throwsAsync(() => Progressions.acceptExtraLife('wrongId', {}), {
    message: 'progression "wrongId" not found'
  });
});

test('should fail to refuseExtraLife with wrong progressionId', t => {
  return t.throwsAsync(() => Progressions.refuseExtraLife('wrongId', {}), {
    message: 'progression "wrongId" not found'
  });
});

test('should fail to acceptExtraLife with progression without state', async t => {
  const progression = await Progressions.create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  delete progression.state;
  return t.throwsAsync(() => Progressions.acceptExtraLife(progression._id, {}), {
    message: `progression "${progression._id}" has no state`
  });
});

test('should fail to refuseExtraLife with progression without state', async t => {
  const progression = await Progressions.create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  delete progression.state;
  return t.throwsAsync(() => Progressions.refuseExtraLife(progression._id, {}), {
    message: `progression "${progression._id}" has no state`
  });
});

test('should forward to failure if call refuse', async t => {
  const progression = await Progressions.create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  const progressionWithAnswer = await Progressions.postAnswer(progression._id, {
    content: progression.state.nextContent,
    answer: []
  });

  t.is(progressionWithAnswer.state.nextContent.ref, 'extraLife');

  const progressionWithAcceptedExtraLife = await Progressions.refuseExtraLife(progression._id, {
    content: progressionWithAnswer.state.nextContent
  });

  t.is(progressionWithAcceptedExtraLife.state.nextContent.type, 'failure');
  t.is(progressionWithAcceptedExtraLife.state.lives, 0);
});
