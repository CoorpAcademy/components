import test from 'ava';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {findById} from '../clues';
import * as Progressions from '../progressions';
import slidesData from '../slides.data';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should findById', async t => {
  const progression = await Progressions.create({engine});
  const nextContent = progression.state.nextContent;
  const progressionWithClue = await Progressions.requestClue(progression._id, {
    content: nextContent
  });
  const clue = await findById(progressionWithClue._id, nextContent.ref);

  const expected = pipe(find({_id: nextContent.ref}), get('clue'))(slidesData);
  t.deepEqual(clue, expected);
});

test("should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create({engine});
  const corruptProgression = Progressions.save(
    pipe(set('state.content.ref', 'unknown'), set('state.requestedClues', ['unknown']))(progression)
  );
  return t.throws(findById(corruptProgression._id, 'unknown'), 'Clue not found');
});

test("should throw error if clue haven't been requested", async t => {
  const progression = await Progressions.create({engine});
  return t.throws(findById(progression._id, 'unknown'), 'Clue is not available');
});
