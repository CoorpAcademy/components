import test from 'ava';
import find from 'lodash/fp/find';
import {findById} from '../answers';
import * as Progressions from '../progressions';
import slidesData from '../fixtures/slides';

const engine = {
  ref: 'microlearning',
  version: '1'
};

test('findById should return the correct answer and corrections for the given answer', async t => {
  const progression = await Progressions.create(engine, {type: 'chapter', ref: '5.C7'});
  const answer = ['bar'];
  const progressionWithAnswer = await Progressions.postAnswer(progression._id, {
    content: progression.state.nextContent,
    answer
  });
  const slide = find({_id: progressionWithAnswer.state.content.ref}, slidesData);

  const correctAnswer = await findById(
    progressionWithAnswer._id,
    progressionWithAnswer.state.content.ref,
    answer
  );

  t.deepEqual(correctAnswer.correctAnswer, slide.question.content.answers[0]);
  t.deepEqual(correctAnswer.corrections, [{answer: 'bar', isCorrect: false}]);

  const correctAnswersWithoutGivenAnswer = await findById(
    progressionWithAnswer._id,
    progressionWithAnswer.state.content.ref
  );
  t.deepEqual(correctAnswersWithoutGivenAnswer.correctAnswer, slide.question.content.answers[0]);
  t.deepEqual(correctAnswersWithoutGivenAnswer.corrections, []);
});

test("findById should throw error if slide doesn't exist", async t => {
  const progression = await Progressions.create(engine, {type: 'chapter', ref: '5.C7'});
  return t.throws(
    findById(progression._id, progression.state.nextContent.ref, ['foo', 'bar']),
    'Answer is not available'
  );
});
