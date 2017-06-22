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
  const progressionWithClue = await Progressions.requestClue(progression._id, {
    content: progression.state.nextContent
  });
  const clue = await findById(progressionWithClue._id);

  const expected = pipe(find({_id: progression.state.nextContent.ref}), get('clue'))(slidesData);
  t.deepEqual(clue, expected);
});

test("should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create({engine});
  const corruptProgression = Progressions.save(set('state.content.ref', 'unknown', progression));
  return t.throws(findById(corruptProgression._id));
});

test("should throw error if clue haven't been requested", async t => {
  const progression = await Progressions.create({engine});
  return t.throws(findById(progression._id), 'Clue are not available');
});
