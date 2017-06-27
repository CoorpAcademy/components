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

test('findById should return the correct answer and corrections for the given answer', async t => {
  const progression = await Progressions.create({engine});
  const answers = ['bar'];
  const progressionWithAnswer = await Progressions.createAnswer(progression._id, {
    content: progression.state.nextContent,
    answers
  });
  const slide = find({_id: progressionWithAnswer.state.content.ref}, slidesData);
  const correctAnswers = await findById(
    progressionWithAnswer._id,
    progressionWithAnswer.state.content.ref,
    answers
  );

  t.deepEqual(correctAnswers.correctAnswer, slide.question.content.answers[0]);
  t.deepEqual(correctAnswers.corrections, [{answer: 'bar', isCorrect: false}]);
});

test("findById should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create({engine});
  const slide = find({_id: progression.state.content.ref}, slidesData);
  return t.throws(
    findById(progression._id, slide._id, ['foo', 'bar']),
    'Answers are not available'
  );
});
