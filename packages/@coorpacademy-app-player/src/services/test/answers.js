import test from 'ava';
import find from 'lodash/fp/find';
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

  const correctAnswersWithoutGivenAnswer = await findById(
    progressionWithAnswer._id,
    progressionWithAnswer.state.content.ref
  );
  t.deepEqual(correctAnswersWithoutGivenAnswer.correctAnswer, slide.question.content.answers[0]);
  t.deepEqual(correctAnswersWithoutGivenAnswer.corrections, []);
});

test("findById should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create({engine});
  return t.throws(
    findById(progression._id, progression.state.nextContent.ref, ['foo', 'bar']),
    'Answers are not available'
  );
});
