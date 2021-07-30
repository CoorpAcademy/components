import test from 'ava';
import {find, get, pipe, uniqueId, set} from 'lodash/fp';
import createCluesService from '../clues';

import createProgressionsService from '../progressions';
import * as fixtures from './fixtures';
import slidesData from './fixtures/data/slides';

const Progressions = createProgressionsService(fixtures);
const {findById} = createCluesService(fixtures);

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should findById', async t => {
  const progression = await Progressions.create(uniqueId(), engine, {
    type: 'chapter',
    ref: '5.C7'
  });
  const nextContent = progression.state.nextContent;
  const progressionWithClue = await Progressions.requestClue(progression._id, {
    content: nextContent
  });
  const clue = await findById(progressionWithClue._id, nextContent.ref);

  const expected = pipe(find({_id: nextContent.ref}), get('clue'))(slidesData);
  t.deepEqual(clue, expected);
});

test('should fail for wrong progressionId', t => {
  return t.throwsAsync(() => Progressions.requestClue('wrongId', {}), {
    message: 'progression "wrongId" not found'
  });
});

test("should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create(uniqueId(), engine, {
    type: 'chapter',
    ref: '5.C7'
  });
  const corruptProgression = await Progressions.save(
    pipe(set('state.content.ref', 'unknown'), set('state.requestedClues', ['unknown']))(progression)
  );
  return t.throwsAsync(() => findById(corruptProgression._id, 'unknown'), {
    message: 'Clue not found'
  });
});

test("should throw error if clue haven't been requested", async t => {
  const progression = await Progressions.create(uniqueId(), engine, {
    type: 'chapter',
    ref: '5.C7'
  });
  return t.throwsAsync(() => findById(progression._id, 'unknown'), {
    message: 'Clue is not available'
  });
});

test('should fail with wrong progressionId2', t => {
  return t.throwsAsync(() => findById('wrongId', {}), {message: 'progression "wrongId" not found'});
});

test('should fail to acceptExtraLife with progression without state', async t => {
  const progression = await Progressions.create(uniqueId(), engine, {type: 'chapter', ref: '5.C7'});
  delete progression.state;
  Progressions.save(progression);

  return t.throwsAsync(() => findById(progression._id, {}), {
    message: `progression "${progression._id}" has no state`
  });
});
