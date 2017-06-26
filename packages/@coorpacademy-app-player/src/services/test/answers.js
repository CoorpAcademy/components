import test from 'ava';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import {findById} from '../answers';
import * as Progressions from '../progressions';
import slidesData from '../slides.data';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('should findById', async t => {
  const progression = await Progressions.create({engine});
  const progressionWithAnswer = await Progressions.createAnswer(progression._id, {
    content: progression.state.nextContent,
    answers: ['bar']
  });
  const correctAnswers = await findById(progressionWithAnswer._id);

  const expected = pipe(
    find({_id: progressionWithAnswer.state.content.ref}),
    get('question.content.answers'),
    head
  )(slidesData);
  t.deepEqual(correctAnswers, expected);
});

test("should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create({engine});
  const corruptProgression = Progressions.save(
    pipe(set('state.slides', ['unknown']), set('state.content.ref', 'unknown'))(progression)
  );
  return t.throws(findById(corruptProgression._id), 'Answers not found');
});

test("should throw error if clue haven't been requested", async t => {
  const progression = await Progressions.create({engine});
  return t.throws(findById(progression._id), 'Answers are not available');
});
