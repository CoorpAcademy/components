import test from 'ava';
import head from 'lodash/fp/head';
import {findById} from '../answers';
import * as Slides from '../slides';
import * as Progressions from '../progressions';

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
  const slide = await Slides.findById(progressionWithAnswer.state.content.ref);
  const correctAnswers = await findById(
    progressionWithAnswer._id,
    progressionWithAnswer.state.content.ref
  );

  t.deepEqual(correctAnswers, slide.question.content.answers);
});

test("should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create({engine});
  const slide = await Slides.findAll().then(head);
  return t.throws(findById(progression._id, slide._id));
});
