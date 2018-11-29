import test from 'ava';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import CluesService from '../clues';

import ProgressionsService from '../progressions';
import * as fixtures from './fixtures';
import slidesData from './fixtures/data/slides';

const Progressions = ProgressionsService(fixtures);
const {findById} = CluesService(fixtures);

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should findById', async t => {
  const progression = await Progressions.create(engine, {
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

test("should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create(engine, {
    type: 'chapter',
    ref: '5.C7'
  });
  const corruptProgression = Progressions.save(
    pipe(set('state.content.ref', 'unknown'), set('state.requestedClues', ['unknown']))(progression)
  );
  return t.throws(findById(corruptProgression._id, 'unknown'), 'Clue not found');
});

test("should throw error if clue haven't been requested", async t => {
  const progression = await Progressions.create(engine, {
    type: 'chapter',
    ref: '5.C7'
  });
  return t.throws(findById(progression._id, 'unknown'), 'Clue is not available');
});
